import styled from 'styled-components'
import { FormControl, InputLabel, OutlinedInput, TextField } from '@mui/material'

import registersrc from '../../assets/auth/register-img.svg'

export const ContainerInput = styled(FormControl)`
  position: relative;
  width: 100%;
  margin-bottom: 1.5rem !important;
  .MuiInputLabel-root {
    padding-left: ${(props) => props.pl};
  }
  label.Mui-focused {
    color: var(--primary);
    transform: translate(14px, -4px) scale(0.75) !important ;
  }
  .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: var(--primary);
    }
  }
`

export const ContainerSelect = styled(TextField)`
  width: 100%;
  //margin-bottom: 1rem !important;
  label.Mui-focused {
    color: var(--primary);
  }
  .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: var(--primary);
    }
  }
  .css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root {
    top: -0.3rem !important;
  }
  .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input {
    padding: 0.6rem !important;
  }
`
export const Input = styled(OutlinedInput)`
  outline: none;
  border-radius: 0.3rem;
  .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input {
    padding: 0.6rem !important;
  }
`

export const Label = styled(InputLabel)`
  white-space: pre-wrap !important;
  top: -0.3rem !important;
  .css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root {
    top: -2rem !important;
    left: 2rem !important;
  }
`

export const Image = styled.div`
  z-index: -1;
  position: absolute;
  bottom: 0;
  left: 0;
  background: url(${registersrc}) no-repeat;
  background-size: cover;
  width: 100%;
  height: 20rem;
  @media (max-width: 1050px) {
    bottom: -6rem;
  }
`

export const BoxSelect = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
`
