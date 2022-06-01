import { FormControlLabel, MenuItem, Switch } from '@mui/material'
import React, { useEffect, useState } from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { v4 as uuidv4 } from 'uuid'
import { useNavigate } from 'react-router-dom'

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
const { REACT_APP_API_ENDPOINT: API_ENDPOINT } = process.env
const Register = () => {
  const initialValues = {
    user: '',
    password: '',
    email: '',
    teamID: '',
    continent: '',
    role: '',
    region: '',
    switch: false,
  }

  const [data, setData] = useState({})
  const navigate = useNavigate()

  useEffect(() => {
    fetch(`${API_ENDPOINT}/auth/data`)
      .then((res) => res.json())
      .then((data) => setData(data.result))
  }, [])

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
      role: Yup.string().required(required).oneOf(data.Rol),
      region: Yup.string().required(required).oneOf(data.region),
      continent: Yup.string().required(required).oneOf(data.continente),
    })

  const onSubmit = () => {
    values.teamID = !values.teamID ? uuidv4() : values.teamID

    fetch(`${API_ENDPOINT}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: {
          userName: values.user,
          password: values.password,
          email: values.email,
          teamID: values.teamID,
          role: values.role,
          continent: values.continent,
          region: values.region,
        },
      }),
    })
      .then((res) => res.json())
      .then((data) => navigate('/registered/' + data?.result?.user.teamID))
  }

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

          <FormControlLabel
            control={
              <Switch
                color="secondary"
                name="switch"
                value={values.switch}
                onChange={() => formik.setFieldValue('switch', !formik.values.switch)}
              />
            }
            label="Perteneces a un equipo ya creado"
          />

          {!values.switch && (
            <ContainerInput>
              <Label htmlFor="user-log">Introduce el identificador de equipo</Label>
              <Input
                label="Introduce el identificador de equipo"
                name="teamID"
                type="text"
                value={values.teamID}
                onChange={handleChange}
              />
            </ContainerInput>
          )}

          <BoxSelect>
            <ContainerSelect
              select
              label="Selecciona un rol"
              name="role"
              value={values.role}
              onBlur={handleBlur}
              onChange={handleChange}
            >
              {data.Rol?.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
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
              {data.continente?.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </ContainerSelect>
            {errors.continent && touched.continent && <Error>{errors.continent}</Error>}
          </BoxSelect>

          {values.continent === 'America' && (
            <BoxSelect>
              <ContainerSelect
                select
                label="Selecciona una region"
                name="region"
                value={values.continent === 'America' ? values.region : 'Otro'}
                onBlur={handleBlur}
                onChange={handleChange}
              >
                {data.region?.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </ContainerSelect>
              {errors.region && touched.region && <Error>{errors.region}</Error>}
            </BoxSelect>
          )}

          <Button type="submit">REGISTRARSE</Button>

          <RedirectLink to="/login">Ya posees una cuenta? Inicia sesión</RedirectLink>
        </Form>
      </ContainerAuth>
    </Wrapper>
  )
}

export default Register
