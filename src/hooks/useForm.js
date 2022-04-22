import { useState } from 'react'

const useForm = (initialState = {}) => {
  const [inputs, setInputs] = useState(initialState)
  const [check, setCheck] = useState(false)

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target

    setInputs((values) => ({
      ...values,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleClickShowPassword = () => setCheck((value) => !value)

  return { inputs, handleChange, handleSubmit, handleClickShowPassword, check }
}

export default useForm
