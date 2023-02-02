import Navegacion from "./navegacion"

function Footer() {
    return (
        <footer className="footer">
            <div className="contenedor contenido">
                <Navegacion/>
                <p className="copyright">Hecho por <a href="https://www.instagram.com/lucas_costamagna/" className="redes">Lucas Costamagna</a> {new Date().getFullYear()}</p>
            </div>
        </footer>
    )
}

export default Footer