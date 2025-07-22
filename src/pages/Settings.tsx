import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  User, 
  Settings as SettingsIcon, 
  Shield, 
  Clock,
  Bot,
  Key,
  Volume2,
  Smartphone,
  Save,
  Eye,
  EyeOff
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';

const Settings = () => {
  const { user, updateUser } = useAuth();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [showApiKey, setShowApiKey] = useState(false);
  
  const [formData, setFormData] = useState({
    nome: user?.nome || '',
    email: user?.email || '',
    instancia: user?.instancia || '',
    horaResumo: user?.horaResumo || '09:00',
    resumoDiaAnterior: user?.resumoDiaAnterior || false,
    transcricao_ativa: user?.transcricao_ativa || true,
    'transcricao-pvd': user?.['transcricao-pvd'] || true,
    transcreverEu: user?.transcreverEu || false,
    ludico: user?.ludico || false,
    agendamento: user?.agendamento || true,
    ambiente: user?.ambiente || 'prod',
    'key-openai': user?.['key-openai'] || ''
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handlePasswordChange = (field: string, value: string) => {
    setPasswordData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSaveProfile = async () => {
    setLoading(true);
    try {
      await updateUser(formData);
      toast({
        title: "Perfil atualizado",
        description: "Suas configurações foram salvas com sucesso."
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Erro",
        description: "Não foi possível salvar as configurações."
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChangePassword = async () => {
    if (!passwordData.currentPassword || !passwordData.newPassword || !passwordData.confirmPassword) {
      toast({
        variant: "destructive",
        title: "Erro",
        description: "Preencha todos os campos de senha."
      });
      return;
    }

    if (passwordData.newPassword !== passwordData.confirmPassword) {
      toast({
        variant: "destructive",
        title: "Erro",
        description: "A nova senha e confirmação não coincidem."
      });
      return;
    }

    if (passwordData.newPassword.length < 6) {
      toast({
        variant: "destructive",
        title: "Erro",
        description: "A nova senha deve ter pelo menos 6 caracteres."
      });
      return;
    }

    setLoading(true);
    try {
      // Simulate API call for password change
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setPasswordData({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
      });
      
      toast({
        title: "Senha alterada",
        description: "Sua senha foi alterada com sucesso."
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Erro",
        description: "Não foi possível alterar a senha."
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold cyber-text">Configurações</h1>
        <p className="text-muted-foreground">
          Gerencie suas preferências e configurações da conta
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Settings */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="cyber-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5 text-primary" />
                Informações Pessoais
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="nome">Nome</Label>
                  <Input
                    id="nome"
                    value={formData.nome}
                    onChange={(e) => handleInputChange('nome', e.target.value)}
                    className="cyber-border"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="cyber-border"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="instancia">Nome da Instância WhatsApp</Label>
                <Input
                  id="instancia"
                  value={formData.instancia}
                  onChange={(e) => handleInputChange('instancia', e.target.value)}
                  className="cyber-border"
                />
              </div>
            </CardContent>
          </Card>

          {/* Resume Settings */}
          <Card className="cyber-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-secondary" />
                Configurações de Resumo
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="horaResumo">Horário do Resumo</Label>
                  <Input
                    id="horaResumo"
                    type="time"
                    value={formData.horaResumo}
                    onChange={(e) => handleInputChange('horaResumo', e.target.value)}
                    className="cyber-border"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="ambiente">Ambiente</Label>
                  <Select value={formData.ambiente} onValueChange={(value) => handleInputChange('ambiente', value)}>
                    <SelectTrigger className="cyber-border">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="cyber-card">
                      <SelectItem value="prod">Produção</SelectItem>
                      <SelectItem value="dev">Desenvolvimento</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Agendamento Automático</Label>
                    <p className="text-sm text-muted-foreground">
                      Ativar envio automático de resumos
                    </p>
                  </div>
                  <Switch
                    checked={formData.agendamento}
                    onCheckedChange={(checked) => handleInputChange('agendamento', checked)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Resumo do Dia Anterior</Label>
                    <p className="text-sm text-muted-foreground">
                      Incluir mensagens do dia anterior no resumo
                    </p>
                  </div>
                  <Switch
                    checked={formData.resumoDiaAnterior}
                    onCheckedChange={(checked) => handleInputChange('resumoDiaAnterior', checked)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Modo Lúdico</Label>
                    <p className="text-sm text-muted-foreground">
                      Adicionar humor e sarcasmo aos resumos
                    </p>
                  </div>
                  <Switch
                    checked={formData.ludico}
                    onCheckedChange={(checked) => handleInputChange('ludico', checked)}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Transcription Settings */}
          <Card className="cyber-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Volume2 className="h-5 w-5 text-accent" />
                Configurações de Transcrição
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Transcrição Ativa</Label>
                  <p className="text-sm text-muted-foreground">
                    Ativar transcrição de áudios nos grupos
                  </p>
                </div>
                <Switch
                  checked={formData.transcricao_ativa}
                  onCheckedChange={(checked) => handleInputChange('transcricao_ativa', checked)}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Transcrição em Conversas Privadas</Label>
                  <p className="text-sm text-muted-foreground">
                    Incluir áudios de mensagens privadas
                  </p>
                </div>
                <Switch
                  checked={formData['transcricao-pvd']}
                  onCheckedChange={(checked) => handleInputChange('transcricao-pvd', checked)}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Transcrever Próprios Áudios</Label>
                  <p className="text-sm text-muted-foreground">
                    Incluir transcrição dos seus próprios áudios
                  </p>
                </div>
                <Switch
                  checked={formData.transcreverEu}
                  onCheckedChange={(checked) => handleInputChange('transcreverEu', checked)}
                />
              </div>
            </CardContent>
          </Card>

          {/* API Configuration */}
          <Card className="cyber-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Key className="h-5 w-5 text-primary" />
                Configuração de API
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="openai-key">Chave API OpenAI</Label>
                <div className="relative">
                  <Input
                    id="openai-key"
                    type={showApiKey ? "text" : "password"}
                    value={formData['key-openai']}
                    onChange={(e) => handleInputChange('key-openai', e.target.value)}
                    placeholder="sk-..."
                    className="cyber-border pr-10"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 top-0 h-full"
                    onClick={() => setShowApiKey(!showApiKey)}
                  >
                    {showApiKey ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">
                  Sua chave API será armazenada de forma segura e usada apenas para gerar resumos
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Change Password */}
          <Card className="cyber-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-destructive" />
                Alterar Senha
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="current-password">Senha Atual</Label>
                <Input
                  id="current-password"
                  type="password"
                  value={passwordData.currentPassword}
                  onChange={(e) => handlePasswordChange('currentPassword', e.target.value)}
                  className="cyber-border"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="new-password">Nova Senha</Label>
                <Input
                  id="new-password"
                  type="password"
                  value={passwordData.newPassword}
                  onChange={(e) => handlePasswordChange('newPassword', e.target.value)}
                  className="cyber-border"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirmar Nova Senha</Label>
                <Input
                  id="confirm-password"
                  type="password"
                  value={passwordData.confirmPassword}
                  onChange={(e) => handlePasswordChange('confirmPassword', e.target.value)}
                  className="cyber-border"
                />
              </div>
              
              <Button 
                onClick={handleChangePassword}
                disabled={loading}
                variant="destructive"
                className="w-full"
              >
                Alterar Senha
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Account Status Sidebar */}
        <div className="space-y-6">
          {/* Account Status */}
          <Card className="cyber-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bot className="h-5 w-5 text-accent" />
                Status da Conta
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Plano</span>
                <Badge 
                  className={user?.plano_ativo 
                    ? "bg-green-500/20 text-green-400 border-green-500/30" 
                    : "bg-red-500/20 text-red-400 border-red-500/30"
                  }
                >
                  {user?.plano_ativo ? 'Ativo' : 'Inativo'}
                </Badge>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Ambiente</span>
                <Badge variant="outline">
                  {formData.ambiente === 'prod' ? 'Produção' : 'Desenvolvimento'}
                </Badge>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Criado em</span>
                <span className="text-sm text-muted-foreground">
                  {user?.criado_em ? new Date(user.criado_em).toLocaleDateString('pt-BR') : '-'}
                </span>
              </div>
            </CardContent>
          </Card>

          {/* Instance Status */}
          <Card className="cyber-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Smartphone className="h-5 w-5 text-secondary" />
                Status da Instância
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Nome</span>
                <span className="text-sm text-muted-foreground">{formData.instancia}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Conexão</span>
                <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                  Conectado
                </Badge>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Próximo Resumo</span>
                <span className="text-sm text-muted-foreground">{formData.horaResumo}</span>
              </div>
            </CardContent>
          </Card>

          {/* Save Button */}
          <Button 
            onClick={handleSaveProfile}
            disabled={loading}
            className="w-full cyber-button"
            size="lg"
          >
            <Save className="mr-2 h-4 w-4" />
            {loading ? 'Salvando...' : 'Salvar Configurações'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Settings;