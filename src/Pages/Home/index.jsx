import { Link } from "react-router-dom"

import styles from "./styles.module.css"

export function Home(){
    return(
        <div className={styles.home}>
            <h1>Bem vindo</h1>
            <p>Login efetuado com sucesso</p>
            <Link to="/sobre">Ir para o Sobre</Link>
        </div>
    )
}