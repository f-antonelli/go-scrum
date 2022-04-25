import styled from 'styled-components'
import { FormControl, InputLabel, OutlinedInput } from '@mui/material'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'

import loginSrc from '../../assets/auth/login-img.svg'

export const ContainerInput = styled(FormControl)`
  position: relative;
  width: 100%;
  margin-bottom: 1.5rem !important;
  .MuiInputLabel-root {
    padding-left: ${(props) => props.pl};
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
