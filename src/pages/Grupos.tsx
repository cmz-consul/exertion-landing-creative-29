import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { 
  Users, 
  Search, 
  MessageCircle, 
  Calendar,
  MoreVertical,
  Trash2,
  RefreshCw,
  Plus
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface Group {
  id: number;
  nome_grupo: string;
  grupo_id_externo: string;
  ativo: boolean;
  ultima_mensagem: string;
  total_mensagens: number;
  criado_em: string;
}

const Grupos = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');
  const [syncing, setSyncing] = useState(false);

  // Mock data - replace with actual API calls
  const [grupos, setGrupos] = useState<Group[]>([
    {
      id: 1,
      nome_grupo: 'Equipe Marketing',
      grupo_id_externo: '120363028264952334@g.us',
      ativo: true,
      ultima_mensagem: '2024-01-15 14:30:00',
      total_mensagens: 847,
      criado_em: '2024-01-01 10:00:00'
    },
    {
      id: 2,
      nome_grupo: 'Desenvolvimento',
      grupo_id_externo: '120363028264952335@g.us',
      ativo: true,
      ultima_mensagem: '2024-01-15 15:45:00',
      total_mensagens: 1203,
      criado_em: '2024-01-01 10:00:00'
    },
    {
      id: 3,
      nome_grupo: 'Vendas',
      grupo_id_externo: '120363028264952336@g.us',
      ativo: false,
      ultima_mensagem: '2024-01-14 09:15:00',
      total_mensagens: 634,
      criado_em: '2024-01-01 10:00:00'
    },
    {
      id: 4,
      nome_grupo: 'Suporte',
      grupo_id_externo: '120363028264952337@g.us',
      ativo: true,
      ultima_mensagem: '2024-01-15 16:20:00',
      total_mensagens: 392,
      criado_em: '2024-01-01 10:00:00'
    }
  ]);

  const filteredGroups = grupos.filter(grupo =>
    grupo.nome_grupo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleToggleActive = async (id: number, currentStatus: boolean) => {
    try {
      // Simulate API call
      setGrupos(grupos.map(grupo =>
        grupo.id === id ? { ...grupo, ativo: !currentStatus } : grupo
      ));
      
      toast({
        title: "Status atualizado",
        description: `Grupo ${!currentStatus ? 'ativado' : 'desativado'} com sucesso.`
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Erro",
        description: "Não foi possível atualizar o status do grupo."
      });
    }
  };

  const handleRemoveGroup = async (id: number) => {
    try {
      // Simulate API call
      setGrupos(grupos.filter(grupo => grupo.id !== id));
      
      toast({
        title: "Grupo removido",
        description: "O grupo foi removido da lista com sucesso."
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Erro",
        description: "Não foi possível remover o grupo."
      });
    }
  };

  const handleSyncGroups = async () => {
    setSyncing(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Sincronização concluída",
        description: "Os grupos foram sincronizados com o WhatsApp."
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Erro na sincronização",
        description: "Não foi possível sincronizar os grupos."
      });
    } finally {
      setSyncing(false);
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
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold cyber-text">Grupos WhatsApp</h1>
          <p className="text-muted-foreground">
            Gerencie os grupos conectados à sua instância
          </p>
        </div>
        
        <Button 
          onClick={handleSyncGroups}
          disabled={syncing}
          className="cyber-button"
        >
          {syncing ? (
            <>
              <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
              Sincronizando...
            </>
          ) : (
            <>
              <RefreshCw className="mr-2 h-4 w-4" />
              Sincronizar
            </>
          )}
        </Button>
      </div>

      {/* Search and Stats */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Buscar grupos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 cyber-border"
          />
        </div>
        
        <div className="flex gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full" />
            <span>{grupos.filter(g => g.ativo).length} Ativos</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-red-500 rounded-full" />
            <span>{grupos.filter(g => !g.ativo).length} Inativos</span>
          </div>
        </div>
      </div>

      {/* Groups Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredGroups.map((grupo) => (
          <Card key={grupo.id} className="cyber-card cyber-scan">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-primary" />
                <CardTitle className="text-lg truncate">{grupo.nome_grupo}</CardTitle>
              </div>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="cyber-card">
                  <DropdownMenuItem 
                    onClick={() => handleRemoveGroup(grupo.id)}
                    className="text-destructive focus:text-destructive"
                  >
                    <Trash2 className="mr-2 h-4 w-4" />
                    Remover
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </CardHeader>
            
            <CardContent className="space-y-4">
              {/* Status Toggle */}
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Resumos ativos</span>
                <Switch
                  checked={grupo.ativo}
                  onCheckedChange={() => handleToggleActive(grupo.id, grupo.ativo)}
                />
              </div>

              {/* Stats */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-2 text-muted-foreground">
                    <MessageCircle className="h-4 w-4" />
                    Mensagens
                  </span>
                  <span className="font-medium">{grupo.total_mensagens}</span>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    Última atividade
                  </span>
                  <span className="font-medium">{getTimeSince(grupo.ultima_mensagem)}</span>
                </div>
              </div>

              {/* Status Badge */}
              <div className="flex justify-between items-center">
                <Badge 
                  variant={grupo.ativo ? "default" : "secondary"}
                  className={grupo.ativo ? "bg-green-500/20 text-green-400 border-green-500/30" : ""}
                >
                  {grupo.ativo ? 'Ativo' : 'Inativo'}
                </Badge>
                
                <span className="text-xs text-muted-foreground">
                  ID: {grupo.grupo_id_externo.slice(0, 8)}...
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Empty State */}
      {filteredGroups.length === 0 && (
        <Card className="cyber-card">
          <CardContent className="flex flex-col items-center justify-center py-12">
            <Users className="h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">Nenhum grupo encontrado</h3>
            <p className="text-muted-foreground text-center mb-4">
              {searchTerm 
                ? 'Nenhum grupo corresponde à sua busca.'
                : 'Sincronize com o WhatsApp para ver seus grupos aqui.'
              }
            </p>
            {!searchTerm && (
              <Button onClick={handleSyncGroups} className="cyber-button">
                <RefreshCw className="mr-2 h-4 w-4" />
                Sincronizar Grupos
              </Button>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Grupos;