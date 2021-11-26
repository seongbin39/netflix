import React, { useState, useReducer } from 'react'
import { useNavigate } from 'react-router-dom'
import { Input, Button, Modal } from 'components'

import 'assets/css/Login.css'

const Login = () => {
    const [id, setId] = useState('')
    const [password, setPassword ] = useState('')
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

    const isNotValid = (user) => {
        return user.id === '' && user.password === ''
    }

    const handleLogin = () => {
        const user = JSON.parse(sessionStorage.getItem('user'))
        if(!isNotValid(user) && (id === user.id || user.password)) {
            navigate('/home')
        }else{
            openModal()
        }
    }

    return(
        <div className="login-container">
            <Input name='id' type='text' value={id} placeholder='Type ID....' onChange={handleChange} /><br/>
            <Input name='password' type='password' value={password} placeholder='Type Password....' onChange={handleChange} /><br/>
            <Button handleClick={handleLogin}>로그인</Button>

            {/* 모달창 */}
            <Modal open={open}>
                <div className="header">-- Warning message --</div>
                <div className="body">
                    You gaved wrong id or password !
                </div>
                <div className="footer">
                    <Button size="small" handleClick={closeModal}>Close</Button>
                </div>
            </Modal>
        </div>
    )
}

export default Login