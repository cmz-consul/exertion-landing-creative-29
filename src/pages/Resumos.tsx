import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  FileText, 
  Search, 
  Filter,
  Calendar,
  Clock,
  Users,
  Eye,
  Download,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

interface Resumo {
  id: number;
  grupo_nome: string;
  grupo_id: number;
  conteudo: string;
  data_criacao: string;
  status: 'enviado' | 'erro' | 'pendente';
  total_mensagens: number;
}

const Resumos = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGroup, setSelectedGroup] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Mock data - replace with actual API calls
  const [resumos] = useState<Resumo[]>([
    {
      id: 1,
      grupo_nome: 'Equipe Marketing',
      grupo_id: 1,
      conteudo: `📊 **Resumo do Grupo - Equipe Marketing**
📅 Data: 15/01/2024

🔥 **Principais Discussões:**
• Campanha Q1 2024 - Definidas estratégias para redes sociais
• Budget aprovado para Google Ads
• Novo designer contratado - João Silva
• Review de performance das campanhas de dezembro

💡 **Decisões Tomadas:**
• Aumentar investimento em TikTok em 30%
• Criar landing pages específicas para cada produto
• Implementar A/B testing em todas as campanhas

📈 **Métricas Discutidas:**
• CTR médio: 3.2% (↗ 0.5%)
• Conversões: 847 (↗ 12%)
• CAC: R$ 45,30 (↘ R$ 3,20)

🎯 **Próximos Passos:**
• Reunião com o time de produto na terça
• Apresentação dos resultados para diretoria
• Início da campanha de carnaval`,
      data_criacao: '2024-01-15 09:00:00',
      status: 'enviado',
      total_mensagens: 47
    },
    {
      id: 2,
      grupo_nome: 'Desenvolvimento',
      grupo_id: 2,
      conteudo: `💻 **Resumo do Grupo - Desenvolvimento**
📅 Data: 15/01/2024

🚀 **Features Desenvolvidas:**
• API de notificações push implementada
• Dashboard de analytics finalizado
• Correção de bugs críticos no módulo de pagamento
• Testes automatizados para módulo de usuários

🔧 **Issues Resolvidas:**
• Bug #1247: Erro no login social
• Bug #1248: Lentidão na listagem de produtos
• Bug #1249: Falha no envio de emails

📋 **Code Review:**
• PR #456: Otimização de queries (aprovado)
• PR #457: Refatoração do módulo auth (em review)
• PR #458: Nova feature de relatórios (aprovado)

🎯 **Planejamento:**
• Deploy da versão 2.1.0 amanhã
• Início do desenvolvimento da v2.2.0
• Reunião de planning na quinta-feira`,
      data_criacao: '2024-01-15 09:00:00',
      status: 'enviado',
      total_mensagens: 73
    },
    {
      id: 3,
      grupo_nome: 'Vendas',
      grupo_id: 3,
      conteudo: `💰 **Resumo do Grupo - Vendas**
📅 Data: 14/01/2024

📊 **Resultados do Dia:**
• 12 demos agendadas
• 8 propostas enviadas
• 3 contratos fechados
• R$ 45.000 em vendas

🎯 **Pipeline:**
• 67 leads qualificados
• 23 oportunidades em negociação
• R$ 230.000 em pipeline total
• Taxa de conversão: 18%

🏆 **Destaques:**
• Maria bateu meta mensal (120%)
• Pedro fechou maior contrato do trimestre
• Novo método de follow-up aprovado
• Workshop de objeções na sexta

⚠️ **Atenção:**
• Cliente ABC pendente de resposta
• Proposta XYZ vence amanhã
• Reunião urgente com prospect DEF`,
      data_criacao: '2024-01-14 18:00:00',
      status: 'erro',
      total_mensagens: 28
    },
    {
      id: 4,
      grupo_nome: 'Suporte',
      grupo_id: 4,
      conteudo: `🎧 **Resumo do Grupo - Suporte**
📅 Data: 15/01/2024

📞 **Atendimentos:**
• 43 tickets resolvidos
• 12 tickets em andamento
• 3 tickets escalados
• Tempo médio de resposta: 2h15min

🔥 **Principais Issues:**
• Problema na integração do WhatsApp (resolvido)
• Lentidão no carregamento (investigando)
• Erro de sincronização (escalado para dev)

👥 **Feedback dos Clientes:**
• NPS do dia: 8.7/10
• 5 elogios recebidos
• 2 sugestões de melhoria
• 1 reclamação (já resolvida)

📈 **Melhorias:**
• Novo chatbot implementado
• Base de conhecimento atualizada
• Treinamento da equipe concluído`,
      data_criacao: '2024-01-15 18:30:00',
      status: 'enviado',
      total_mensagens: 35
    },
    {
      id: 5,
      grupo_nome: 'Equipe Marketing',
      grupo_id: 1,
      conteudo: `📊 **Resumo do Grupo - Equipe Marketing**
📅 Data: 14/01/2024

🔍 **Análises Realizadas:**
• Relatório de performance das campanhas
• Análise de concorrência
• Pesquisa de palavras-chave
• Estudo de personas

📱 **Redes Sociais:**
• Instagram: 15k impressões (+12%)
• LinkedIn: 8.5k visualizações (+8%)
• TikTok: 22k visualizações (+25%)
• Facebook: 12k alcance (+5%)

💡 **Insights:**
• Vídeos performam 40% melhor
• Posts manhã têm maior engajamento
• Stories geram mais traffic para site
• Carrossel aumenta tempo de permanência

🎨 **Criativos:**
• 8 novos designs aprovados
• Campanha de branding finalizada
• Materiais para feira prontos`,
      data_criacao: '2024-01-14 09:00:00',
      status: 'enviado',
      total_mensagens: 52
    },
    {
      id: 6,
      grupo_nome: 'Desenvolvimento',
      grupo_id: 2,
      conteudo: `💻 **Resumo do Grupo - Desenvolvimento**
📅 Data: 13/01/2024

⚡ **Urgente - Problemas Críticos:**
• Servidor principal com instabilidade
• API de pagamentos retornando erro 500
• Database com alta latência
• Usuários reportando lentidão

🔧 **Ações Tomadas:**
• Restart dos serviços principais
• Escalamento automático ativado
• Monitoramento intensificado
• Time de plantão acionado

📊 **Status Atual:**
• 99.2% de disponibilidade (meta: 99.9%)
• Tempo de resposta: 450ms (meta: 200ms)
• Erro rate: 0.8% (meta: 0.1%)

🚨 **Próximas Ações:**
• Migração para nova infraestrutura
• Otimização de queries críticas
• Implementação de circuit breakers`,
      data_criacao: '2024-01-13 15:45:00',
      status: 'pendente',
      total_mensagens: 89
    }
  ]);

  // Get unique groups for filter
  const groups = [...new Set(resumos.map(r => r.grupo_nome))];

  // Filter resumos
  const filteredResumos = resumos.filter(resumo => {
    const matchesSearch = resumo.grupo_nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resumo.conteudo.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGroup = selectedGroup === 'all' || resumo.grupo_nome === selectedGroup;
    const matchesStatus = selectedStatus === 'all' || resumo.status === selectedStatus;
    
    return matchesSearch && matchesGroup && matchesStatus;
  });

  // Pagination
  const totalPages = Math.ceil(filteredResumos.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedResumos = filteredResumos.slice(startIndex, startIndex + itemsPerPage);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'enviado':
        return <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Enviado</Badge>;
      case 'erro':
        return <Badge variant="destructive">Erro</Badge>;
      case 'pendente':
        return <Badge variant="secondary">Pendente</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('pt-BR');
  };

  const getTimeSince = (dateString: string) => {
    const now = new Date();
    const date = new Date(dateString);
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Agora mesmo';
    if (diffInHours < 24) return `${diffInHours}h atrás`;
    return `${Math.floor(diffInHours / 24)}d atrás`;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold cyber-text">Histórico de Resumos</h1>
        <p className="text-muted-foreground">
          Visualize todos os resumos enviados para seus grupos
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Buscar resumos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 cyber-border"
          />
        </div>
        
        <Select value={selectedGroup} onValueChange={setSelectedGroup}>
          <SelectTrigger className="w-full sm:w-48 cyber-border">
            <SelectValue placeholder="Filtrar por grupo" />
          </SelectTrigger>
          <SelectContent className="cyber-card">
            <SelectItem value="all">Todos os grupos</SelectItem>
            {groups.map(group => (
              <SelectItem key={group} value={group}>{group}</SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={selectedStatus} onValueChange={setSelectedStatus}>
          <SelectTrigger className="w-full sm:w-40 cyber-border">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent className="cyber-card">
            <SelectItem value="all">Todos</SelectItem>
            <SelectItem value="enviado">Enviado</SelectItem>
            <SelectItem value="erro">Erro</SelectItem>
            <SelectItem value="pendente">Pendente</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Results count */}
      <div className="text-sm text-muted-foreground">
        {filteredResumos.length} resumo{filteredResumos.length !== 1 ? 's' : ''} encontrado{filteredResumos.length !== 1 ? 's' : ''}
      </div>

      {/* Resumos Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {paginatedResumos.map((resumo) => (
          <Card key={resumo.id} className="cyber-card cyber-scan">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    {resumo.grupo_nome}
                  </CardTitle>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {getTimeSince(resumo.data_criacao)}
                    </span>
                    <span className="flex items-center gap-1">
                      <FileText className="h-4 w-4" />
                      {resumo.total_mensagens} msgs
                    </span>
                  </div>
                </div>
                {getStatusBadge(resumo.status)}
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="bg-muted/30 rounded-lg p-3 max-h-32 overflow-hidden relative">
                <p className="text-sm leading-relaxed">
                  {resumo.conteudo.substring(0, 200)}...
                </p>
                <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-muted/30 to-transparent" />
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-xs text-muted-foreground">
                  {formatDate(resumo.data_criacao)}
                </span>
                
                <div className="flex gap-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4 mr-1" />
                        Ver
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl max-h-[80vh] cyber-card">
                      <DialogHeader>
                        <DialogTitle className="flex items-center gap-2">
                          <Users className="h-5 w-5 text-primary" />
                          {resumo.grupo_nome}
                        </DialogTitle>
                      </DialogHeader>
                      <div className="mt-4">
                        <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {formatDate(resumo.data_criacao)}
                          </span>
                          <span className="flex items-center gap-1">
                            <FileText className="h-4 w-4" />
                            {resumo.total_mensagens} mensagens
                          </span>
                          {getStatusBadge(resumo.status)}
                        </div>
                        <div className="bg-muted/30 rounded-lg p-4 max-h-96 overflow-y-auto">
                          <pre className="text-sm leading-relaxed whitespace-pre-wrap font-sans">
                            {resumo.conteudo}
                          </pre>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                  
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          <span className="text-sm text-muted-foreground">
            Página {currentPage} de {totalPages}
          </span>
          
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      )}

      {/* Empty State */}
      {filteredResumos.length === 0 && (
        <Card className="cyber-card">
          <CardContent className="flex flex-col items-center justify-center py-12">
            <FileText className="h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">Nenhum resumo encontrado</h3>
            <p className="text-muted-foreground text-center">
              {searchTerm || selectedGroup !== 'all' || selectedStatus !== 'all'
                ? 'Tente ajustar os filtros de busca.'
                : 'Os resumos enviados aparecerão aqui.'
              }
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Resumos;