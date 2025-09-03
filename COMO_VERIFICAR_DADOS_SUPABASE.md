# 🔍 Como Verificar os Dados no Supabase

## 📊 Onde Ver os Dados dos Usuários

### 1. **Tabela de Perfis (profiles)**
Para ver os dados dos perfis dos usuários:

1. **Acesse seu projeto no Supabase** → [supabase.com](https://supabase.com)
2. **No menu lateral esquerdo**, clique em **"Table Editor"**
3. **Selecione a tabela "profiles"**
4. **Aqui você verá:**
   - `id` - ID único do usuário
   - `email` - Email do usuário
   - `name` - Nome do usuário (quando preenchido)
   - `description` - Descrição do usuário (quando preenchida)
   - `avatar_url` - URL da foto de perfil (quando enviada)
   - `created_at` - Data de criação
   - `updated_at` - Data da última atualização

### 2. **Usuários Autenticados (auth.users)**
Para ver todos os usuários cadastrados:

1. **No menu lateral**, clique em **"Authentication"**
2. **Clique em "Users"**
3. **Aqui você verá:**
   - Lista de todos os usuários cadastrados
   - Status de confirmação de email
   - Data de criação da conta
   - Último login

### 3. **Storage - Fotos de Perfil**
Para ver as fotos enviadas pelos usuários:

1. **No menu lateral**, clique em **"Storage"**
2. **Clique no bucket "avatars"**
3. **Aqui você verá:**
   - Todas as fotos de perfil enviadas
   - Nome dos arquivos (formato: `user-id-timestamp.extensão`)
   - Tamanho dos arquivos
   - Data de upload

## 🔄 Como Testar as Atualizações

### **Teste Completo:**

1. **Cadastre um usuário** no app
2. **Faça login** com esse usuário
3. **Vá para a aba "Perfil"**
4. **Preencha nome e descrição**
5. **Envie uma foto**
6. **Clique em "Salvar Perfil"**

### **Verifique no Supabase:**

1. **Table Editor → profiles**: Veja se os dados foram salvos
2. **Storage → avatars**: Veja se a foto foi enviada
3. **Authentication → Users**: Confirme que o usuário está ativo

## 📱 O que Você Deve Ver

### **Na tabela profiles:**
```sql
id: "uuid-do-usuario"
email: "usuario@email.com"
name: "Nome do Usuário"
description: "Descrição do usuário"
avatar_url: "https://seu-projeto.supabase.co/storage/v1/object/public/avatars/..."
created_at: "2024-01-XX 10:00:00"
updated_at: "2024-01-XX 10:05:00"
```

### **No Storage:**
- Arquivo com nome: `uuid-do-usuario-1234567890.jpg`
- Tamanho: varia conforme a imagem
- URL pública acessível

## 🚨 Problemas Comuns

### **Se os dados não aparecem:**
1. Verifique se as políticas RLS estão configuradas
2. Confirme se o usuário está logado
3. Verifique os logs do console no app

### **Se a foto não aparece:**
1. Verifique se o bucket "avatars" foi criado
2. Confirme se as políticas de storage estão corretas
3. Teste com uma imagem menor

## 💡 Dicas

- **Atualize a página** do Supabase para ver mudanças recentes
- **Use o filtro** na tabela para encontrar usuários específicos
- **Clique no nome do arquivo** no Storage para ver a imagem
- **Verifique os logs** em "Logs" no menu lateral para erros
