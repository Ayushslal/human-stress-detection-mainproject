import React, { useState } from 'react'
import { Navigate, Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/'
import { doCreateUserWithEmailAndPassword } from '../firebase/auth'
import '../home.css'
import camera from '../assets/camera.png'
const Register = () => {

    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [confirmPassword, setconfirmPassword] = useState('')
    const [isRegistering, setIsRegistering] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const { userLoggedIn } = useAuth()

    const onSubmit = async (e) => {
        e.preventDefault()
        if (!isRegistering) {
            setIsRegistering(true)
            await doCreateUserWithEmailAndPassword(email, password)
        }
    }

    return (
        <>
            {userLoggedIn && (<Navigate to={'/home'} replace={true} />)}

            <div class="parent">

                <div class="child">

                    <div class="left">
                        <h3>Age and Gender Detection</h3>
                        <div class="second">
                            <h4>Model</h4>
                            <h4>For</h4>
                            <h4>Age</h4>
                            <h4>&</h4>
                            <h4>Gender</h4>
                            <h4>Detection</h4>
                        </div>
                    </div>

                    <div class="image-upload">
                        <img src={camera} alt="" srcset="" />
                    </div>

                    <div class="right">
                        <form onSubmit={onSubmit}>
                            <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} class="upload" placeholder="Email" required />
                            <input type="text" class="upload" value={name} onChange={(e) => { setName(e.target.value) }} placeholder="Username" required />
                            <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} class="upload" placeholder="password" required />
                            <input type="password" value={confirmPassword} onChange={(e) => { setconfirmPassword(e.target.value) }} class="upload" placeholder="confirm password" required />
                            <button class="upload" type="submit" id="myButton">
                                Signup 🔓
                            </button>

                            <h4>Already User? <Link to={'/login'}>Log In</Link></h4>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register