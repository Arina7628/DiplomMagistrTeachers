import { Login } from 'components/Login';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    return (
        <div>
            <h1>Информационная система <br/>анализа педагогической деятельности учителя</h1>
            <h2>Авторизация</h2>
            <Login />
            <p>
                Or <Link to="/register">register</Link>
            </p>
        </div>
    )
}

export default LoginPage
