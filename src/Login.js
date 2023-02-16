import { useNavigate } from 'react-router-dom'

export default function Login() {
    const navigate = useNavigate()

    function loginHandler(e) {
        e.preventDefault()
        
        const checkLogin = true
        if (checkLogin) {
            // redirect
            navigate('/dashboard')
        }
    }

    return (
        <form onSubmit={loginHandler}>
            <input name="username" type="text" />
            <input name="password" type="password" />
            <button>Login</button>
        </form>
    )
}