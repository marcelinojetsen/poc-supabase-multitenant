'use client'

import { useState } from 'react'

import { useRouter } from 'next/navigation'

// MUI
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import Button from '@mui/material/Button'

// Components
import CustomTextField from '@core/components/mui/TextField'

// Config
import themeConfig from '@configs/themeConfig'
import { signInWithEmail } from '@/app/(blank-layout-pages)/login/actions'
import AuthIllustrationWrapper from './AuthIllustrationWrapper'

const LoginV1 = () => {
  const router = useRouter()

  const [isPasswordShown, setIsPasswordShown] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const hasError = Boolean(error)

  const handleClickShowPassword = () => setIsPasswordShown(show => !show)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const result = await signInWithEmail(email, password)

    console.log('Login result:', result)

    if ('error' in result) {
      setError('Failed to Login')
    } else {
      // Redirect to homepage or dashboard after successful login
      router.push('/')
    }

    setLoading(false)
  }

  return (
    <AuthIllustrationWrapper>
      <div className='auth-card-wrapper'>
        <Card className='flex flex-col sm:is-[450px]'>
          <CardContent className='sm:!p-12'>
            <div className='flex flex-col gap-1 mbe-6 text-center'>
              <Typography variant='h4'>{`Welcome to ${themeConfig.templateName}! 👋🏻`}</Typography>
              <Typography>Please sign-in to your account</Typography>
            </div>
            <form noValidate autoComplete='off' onSubmit={handleSubmit} className='flex flex-col gap-6'>
              <CustomTextField
                autoFocus
                fullWidth
                label='Email or Username'
                placeholder='Enter your email or username'
                value={email}
                error={hasError}
                onChange={e => setEmail(e.target.value)}
              />
              <CustomTextField
                fullWidth
                label='Password'
                placeholder='············'
                id='outlined-adornment-password'
                type={isPasswordShown ? 'text' : 'password'}
                value={password}
                error={hasError}
                onChange={e => setPassword(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      <IconButton edge='end' onClick={handleClickShowPassword} onMouseDown={e => e.preventDefault()}>
                        <i className={isPasswordShown ? 'tabler-eye-off' : 'tabler-eye'} />
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
              {error && <Typography color='error'>{error}</Typography>}
              <Button fullWidth variant='contained' type='submit' disabled={loading}>
                {loading ? 'Logging in...' : 'Login'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </AuthIllustrationWrapper>
  )
}

export default LoginV1
