import { MenuItem } from '@mui/material'
import React from 'react'

import useForm from '../../hooks/useForm'
import useMediaQuery from '../../hooks/useMediaQuery'
import {
  Button,
  ContainerAuth,
  ContainerImage,
  ContainerInput,
  Form,
  Overlay,
  Title,
  Wrapper,
} from '../reusable/styles.auth'

import { CONTINENT, REGION, ROLES } from './data'
import { ContainerSelect, Image, Input, Label } from './styles'

const Register = () => {
  const { inputs, handleChange, handleSubmit } = useForm({
    user: '',
    password: '',
    role: '',
    continent: '',
    region: '',
  })
  const { user, email, role, continent, region, password } = inputs
  const isPhone = useMediaQuery('(max-width: 1050px)')

  return (
    <Wrapper>
      <ContainerAuth
        height={isPhone ? '75vh' : undefined}
        orientation={isPhone ? 'column' : undefined}
      >
        <ContainerImage height={'22rem'} shadow={'-1px 5px 10px'}>
          <Overlay />
          <Image />
        </ContainerImage>
        <Form onSubmit={handleSubmit}>
          <Title mb={isPhone && '1rem'}>Por favor complete los siguentes datos</Title>

          <ContainerInput variant="outlined">
            <Label htmlFor="user-log">Ingrese un usuario</Label>
            <Input
              id="user-log"
              label="Ingrese un usuario"
              name="user"
              type="text"
              value={user}
              onChange={handleChange}
            />
          </ContainerInput>

          <ContainerInput variant="outlined">
            <Label htmlFor="user-log">Ingrese una clave</Label>
            <Input
              id="user-log"
              label="Ingrese una clave"
              name="password"
              type="password"
              value={password}
              onChange={handleChange}
            />
          </ContainerInput>

          <ContainerInput variant="outlined">
            <Label htmlFor="user-log">Ingrese un email</Label>
            <Input
              id="user-log"
              label="Ingrese un email"
              name="email"
              type="email"
              value={email}
              onChange={handleChange}
            />
          </ContainerInput>

          <ContainerSelect
            select
            label="Selecciona un rol"
            name="role"
            value={role}
            onChange={handleChange}
          >
            {ROLES.map((option, index) => (
              <MenuItem key={index} value={option.value}>
                {option.value}
              </MenuItem>
            ))}
          </ContainerSelect>

          <ContainerSelect
            select
            label="Selecciona un continente"
            name="continent"
            value={continent}
            onChange={handleChange}
          >
            {CONTINENT.map((option, index) => (
              <MenuItem key={index} value={option.value}>
                {option.value}
              </MenuItem>
            ))}
          </ContainerSelect>

          <ContainerSelect
            select
            label="Selecciona una region"
            name="region"
            value={region}
            onChange={handleChange}
          >
            {REGION.map((option, index) => (
              <MenuItem key={index} value={option.value}>
                {option.value}
              </MenuItem>
            ))}
          </ContainerSelect>

          <Button>REGISTRARSE</Button>
        </Form>
      </ContainerAuth>
    </Wrapper>
  )
}

export default Register
