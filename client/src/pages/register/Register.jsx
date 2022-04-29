import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom/cjs/react-router-dom.min"
import "./register.css"

export default function Register() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)
    const handleSubmit = async (e)=>{
        e.preventDefault()
        setError(false)
        try {
            const res = await axios.post("/auth/register", {
                username,
                email,
                password,
            })
            res.data && window.location.replace("/login")
        }
        catch(err){
            setError(true)
        }
    }
    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <form action="" className="registerForm" onSubmit={handleSubmit}>
                <label>Username</label>
                <input 
                    type="text" 
                    className="registerInput" 
                    placeholder="Username"
                    onChange={e=>setUsername(e.target.value)}>
                </input>
                <label>Email</label>
                <input 
                    type="text" 
                    className="registerInput" 
                    placeholder="nhập email của bạn"
                    onChange={e=>setEmail(e.target.value)}>
                </input>
                <label>Password</label>
                <input 
                    type="password" 
                    className="registerInput" 
                    placeholder="Nhập mật khẩu của bạn"
                    onChange={e=>setPassword(e.target.value)}>
                </input>
                <button className="registerButton" type="submit">Register</button>
            </form>
            <button className="registerLoginButton">
                <Link className='link' to="/login">Login</Link>
            </button>
            {error && <span style={{color:"red", marginTop:15}}>Something went wrong!</span>}
        </div>
    )
}
