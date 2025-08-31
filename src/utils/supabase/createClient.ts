// Initialize the JS client
import { createClient } from '@supabase/supabase-js'

export async function createSchemaClient() {
  console.log('ini env', process.env.DB_SCHEMA)

  return createClient(process.env.NEXT_PUBLIC_KDEVSTREAM_API_URL!, process.env.NEXT_PUBLIC_KDEVSTREAM_API_ANON_KEY!, {
    db: { schema: process.env.DB_SCHEMA }
  })
}
