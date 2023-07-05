import styles from './styles.module.css'
import { Redes } from './components/redes'
import { Link } from 'react-router-dom'

export function Sobre() {
    return (
        <section >
            <div className={styles.main}>

                <div className={styles.cardHeader}>
                    <img src="https://media.licdn.com/dms/image/D4D03AQFewEXNBK_63w/profile-displayphoto-shrink_200_200/0/1686592063966?e=1694044800&v=beta&t=V3nuvlYEpWV1GXky6eWE6B1hXIHVCCLLYbQ3vEpRRH4" alt="" />
                    <div>
                        <h1>Lucas Henrique Santos Amaral</h1>
                        <p>Full Stack Developer</p>
                    </div>
                </div>

                <div className={styles.cardSobre}>
                    <h1>Sobre</h1>

                    <p>Eu sou um programador Front-End com experiência na criação de aplicativos web.</p>
                    <p>Tenho experiencia e conhecimento em HTML, CSS, Javascript, ReactJs</p>
                    <p>Estou constantemente criando aplicações web responsivas com essas tecnologias</p>
                    <p>e além do desenvolvimento profissional procuro me desenvolver no âmbito pessoal.</p>
                </div>


            </div>
            <div className={styles.redesSociais}>
                <Redes NomeRede="LinkedIn" myUser="lucasamaral-dev" link="https://www.linkedin.com/in/lucasamaral-dev/" imgLink="https://play-lh.googleusercontent.com/kMofEFLjobZy_bCuaiDogzBcUT-dz3BBbOrIEjJ-hqOabjK8ieuevGe6wlTD15QzOqw" />
                <Redes NomeRede="GitHub" myUser="LucasAmaralDev" link="https://github.com/LucasAmaralDev" imgLink="https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU" />
            </div>
            <Link to='/contato'>
                <button className={styles.botaoFlutuante}>Contato</button>
            </Link>
        </section>
    )
}