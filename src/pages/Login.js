import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Input, Button } from 'components'

import 'assets/css/Login.css'

const Login = () => {
    const [id, setId] = useState('')
    const [password, setPassword ] = useState('')
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target
        name === 'id' ? setId(value) : setPassword(value)
        console.log(name, value)
    }

    const isNotValid = (user) => {
        return user.id === '' && user.password === ''
    }

    const handleLogin = () => {
        const user = JSON.parse(sessionStorage.getItem('user'))
        if(!isNotValid(user) && (id === user.id || user.password)) {
            navigate('/home')
        }else{
            alert('아이디, 비밀번호가 일치하지 않습니다.')
        }
    }

    return(
        <div className="login-container">
            <Input name='id' type='text' value={id} placeholder='Type ID....' onChange={handleChange} /><br/>
            <Input name='password' type='password' value={password} placeholder='Type Password....' onChange={handleChange} /><br/>
            <Button handleClick={handleLogin}>로그인</Button>
        </div>
    )
}

export default Login