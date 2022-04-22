import { FormControl, IconButton } from '@mui/material'
import styled from 'styled-components'

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

export const ContainerAuth = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${(props) => props.height};
  max-width: 60rem;
  flex-direction: ${(props) => props.orientation};
  @media (max-width: 1050px) {
    max-height: 40rem;
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
    margin-bottom: ${(props) => props.mb};
  }
`

export const ContainerInput = styled(FormControl)`
  width: 100%;
  margin-bottom: 1rem !important;
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

export const Eye = styled(IconButton)`
  color: var(--black) !important;
`

export const ContainerImage = styled.div`
  position: relative;
  flex: 1;
  width: 20rem;
  height: ${(props) => props.height};
  max-width: 25.5rem;
  overflow: hidden;
  border-radius: 0.3rem;
  box-shadow: rgba(0, 0, 0, 0.2) ${(props) => props.shadow};
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

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--primary);
  opacity: 0.45;
`
