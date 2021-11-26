import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Input, Button, Modal } from 'components'

import 'assets/css/Register.css'

const Register = () => {
  const [id, setId] = useState('')
  const [password, setPassword] = useState('')
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    name === 'id' ? setId(value) : setPassword(value)
    console.log(name, value)
  }

  const openModal = () => {
    setOpen(true)
  }

  const closeModal = () => {
    setOpen(false)
  }

  const handleRegister = () => {
    if (JSON.parse(sessionStorage.getItem('user'))) {
      navigate('./login')
    } else {
      if (id !== '' && password !== '') {
        sessionStorage.setItem('user', JSON.stringify({ id, password }))
        navigate('./home')
      } else {
        openModal()
      }
    }
  }

  return (
    <div className='register-container'>
      <Input name='id' type='text' value={id} placeholder='Type ID...' onChange={handleChange} /><br />
      <Input name='password' type='password' value={password} placeholder='Type Password...' onChange={handleChange} /><br />
      <Button handleClick={handleRegister}>Register</Button>

      {/* 모달창 */}
      <Modal open={open}>
        <div className="header">--- Warning Message ---</div>
        <div className="body">
          You need to give right user info.
        </div>
        <div className="footer">
          <Button size="small" handleClick={closeModal}>Close</Button>
        </div>
      </Modal>
    </div>
  )
}

export default Register