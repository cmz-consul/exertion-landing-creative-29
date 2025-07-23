import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/contexts/AuthContext';
import { 
  Crown, 
  Check, 
  Users, 
  MessageSquare,
  Bot,
  Zap,
  Calendar,
  ExternalLink,
  AlertTriangle
} from 'lucide-react';

const MeuPlano = () => {
  const { user } = useAuth();
  const planoAtivo = user?.plano_ativo === 1;

  const handlePagamento = () => {
    window.open('https://payment.ticto.app/O58A018E0', '_blank');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold cyber-text flex items-center gap-2">
          <Crown className="h-8 w-8 text-primary" />
          Meu Plano
        </h1>
        <p className="text-muted-foreground">
          Gerencie sua assinatura e acesse recursos premium
        </p>
      </div>

      {/* Status do Plano */}
      <Card className="cyber-card">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl">Status da Assinatura</CardTitle>
            <Badge 
              variant={planoAtivo ? "default" : "secondary"}
              className={planoAtivo ? "bg-green-500/20 text-green-400 border-green-500/30" : "bg-red-500/20 text-red-400 border-red-500/30"}
            >
              {planoAtivo ? 'Ativo' : 'Inativo'}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {planoAtivo ? (
            <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Check className="h-5 w-5 text-green-500" />
                <span className="font-medium text-green-400">Plano Premium Ativo</span>
              </div>
              <p className="text-sm text-green-300">
                Você tem acesso completo a todos os recursos da plataforma.
              </p>
            </div>
          ) : (
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="h-5 w-5 text-red-500" />
                <span className="font-medium text-red-400">Plano Inativo</span>
              </div>
              <p className="text-sm text-red-300">
                Ative seu plano para acessar todos os recursos da plataforma.
              </p>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <p className="font-medium">3 Grupos</p>
              <p className="text-sm text-muted-foreground">WhatsApp</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                <Bot className="h-6 w-6 text-primary" />
              </div>
              <p className="font-medium">Resumos IA</p>
              <p className="text-sm text-muted-foreground">Ilimitados</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <p className="font-medium">Automação</p>
              <p className="text-sm text-muted-foreground">Completa</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Plano Premium */}
      <Card className="cyber-card">
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <Crown className="h-6 w-6 text-primary" />
            Plano Premium
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Preço */}
          <div className="text-center space-y-2">
            <div className="text-4xl font-bold cyber-text">R$ 197</div>
            <p className="text-muted-foreground">Pagamento único</p>
          </div>

          {/* Recursos */}
          <div className="space-y-3">
            <h4 className="font-medium">O que está incluído:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500" />
                <span className="text-sm">Até 3 grupos WhatsApp</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500" />
                <span className="text-sm">Resumos automáticos com IA</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500" />
                <span className="text-sm">Agendamento de resumos</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500" />
                <span className="text-sm">Dashboard analítico</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500" />
                <span className="text-sm">Integração Evolution API</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500" />
                <span className="text-sm">Suporte prioritário</span>
              </div>
            </div>
          </div>

          {/* Botão de Ação */}
          {!planoAtivo && (
            <Button 
              onClick={handlePagamento}
              className="w-full cyber-button text-lg py-6"
            >
              <ExternalLink className="mr-2 h-5 w-5" />
              Ativar Plano Premium
            </Button>
          )}

          {planoAtivo && (
            <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 text-center">
              <Check className="h-8 w-8 text-green-500 mx-auto mb-2" />
              <p className="font-medium text-green-400">Plano já ativo!</p>
              <p className="text-sm text-green-300">Aproveite todos os recursos premium.</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* FAQ/Ajuda */}
      <Card className="cyber-card">
        <CardHeader>
          <CardTitle className="text-lg">Perguntas Frequentes</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <h4 className="font-medium">Como funciona o pagamento?</h4>
            <p className="text-sm text-muted-foreground">
              O pagamento é processado de forma segura através da plataforma Ticto. 
              Após a confirmação, seu plano será ativado automaticamente.
            </p>
          </div>
          
          <div className="space-y-2">
            <h4 className="font-medium">Posso cancelar a qualquer momento?</h4>
            <p className="text-sm text-muted-foreground">
              Sim, você pode cancelar sua assinatura a qualquer momento. 
              Entre em contato com nosso suporte para assistência.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-medium">Como funciona o limite de grupos?</h4>
            <p className="text-sm text-muted-foreground">
              Com o plano premium, você pode conectar até 3 grupos WhatsApp 
              para receber resumos automáticos e análises.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MeuPlano;