import icons from "../../styles/icons.js";
import "./navbar.css"

const Navbar = () => {
    return <div className="navbar">
        <img src={icons.logo} />
        <div>
            <input type="text" id="" />
            <button className="btn btn-blue">Buscar</button>
        </div>

        <div className="dashboard">
            <div>Total de Gastos</div>
            <div>R$ 5.000,00</div>
        </div>
    </div>
}
 
export default Navbar;