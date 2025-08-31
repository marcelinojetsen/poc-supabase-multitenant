'use server'

import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

export async function signInWithDevStreamId() {
  const supabase = await createClient()

  const { data } = await supabase.auth.signInWithOAuth({
    provider: 'keycloak',
    options: {
      scopes: 'openid',
      redirectTo: process.env.REDIRECT_URI_CALLBACK
    }
  })

  if (data.url) {
    return redirect(data.url)
  }
}

export async function signInWithEmail(email: string, password: string) {
  const supabase = await createClient()

  console.log('email', email)
  console.log('password', password)

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  })

  if (error) {
    console.error('Error signing in:', error)

    return { error }
  }

  console.log('Sign in data:', data)
  console.log('Sign in error:', error)

  return data
}
