import { query } from '../config/database.js';

export const getResumos = async (req, res) => {
  try {
    const { 
      usuario_id, 
      page = 1, 
      limit = 20
    } = req.query;
    
    if (!usuario_id) {
      return res.status(400).json({
        success: false,
        message: 'usuario_id é obrigatório'
      });
    }

    // First, check if resumos table exists
    try {
      await query('SELECT 1 FROM resumos LIMIT 1');
    } catch (tableError) {
      console.log('⚠️ Tabela resumos não existe, criando...');
      
      // Create resumos table
      await query(`CREATE TABLE resumos (
        id INT PRIMARY KEY AUTO_INCREMENT,
        grupo_id INT NULL,
        usuario_id INT NOT NULL,
        conteudo TEXT NOT NULL,
        total_mensagens INT DEFAULT 0,
        status VARCHAR(20) DEFAULT 'pendente',
        data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        data_envio TIMESTAMP NULL,
        grupo_nome VARCHAR(255) DEFAULT 'Grupo sem nome'
      )`);
      
      console.log('✅ Tabela resumos criada com sucesso');
      
      // Insert sample data for both user IDs (1 and 9) to work with different logins
      console.log('📝 Inserindo dados de exemplo...');
      
      const sampleData = [
        {
          usuario_id: 1,
          conteudo: '📊 Resumo do Grupo - Grupo Desenvolvimento\n📅 Data: 23/07/2025\n\n📈 Atividade:\n• Total de mensagens analisadas: 30\n• Período: 20/07/2025 - 23/07/2025\n\n💬 Principais Participantes:\n• Carlos Silva\n• Ana Costa\n• Roberto Lima\n\n📝 Resumo das Conversas:\nDiscussões sobre desenvolvimento do projeto e próximas sprints.\n\n🎯 Status: Resumo gerado automaticamente pelo InteliZap',
          total_mensagens: 30,
          status: 'enviado',
          grupo_nome: 'Grupo Desenvolvimento'
        },
        {
          usuario_id: 1,
          conteudo: '📊 Resumo do Grupo - Grupo Marketing\n📅 Data: 22/07/2025\n\n📈 Atividade:\n• Total de mensagens analisadas: 22\n• Período: 21/07/2025 - 22/07/2025\n\n💬 Principais Participantes:\n• Maria Santos\n• Pedro Oliveira\n• Julia Costa\n\n📝 Resumo das Conversas:\nPlanejamento de campanhas e estratégias de marketing digital.\n\n🎯 Status: Resumo gerado automaticamente pelo InteliZap',
          total_mensagens: 22,
          status: 'enviado',
          grupo_nome: 'Grupo Marketing'
        },
        {
          usuario_id: 9,
          conteudo: '📊 Resumo do Grupo - Grupo Teste\n📅 Data: 23/07/2025\n\n📈 Atividade:\n• Total de mensagens analisadas: 25\n• Período: 20/07/2025 - 23/07/2025\n\n💬 Principais Participantes:\n• João Silva\n• Maria Santos\n• Pedro Costa\n\n📝 Resumo das Conversas:\nAs conversas no grupo incluíram 25 mensagens com participação ativa dos membros.\n\n🎯 Status: Resumo gerado automaticamente pelo InteliZap',
          total_mensagens: 25,
          status: 'enviado',
          grupo_nome: 'Grupo Teste'
        }
      ];
      
      for (const data of sampleData) {
        await query(
          `INSERT INTO resumos (usuario_id, conteudo, total_mensagens, status, grupo_nome) VALUES (?, ?, ?, ?, ?)`,
          [data.usuario_id, data.conteudo, data.total_mensagens, data.status, data.grupo_nome]
        );
      }
      
      console.log('✅ Dados de exemplo inseridos com sucesso');
    }

    // Get resumos for the user
    const offset = (parseInt(page) - 1) * parseInt(limit);
    
    const resumos = await query(
      `SELECT * FROM resumos WHERE usuario_id = ? ORDER BY data_criacao DESC LIMIT ? OFFSET ?`,
      [parseInt(usuario_id), parseInt(limit), offset]
    );

    const totalResult = await query(
      `SELECT COUNT(*) as total FROM resumos WHERE usuario_id = ?`,
      [parseInt(usuario_id)]
    );

    const total = totalResult[0].total;
    const totalPages = Math.ceil(total / parseInt(limit));

    res.json({
      success: true,
      data: resumos,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total: total,
        totalPages: totalPages
      }
    });

  } catch (error) {
    console.error('❌ Erro ao buscar resumos:', error);
    console.error('Stack trace:', error.stack);
    console.error('Query params recebidos:', req.query);
    res.status(500).json({
      success: false,
      message: 'Erro interno do servidor',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

export const createResumo = async (req, res) => {
  try {
    const { grupo_id = null, usuario_id, conteudo, total_mensagens, status = 'pendente', grupo_nome = 'Grupo sem nome' } = req.body;
    
    if (!usuario_id || !conteudo) {
      return res.status(400).json({
        success: false,
        message: 'usuario_id e conteudo são obrigatórios'
      });
    }

    // Insert new resumo
    const result = await query(
      `INSERT INTO resumos (grupo_id, usuario_id, conteudo, total_mensagens, status, data_criacao) 
       VALUES (?, ?, ?, ?, ?, NOW())`,
      [grupo_id, usuario_id, conteudo, total_mensagens || 0, status]
    );

    // Get the created resumo
    const resumo = await query(
      'SELECT * FROM resumos WHERE id = ?',
      [result.insertId]
    );

    res.status(201).json({
      success: true,
      data: resumo[0],
      message: 'Resumo criado com sucesso'
    });

  } catch (error) {
    console.error('Erro ao criar resumo:', error);
    res.status(500).json({
      success: false,
      message: 'Erro interno do servidor'
    });
  }
};

export const gerarResumo = async (req, res) => {
  try {
    const { grupo_id } = req.body;
    const usuario_id = req.user?.id; // From auth middleware
    
    if (!grupo_id) {
      return res.status(400).json({
        success: false,
        message: 'grupo_id é obrigatório'
      });
    }

    // Verify group belongs to user
    const grupo = await query(
      'SELECT * FROM grupos WHERE id = ? AND usuario_id = ?',
      [grupo_id, usuario_id]
    );

    if (grupo.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'Grupo não encontrado'
      });
    }

    // Get messages from the group for resume generation
    const mensagens = await query(
      `SELECT * FROM mensagens 
       WHERE grupo_id = ? 
       ORDER BY data_mensagem DESC 
       LIMIT 100`,
      [grupo_id]
    );

    if (mensagens.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'Nenhuma mensagem encontrada para gerar resumo'
      });
    }

    // Generate simple resume content (you can enhance this with AI later)
    const resumoConteudo = `📊 **Resumo do Grupo - ${grupo[0].nome_grupo}**
📅 Data: ${new Date().toLocaleDateString('pt-BR')}

📈 **Atividade:**
• Total de mensagens analisadas: ${mensagens.length}
• Período: ${new Date(mensagens[mensagens.length - 1].data_mensagem).toLocaleDateString('pt-BR')} - ${new Date(mensagens[0].data_mensagem).toLocaleDateString('pt-BR')}

💬 **Principais Participantes:**
${[...new Set(mensagens.map(m => m['nome-autor']))]
  .slice(0, 5)
  .map(autor => `• ${autor}`)
  .join('\n')}

📝 **Resumo das Conversas:**
As conversas no grupo incluíram ${mensagens.length} mensagens com participação ativa dos membros.

🎯 **Status:** Resumo gerado automaticamente pelo InteliZap`;

    // Insert resumo
    const result = await query(
      `INSERT INTO resumos (grupo_id, usuario_id, conteudo, total_mensagens, status, data_criacao, data_envio) 
       VALUES (?, ?, ?, ?, 'enviado', NOW(), NOW())`,
      [grupo_id, usuario_id, resumoConteudo, mensagens.length]
    );

    // Get the created resumo
    const resumo = await query(
      'SELECT * FROM resumos WHERE id = ?',
      [result.insertId]
    );

    res.status(201).json({
      success: true,
      data: resumo[0],
      message: 'Resumo gerado com sucesso'
    });

  } catch (error) {
    console.error('Erro ao gerar resumo:', error);
    res.status(500).json({
      success: false,
      message: 'Erro interno do servidor'
    });
  }
};