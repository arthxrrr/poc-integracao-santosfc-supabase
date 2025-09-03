# Configuração do Supabase

## 1. Criar projeto no Supabase

1. Acesse [supabase.com](https://supabase.com)
2. Crie uma conta ou faça login
3. Clique em "New Project"
4. Preencha os dados do projeto:
   - Nome: `poc-integracao-supabase2`
   - Senha do banco: (escolha uma senha forte)
   - Região: escolha a mais próxima

## 2. Configurar as variáveis de ambiente

1. No seu projeto Supabase, vá em Settings > API
2. Copie a URL do projeto e a chave anônima (anon key)
3. No arquivo `lib/supabase.ts`, substitua:
   - `YOUR_SUPABASE_URL` pela URL do seu projeto
   - `YOUR_SUPABASE_ANON_KEY` pela chave anônima

## 3. Criar a tabela de perfis

Execute o seguinte SQL no editor SQL do Supabase (SQL Editor):

```sql
-- Criar tabela de perfis
CREATE TABLE profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  email TEXT NOT NULL,
  name TEXT,
  description TEXT,
  avatar_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Habilitar RLS (Row Level Security)
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Política para usuários poderem ver apenas seu próprio perfil
CREATE POLICY "Users can view own profile" ON profiles
  FOR SELECT USING (auth.uid() = id);

-- Política para usuários poderem inserir seu próprio perfil
CREATE POLICY "Users can insert own profile" ON profiles
  FOR INSERT WITH CHECK (auth.uid() = id);

-- Política para usuários poderem atualizar seu próprio perfil
CREATE POLICY "Users can update own profile" ON profiles
  FOR UPDATE USING (auth.uid() = id);

-- Função para atualizar updated_at automaticamente
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger para atualizar updated_at
  CREATE TRIGGER update_profiles_updated_at
    BEFORE UPDATE ON profiles
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();
```

## 4. Configurar Storage para avatars

1. No Supabase, vá em Storage
2. Clique em "Create a new bucket"
3. Nome: `avatars`
4. Marque como público (public)
5. Execute o seguinte SQL para configurar as políticas:

```sql
-- Política para usuários poderem fazer upload de suas próprias imagens
CREATE POLICY "Users can upload own avatar" ON storage.objects
  FOR INSERT WITH CHECK (
    bucket_id = 'avatars' AND
    auth.uid()::text = (storage.foldername(name))[1]
  );

-- Política para usuários poderem ver suas próprias imagens
CREATE POLICY "Users can view own avatar" ON storage.objects
  FOR SELECT USING (
    bucket_id = 'avatars' AND
    auth.uid()::text = (storage.foldername(name))[1]
  );

-- Política para usuários poderem atualizar suas próprias imagens
CREATE POLICY "Users can update own avatar" ON storage.objects
  FOR UPDATE USING (
    bucket_id = 'avatars' AND
    auth.uid()::text = (storage.foldername(name))[1]
  );

-- Política para usuários poderem deletar suas próprias imagens
CREATE POLICY "Users can delete own avatar" ON storage.objects
  FOR DELETE USING (
    bucket_id = 'avatars' AND
    auth.uid()::text = (storage.foldername(name))[1]
  );
```

## 5. Configurar autenticação

1. No painel do Supabase, no menu lateral esquerdo, clique em **"Authentication"**
2. Depois clique em **"Settings"** (Configurações)
3. Na seção **"URL Configuration"**, você encontrará:
   - **Site URL**: Adicione `http://localhost:8081` (porta padrão do Expo)
   - **Redirect URLs**: Adicione `http://localhost:8081/**` (permite todos os redirecionamentos do localhost)
4. **Opcional**: Na seção **"Email"**, desmarque **"Enable email confirmations"** se quiser testar sem confirmação de email
5. Clique em **"Save"** para salvar as alterações

**Nota**: Se você estiver usando uma porta diferente do Expo, substitua `8081` pela porta correta que aparece no seu terminal quando executa `npm start`.

## 6. Testar a aplicação

1. Execute `npm start` no terminal
2. Escaneie o QR code com o Expo Go
3. Teste o cadastro e login
4. Teste a edição de perfil com upload de foto

## Funcionalidades implementadas

- ✅ Tela de Login
- ✅ Tela de Cadastro
- ✅ Tela de Edição de Perfil (Nome, descrição, foto)
- ✅ Integração com Supabase Auth
- ✅ Integração com Supabase Database
- ✅ Integração com Supabase Storage
- ✅ Proteção de rotas (usuário logado)
- ✅ Navegação entre telas
