import { Link } from "react-router-dom"
import styles from './styles.module.css'

export function Contato() {
    return (
        <div className={styles.contato}>
            <h1>Entre em contato comigo</h1>
            <Link to="#"
                onClick={(e) => {
                    window.location.href = "mailto:lucashsamaral@gmail.com";
                    e.preventDefault();
                }}>Email</Link>
            <Link to='/'>Voltar ao inicio</Link>
        </div>
    )
}