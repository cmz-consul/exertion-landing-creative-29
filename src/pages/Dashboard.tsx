import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  FileText, 
  Clock, 
  Activity,
  Bot,
  Zap,
  TrendingUp,
  Calendar
} from 'lucide-react';

const Dashboard = () => {
  const { user } = useAuth();

  // Mock data - replace with actual API calls
  const stats = {
    totalGroups: 12,
    activeGroups: 8,
    totalResumes: 156,
    messagesProcessed: 2847
  };

  const recentActivity = [
    { group: 'Equipe Marketing', time: '09:00', status: 'sent' },
    { group: 'Desenvolvimento', time: '09:00', status: 'sent' },
    { group: 'Vendas', time: '09:00', status: 'sent' },
    { group: 'Suporte', time: '09:00', status: 'error' },
  ];

  const upcomingResumes = [
    { group: 'Equipe Marketing', time: '18:00' },
    { group: 'Desenvolvimento', time: '18:00' },
    { group: 'Vendas', time: '18:30' },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold cyber-text">
          Dashboard
        </h1>
        <p className="text-muted-foreground">
          Bem-vindo de volta, {user?.nome}! Aqui está um resumo da sua conta.
        </p>
      </div>

      {/* Status Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="cyber-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total de Grupos</CardTitle>
            <Users className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalGroups}</div>
            <p className="text-xs text-muted-foreground">
              +2 novos este mês
            </p>
          </CardContent>
        </Card>

        <Card className="cyber-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Grupos Ativos</CardTitle>
            <Activity className="h-4 w-4 text-secondary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.activeGroups}</div>
            <p className="text-xs text-muted-foreground">
              {((stats.activeGroups / stats.totalGroups) * 100).toFixed(0)}% do total
            </p>
          </CardContent>
        </Card>

        <Card className="cyber-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Resumos Enviados</CardTitle>
            <FileText className="h-4 w-4 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalResumes}</div>
            <p className="text-xs text-muted-foreground">
              +12 hoje
            </p>
          </CardContent>
        </Card>

        <Card className="cyber-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Mensagens Processadas</CardTitle>
            <TrendingUp className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.messagesProcessed}</div>
            <p className="text-xs text-muted-foreground">
              +247 hoje
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <Card className="cyber-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              Atividade Recente
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <div>
                      <p className="text-sm font-medium">{activity.group}</p>
                      <p className="text-xs text-muted-foreground">
                        Resumo às {activity.time}
                      </p>
                    </div>
                  </div>
                  <Badge 
                    variant={activity.status === 'sent' ? 'default' : 'destructive'}
                    className="text-xs"
                  >
                    {activity.status === 'sent' ? 'Enviado' : 'Erro'}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Resumes */}
        <Card className="cyber-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-secondary" />
              Próximos Resumos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingResumes.map((resume, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-secondary" />
                    <div>
                      <p className="text-sm font-medium">{resume.group}</p>
                      <p className="text-xs text-muted-foreground">
                        Agendado para {resume.time}
                      </p>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    Agendado
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Account Status */}
      <Card className="cyber-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bot className="h-5 w-5 text-accent" />
            Status da Conta
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <div className={`
                w-3 h-3 rounded-full 
                ${user?.plano_ativo ? 'bg-green-500' : 'bg-red-500'}
              `} />
              <div>
                <p className="text-sm font-medium">Plano</p>
                <p className="text-xs text-muted-foreground">
                  {user?.plano_ativo ? 'Ativo' : 'Inativo'}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Zap className="h-4 w-4 text-primary" />
              <div>
                <p className="text-sm font-medium">Instância</p>
                <p className="text-xs text-muted-foreground">
                  {user?.instancia}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Clock className="h-4 w-4 text-secondary" />
              <div>
                <p className="text-sm font-medium">Próximo Resumo</p>
                <p className="text-xs text-muted-foreground">
                  {user?.horaResumo}
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;