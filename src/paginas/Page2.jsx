import { useContext } from "react";
import Logo from "../componentes/Logo"
import PageContext from "../context/PageContext.js";

const Page2 = () => {

    const {setEstadoPagina} = useContext(PageContext);

  return (
    <>
        <div className="container">
            <Logo></Logo>
            <div className="form">
                <h1>Un par de datos personales para llenar la base de datos!</h1>
                <form>
                    <fieldset>
                        <label htmlFor="fullname">Nombre Completo</label>
                        <input type="text" id="fullname" placeholder="Nombre y apellidos" autoFocus></input>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="telefono">Número telefonico</label>
                        <input type="tel" id="telefono" placeholder="Numero telefonico" autoFocus></input>
                    </fieldset>
                </form>
                <div className="botones">
                <span onClick={()=>{
                    setEstadoPagina("Page1");
                }}>Atras</span>
                <span onClick={()=>{
                    setEstadoPagina("Page3");
                }}>Siguiente</span>
                </div>
            </div>
        </div>
    </>
  )
}

export default Page2