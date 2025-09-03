# 🚀 Instruções Rápidas - App de Loja de Material de Construção

## ✅ O que foi implementado

- **Tela de Login** - Autenticação com email e senha
- **Tela de Cadastro** - Criação de conta com validação
- **Tela de Edição de Perfil** - Nome, descrição e foto do usuário
- **Integração completa com Supabase** - Auth, Database e Storage
- **Proteção de rotas** - Apenas usuários logados acessam o app
- **Navegação por abas** - Home, Explore e Perfil

## 🔧 Configuração Necessária

### 1. Configurar Supabase
1. Siga as instruções detalhadas no arquivo `SUPABASE_SETUP.md`
2. **IMPORTANTE**: Edite o arquivo `lib/supabase.ts` e substitua:
   - `YOUR_SUPABASE_URL` pela URL do seu projeto
   - `YOUR_SUPABASE_ANON_KEY` pela chave anônima

### 2. Executar o projeto
```bash
npm start
```

### 3. Testar no dispositivo
- Escaneie o QR code com o Expo Go
- Teste o cadastro de usuário
- Teste o login
- Teste a edição de perfil com upload de foto

## 📱 Funcionalidades

### Autenticação
- Login com email/senha
- Cadastro com validação
- Logout seguro
- Sessão persistente

### Perfil do Usuário
- Edição de nome e descrição
- Upload de foto de perfil
- Armazenamento no Supabase Storage
- Dados salvos no banco de dados

### Navegação
- Tela inicial personalizada
- Navegação por abas
- Proteção de rotas
- Redirecionamento automático

## 🎯 Próximos Passos

Para expandir o app, você pode adicionar:
- Catálogo de produtos
- Carrinho de compras
- Sistema de pedidos
- Notificações push
- Chat com suporte

## 📞 Suporte

Se encontrar algum problema:
1. Verifique se o Supabase está configurado corretamente
2. Confirme se as credenciais estão corretas no `lib/supabase.ts`
3. Verifique se as tabelas e políticas foram criadas no Supabase
4. Consulte os logs do console para erros específicos
