import { Link } from "react-router-dom";

export function ErroLogin(){
    return(
        <div>
            <h1>ErroLogin</h1>

            <Link to="/login">Voltar a pagina de Login</Link>
        </div>
    )
}