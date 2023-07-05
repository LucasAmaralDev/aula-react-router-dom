import styles from './styles.module.css'
import { Link } from 'react-router-dom'

export function Redes(props){
    return(
        <Link to={props.link} className={styles.linkCard}>
            <h2>{props.NomeRede}</h2>
            <img className={styles.img} src={props.imgLink} alt="" srcset="" />
            <p>{props.myUser}</p>
        </Link>
    )
}