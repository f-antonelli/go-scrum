import { MenuItem } from '@mui/material'
import React from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik'

import useMediaQuery from '../../hooks/useMediaQuery'
import {
  Button,
  ContainerAuth,
  ContainerImage,
  Error,
  Form,
  Overlay,
  RedirectLink,
  Title,
  Wrapper,
} from '../reusable/styles.auth'

import { CONTINENT, REGION, ROLES, required } from './data'
import { ContainerSelect, Image, Input, Label, ContainerInput, BoxSelect } from './styles'

const Register = () => {
  const initialValues = {
    user: '',
    password: '',
    email: '',
    continent: '',
    role: '',
    region: '',
  }

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
      email: Yup.string().email('El formato debe ser valido').required(required),
      role: Yup.string().required(required).oneOf(ROLES),
      region: Yup.string().required(required).oneOf(REGION),
      continent: Yup.string().required(required).oneOf(CONTINENT),
    })

  const onSubmit = () => {}

  const formik = useFormik({ initialValues, validationSchema, onSubmit })

  const { handleSubmit, handleChange, errors, touched, handleBlur, values } = formik
  const isPhone = useMediaQuery('(max-width: 1050px)')

  return (
    <Wrapper>
      <ContainerAuth
        height={isPhone ? '80vh' : undefined}
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
              value={values.user}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            {errors.user && touched.user && <Error>{errors.user}</Error>}
          </ContainerInput>

          <ContainerInput variant="outlined">
            <Label htmlFor="user-log">Ingrese una clave</Label>
            <Input
              id="user-log"
              label="Ingrese una clave"
              name="password"
              type="password"
              value={values.password}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            {errors.password && touched.password && <Error>{errors.password}</Error>}
          </ContainerInput>

          <ContainerInput variant="outlined">
            <Label htmlFor="user-log">Ingrese un email</Label>
            <Input
              id="user-log"
              label="Ingrese un email"
              name="email"
              type="email"
              value={values.email}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            {errors.email && touched.email && <Error>{errors.email}</Error>}
          </ContainerInput>

          <BoxSelect>
            <ContainerSelect
              select
              label="Selecciona un rol"
              name="role"
              value={values.role}
              onBlur={handleBlur}
              onChange={handleChange}
            >
              {ROLES.map((option, index) => (
                <MenuItem key={index} value={option.value}>
                  {option.value}
                </MenuItem>
              ))}
            </ContainerSelect>
            {errors.role && touched.role && <Error>{errors.role}</Error>}
          </BoxSelect>

          <BoxSelect>
            <ContainerSelect
              select
              label="Selecciona un continente"
              name="continent"
              value={values.continent}
              onBlur={handleBlur}
              onChange={handleChange}
            >
              {CONTINENT.map((option, index) => (
                <MenuItem key={index} value={option.value}>
                  {option.value}
                </MenuItem>
              ))}
            </ContainerSelect>
            {errors.continent && touched.continent && <Error>{errors.continent}</Error>}
          </BoxSelect>

          <BoxSelect>
            <ContainerSelect
              select
              label="Selecciona una region"
              name="region"
              value={values.region}
              onBlur={handleBlur}
              onChange={handleChange}
            >
              {REGION.map((option, index) => (
                <MenuItem key={index} value={option.value}>
                  {option.value}
                </MenuItem>
              ))}
            </ContainerSelect>
            {errors.region && touched.region && <Error>{errors.region}</Error>}
          </BoxSelect>

          <Button>REGISTRARSE</Button>
          <RedirectLink to="/login">Ya posees una cuenta? Inicia sesión</RedirectLink>
        </Form>
      </ContainerAuth>
    </Wrapper>
  )
}

export default Register
