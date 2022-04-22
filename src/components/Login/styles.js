import styled from 'styled-components'
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'

import loginSrc from '../../assets/login/login-img.svg'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 70vw;
  margin: auto;
  @media (max-width: 680px) {
    width: 90vw;
  }
`

export const ContainerLogIn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 60rem;
  @media (max-width: 1050px) {
    height: 60vh;
    max-height: 40rem;
    flex-direction: column-reverse;
  }
`

export const Form = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  box-shadow: rgba(0, 0, 0, 0.1) 2px 2px 6px;
  border-radius: 0.3rem;
  @media (max-width: 1050px) {
    width: 100%;
    border-radius: 0 0 0.3rem 0.3rem;
  }
  @media (max-width: 780px) {
    padding: 2rem 1rem !important;
  }
`

export const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
  @media (max-width: 1050px) {
    font-size: 1.5rem;
  }
`

export const ContainerInput = styled(FormControl)`
  width: 100%;
  margin-bottom: 1rem !important;
  .MuiInputLabel-root {
    padding-left: 1.7rem;
  }
  label.Mui-focused {
    color: var(--primary);
  }
  .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: var(--primary);
    }
  }
`
export const Input = styled(OutlinedInput)`
  outline: none;
  border-radius: 0.3rem;
  padding-left: 2rem;
`

export const LockImg = styled(LockOutlinedIcon)`
  z-index: 10;
  position: absolute;
  top: 1rem;
  left: 0.8rem;
  width: 20px;
  height: 20px;
`

export const UserImg = styled(PersonOutlinedIcon)`
  z-index: 10;
  position: absolute;
  top: 1rem;
  left: 0.8rem;
  width: 20px;
  height: 20px;
`

export const Label = styled(InputLabel)`
  white-space: pre-wrap !important;
`

export const Button = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  padding: 0.6rem;
  margin-top: 1rem;
  border-radius: 0.3rem;
  background-color: var(--primary);
  color: var(--white);
  font-size: 1.1rem;
  font-weight: 600;
  :focus,
  :hover {
    background-color: var(--dark-orange);
  }
`
export const Adornament = styled(InputAdornment)``

export const Eye = styled(IconButton)`
  color: var(--black) !important;
`

export const ContainerImage = styled.div`
  position: relative;
  flex: 1;
  width: 20rem;
  height: 35rem;
  max-width: 25.5rem;
  overflow: hidden;
  border-radius: 0.3rem;
  box-shadow: rgba(0, 0, 0, 0.2) 5px 5px 10px;
  @media (max-width: 1050px) {
    flex-direction: column-reverse;
    width: 100%;
    max-width: none;
    box-shadow: none;
    border-radius: 0.3rem 0.3rem 0 0;
  }
  @media (max-width: 350px) {
    display: none;
  }
`

export const Image = styled.div`
  z-index: -1;
  position: absolute;
  bottom: 0;
  right: -7rem;
  background: url(${loginSrc}) no-repeat;
  background-size: cover;
  width: 38rem;
  height: 22rem;
  @media (max-width: 1050px) {
    bottom: -12rem;
  }
`

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--primary);
  opacity: 0.45;
`
