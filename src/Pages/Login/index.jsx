import styles from './styles.module.css'
import { Link } from 'react-router-dom'

export function Login() {


    return (
        <div className={styles.site}>
            <div className={styles.base}>
                <h1>Fazer Login</h1>

                <input type="text" placeholder='Digite Seu Login' />
                <input type="password" placeholder='Digite Sua Senha' name="" id="" />


                <div>
                    <button>Login</button>
                    <button>Cancelar</button>
                </div>


            </div>

        </div>

    )

}