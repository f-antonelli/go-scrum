import React, { useState } from 'react'
import { VisibilityOffOutlined, VisibilityOutlined } from '@mui/icons-material'

import {
  Form,
  Image,
  ContainerLogIn,
  ContainerImage,
  Overlay,
  Title,
  Wrapper,
  Input,
  Button,
  ContainerInput,
  UserImg,
  Label,
  Adornament,
  Eye,
  LockImg,
} from './styles'

const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
    showPassword: false,
  })

  const handleChange = (e) => {
    const { name, value } = e.target

    setUser({ ...user, [name]: value })
  }
  const handleClickShowPassword = () => {
    setUser({
      ...user,
      showPassword: !user.showPassword,
    })
  }

  return (
    <Wrapper>
      <ContainerLogIn>
        <Form>
          <Title>¡Hola! Te damos la bienvenida a Go Scrum</Title>

          <ContainerInput variant="outlined">
            <UserImg />
            <Label htmlFor="user-log">Usuario</Label>
            <Input
              id="user-log"
              label="Usuarioooooooo"
              name="email"
              type="text"
              onChange={handleChange}
            />
          </ContainerInput>

          <ContainerInput variant="outlined">
            <LockImg />
            <Label htmlFor="pass-log">Clave</Label>
            <Input
              endAdornment={
                <Adornament position="end">
                  <Eye
                    aria-label="toggle password visibility"
                    edge="end"
                    onClick={handleClickShowPassword}
                  >
                    {user.showPassword ? <VisibilityOffOutlined /> : <VisibilityOutlined />}
                  </Eye>
                </Adornament>
              }
              id="pass-log"
              label="Claveeeeeeee"
              name="password"
              type={user.showPassword ? 'text' : 'password'}
              value={user.password}
              onChange={handleChange}
            />
          </ContainerInput>

          <Button>INICIAR SESION</Button>
        </Form>
        <ContainerImage>
          <Overlay />
          <Image />
        </ContainerImage>
      </ContainerLogIn>
    </Wrapper>
  )
}

export default Login
