import { VisibilityOffOutlined, VisibilityOutlined } from '@mui/icons-material'
import { InputAdornment } from '@mui/material'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { useState } from 'react'

import useMediaQuery from '../../hooks/useMediaQuery'
import {
  Button,
  ContainerAuth,
  ContainerImage,
  Error,
  Eye,
  Form,
  Overlay,
  RedirectLink,
  Title,
  Wrapper,
} from '../reusable/styles.auth'

import { Image, Input, UserImg, Label, LockImg, ContainerInput } from './styles'
const Login = () => {
  const [check, setCheck] = useState(false)
  const initialValues = {
    user: '',
    password: '',
  }
  const isPhone = useMediaQuery('(max-width: 1050px)')
  const required = '* Campo requerido'
  const handleClickShowPassword = () => setCheck((value) => !value)

  const validationSchema = () =>
    Yup.object().shape({
      user: Yup.string()
        .min(6, 'La cantidad minima de caracteres es 6')
        .matches(/^[aA-zZ\s]+$/, 'Solo puede contener letras')
        .required(required)
        .min(6, 'La cantidad minima de caracteres es 6'),
      password: Yup.string()
        .required(required)
        .matches(/^(?=.*[A-Z])(?=.*[0-9])/, 'Debe contener 1 numero y una letra mayuscula'),
    })

  const onSubmit = () => {}

  const formik = useFormik({ initialValues, validationSchema, onSubmit })

  const { handleSubmit, handleChange, errors, touched, handleBlur, values } = formik

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
              value={values.user}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            {errors.user && touched.user && <Error>{errors.user}</Error>}
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
              value={values.password}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            {errors.password && touched.password && <Error>{errors.password}</Error>}
          </ContainerInput>

          <Button>INICIAR SESION</Button>
          <RedirectLink to="/register">Aún no estás registrado?</RedirectLink>
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
