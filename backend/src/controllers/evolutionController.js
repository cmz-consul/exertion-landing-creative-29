import { query } from '../config/database.js';

// Evolution API configuration
const EVOLUTION_API_URL = process.env.EVOLUTION_API_URL || 'http://localhost:8080';
const EVOLUTION_API_KEY = process.env.EVOLUTION_API_KEY || 'your-evolution-api-key';

export const connectInstance = async (req, res) => {
  try {
    const { instanceName, userId } = req.body;

    if (!instanceName || !userId) {
      return res.status(400).json({
        success: false,
        message: 'instanceName e userId são obrigatórios'
      });
    }

    console.log('🔗 Connecting to Evolution API:', { instanceName });

    // First check if instance already exists
    const statusResponse = await fetch(`${EVOLUTION_API_URL}/instance/fetchInstances`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'apikey': EVOLUTION_API_KEY
      }
    });

    let existingInstance = null;
    if (statusResponse.ok) {
      const instances = await statusResponse.json();
      existingInstance = instances.find(instance => 
        instance.name === instanceName
      );
    }

    // Check if instance is already connected
    if (existingInstance && existingInstance.connectionStatus === 'open') {
      console.log('✅ Instance already connected:', instanceName);
      return res.json({
        success: true,
        message: 'WhatsApp já conectado',
        connected: true,
        instance: existingInstance
      });
    }

    // Create instance if it doesn't exist
    if (!existingInstance) {
      console.log('📱 Creating new instance:', instanceName);
      
      const createResponse = await fetch(`${EVOLUTION_API_URL}/instance/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': EVOLUTION_API_KEY
        },
        body: JSON.stringify({
          instanceName: instanceName,
          token: EVOLUTION_API_KEY,
          qrcode: true,
          webhook: `${process.env.VITE_API_URL}/api/webhooks/evolution`,
          webhookByEvents: false,
          webhookBase64: false,
          events: ['MESSAGES_UPSERT', 'MESSAGES_UPDATE', 'MESSAGES_DELETE', 'SEND_MESSAGE']
        })
      });

      if (!createResponse.ok) {
        const errorData = await createResponse.text();
        console.error('❌ Failed to create instance:', errorData);
        throw new Error('Falha ao criar instância');
      }

      const createData = await createResponse.json();
      console.log('✅ Instance created:', createData);
    }

    // Connect to WhatsApp
    const connectResponse = await fetch(`${EVOLUTION_API_URL}/instance/connect/${instanceName}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'apikey': EVOLUTION_API_KEY
      }
    });

    if (!connectResponse.ok) {
      throw new Error('Falha ao conectar com WhatsApp');
    }

    const connectData = await connectResponse.json();
    console.log('🔗 Connect response:', connectData);

    // Check if already connected
    if (connectData.connectionStatus === 'open') {
      return res.json({
        success: true,
        message: 'WhatsApp já conectado',
        connected: true,
        instance: connectData
      });
    }

    // If QR code is available
    if (connectData.base64 || connectData.qrcode) {
      return res.json({
        success: true,
        message: 'QR Code gerado com sucesso',
        qrCode: connectData.base64 || connectData.qrcode,
        instance: connectData.instance
      });
    }

    res.json({
      success: true,
      message: 'Conexão iniciada',
      data: connectData
    });

  } catch (error) {
    console.error('❌ Evolution connect error:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Erro interno do servidor'
    });
  }
};

export const getInstanceStatus = async (req, res) => {
  try {
    const { instanceName } = req.params;

    console.log('🔍 Checking instance status:', instanceName);

    // First try to get all instances and filter by name
    const response = await fetch(`${EVOLUTION_API_URL}/instance/fetchInstances`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'apikey': EVOLUTION_API_KEY
      }
    });

    if (!response.ok) {
      console.error('❌ Failed to fetch instances:', response.status, response.statusText);
      throw new Error('Falha ao verificar status da instância');
    }

    const allInstances = await response.json();
    console.log('📱 All instances:', allInstances);

    // Find the specific instance by name
    const instance = allInstances.find(inst => 
      inst.name === instanceName
    );

    if (instance) {
      const connected = instance.connectionStatus === 'open';
      console.log(`✅ Instance ${instanceName} found, connected: ${connected}, status: ${instance.connectionStatus}`);
      
      return res.json({
        success: true,
        connected,
        state: instance.connectionStatus || 'disconnected',
        instance: instance
      });
    }

    console.log(`❌ Instance ${instanceName} not found`);
    res.json({
      success: true,
      connected: false,
      state: 'not_found',
      instance: null
    });

  } catch (error) {
    console.error('❌ Get instance status error:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Erro interno do servidor'
    });
  }
};

export const disconnectInstance = async (req, res) => {
  try {
    const { instanceName } = req.params;

    console.log('❌ Disconnecting instance:', instanceName);

    const response = await fetch(`${EVOLUTION_API_URL}/instance/logout/${instanceName}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'apikey': EVOLUTION_API_KEY
      }
    });

    if (!response.ok) {
      throw new Error('Falha ao desconectar instância');
    }

    const data = await response.json();
    console.log('🔌 Disconnect response:', data);

    res.json({
      success: true,
      message: 'Instância desconectada com sucesso',
      data
    });

  } catch (error) {
    console.error('❌ Disconnect instance error:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Erro interno do servidor'
    });
  }
};

export const getInstanceGroups = async (req, res) => {
  try {
    const { instanceName } = req.params;
    const { userId } = req.query;

    if (!userId) {
      return res.status(400).json({
        success: false,
        message: 'userId é obrigatório'
      });
    }

    console.log('👥 Getting groups from Evolution API:', instanceName);

    const response = await fetch(`${EVOLUTION_API_URL}/group/fetchAllGroups/${instanceName}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'apikey': EVOLUTION_API_KEY
      }
    });

    if (!response.ok) {
      throw new Error('Falha ao buscar grupos');
    }

    const groups = await response.json();
    console.log(`📱 Found ${groups.length} groups`);

    // Format groups for our database
    const formattedGroups = groups.map(group => ({
      nome_grupo: group.subject || 'Sem nome',
      grupo_id_externo: group.id,
      usuario_id: parseInt(userId),
      ativo: true,
      participantes: group.participants?.length || 0,
      descricao: group.desc || null
    }));

    res.json({
      success: true,
      message: `${groups.length} grupos encontrados`,
      data: formattedGroups
    });

  } catch (error) {
    console.error('❌ Get groups error:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Erro interno do servidor'
    });
  }
};