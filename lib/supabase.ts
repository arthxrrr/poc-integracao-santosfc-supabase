import { createClient } from '@supabase/supabase-js'

// IMPORTANTE: Substitua estas URLs pelas suas credenciais do Supabase
// Você pode encontrar essas informações em: Settings > API no seu projeto Supabase
const supabaseUrl = 'https://cgxbghaicsfzvxqxnkki.supabase.co' // Ex: 'https://your-project.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNneGJnaGFpY3NmenZ4cXhua2tpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY5MTgwMzIsImV4cCI6MjA3MjQ5NDAzMn0.vCMSBUUhz1_dQHesUz0EbxslsxX0bi0rAjY0J2yF8G0' // Sua chave anônima pública

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          email: string
          name: string | null
          description: string | null
          avatar_url: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          name?: string | null
          description?: string | null
          avatar_url?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          name?: string | null
          description?: string | null
          avatar_url?: string | null
          created_at?: string
          updated_at?: string
        }
      }
    }
  }
}
