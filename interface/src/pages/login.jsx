import React, { useState } from 'react'
import { Navigate, Link } from 'react-router-dom'
import { doSignInWithEmailAndPassword } from '../firebase/auth'
import { useAuth } from '../context/'
import '../home.css'
import camera from '../assets/camera.png'

const Login = () => {
    const { userLoggedIn } = useAuth()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isSigningIn, setIsSigningIn] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const onSubmit = async (e) => {
        e.preventDefault()
        if (!isSigningIn) {
            setIsSigningIn(true)
            await doSignInWithEmailAndPassword(email, password)
        }
    }

    return (
        <div>
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
                            <input type="text" class="upload" placeholder="Email" onChange={(e) => { setEmail(e.target.value) }} required />
                            <input type="password" class="upload" placeholder="password" onChange={(e) => { setPassword(e.target.value) }} required />
                            <button class="upload" type="submit" id="myButton">
                                Login 🔓
                            </button>

                            <h4>New here?  <Link to={'/register'}>Sign up</Link></h4>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login