import { VisibilityOffOutlined, VisibilityOutlined } from '@mui/icons-material'
import { InputAdornment } from '@mui/material'

import useForm from '../../hooks/useForm'
import useMediaQuery from '../../hooks/useMediaQuery'
import {
  Button,
  ContainerAuth,
  ContainerImage,
  ContainerInput,
  Eye,
  Form,
  Overlay,
  Title,
  Wrapper,
} from '../reusable/styles.auth'

import { Image, Input, UserImg, Label, LockImg } from './styles'

const Login = () => {
  const { inputs, check, handleChange, handleSubmit, handleClickShowPassword } = useForm({
    user: '',
    password: '',
  })
  const { user, password } = inputs
  const isPhone = useMediaQuery('(max-width: 1050px)')

  return (
    <Wrapper>
      <ContainerAuth
        height={isPhone ? '50vh' : undefined}
        orientation={isPhone ? 'column-reverse' : undefined}
      >
        <Form onSubmit={handleSubmit}>
          <Title>¡Hola! Te damos la bienvenida a Go Scrum</Title>

          <ContainerInput pl={'1.7rem'} variant="outlined">
            <UserImg />
            <Label htmlFor="user-log">Usuario</Label>
            <Input
              id="user-log"
              label="Usuarioooooooo"
              name="user"
              type="text"
              value={user}
              onChange={handleChange}
            />
          </ContainerInput>

          <ContainerInput pl={'1.7rem'} variant="outlined">
            <LockImg />
            <Label htmlFor="pass-log">Clave</Label>
            <Input
              endAdornment={
                <InputAdornment position="end">
                  <Eye
                    aria-label="toggle password visibility"
                    edge="end"
                    onClick={handleClickShowPassword}
                  >
                    {check ? <VisibilityOffOutlined /> : <VisibilityOutlined />}
                  </Eye>
                </InputAdornment>
              }
              id="pass-log"
              label="Claveeeeeeee"
              name="password"
              type={check ? 'text' : 'password'}
              value={password}
              onChange={handleChange}
            />
          </ContainerInput>

          <Button>INICIAR SESION</Button>
        </Form>
        <ContainerImage height={'35rem'} shadow={'5px 5px 10px'}>
          <Overlay />
          <Image />
        </ContainerImage>
      </ContainerAuth>
    </Wrapper>
  )
}

export default Login
