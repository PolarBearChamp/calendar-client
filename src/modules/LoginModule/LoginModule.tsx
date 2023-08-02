import LoginForm from "@/src/components/Login/Forms/LoginForm"
import Slides from "@/src/components/Login/Slides/Slides"
import cls from "./LoginModule.module.scss"

const LoginModule: React.FC = () => {
    return (
        <div className={cls.container}>
            <LoginForm />
            <Slides />
        </div>
    )
}

export default LoginModule
