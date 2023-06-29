import { useContext } from "react";
import Logo from "../componentes/Logo"
import PageContext from "../context/PageContext.js";
//import {Formik, Form, Field, ErrorMessage} from "formik";

const Page1 = () => {

    const {setEstadoPagina} = useContext(PageContext);

  return (
    <>
        <div className="container">
            <Logo></Logo>
            <div className="form">
                <h1>Hola! Queremos saber mas de ti, ayudanos a completar esta encuesta</h1>
                <form>
                    <fieldset>
                        <label htmlFor="email">Correo Electronico</label>
                        <input type="email" id="email" placeholder="example@correo.com" autoFocus></input>
                    </fieldset>
                </form>
                <span onClick={()=>{
                    setEstadoPagina("Page2");
                }}>Empecemos</span>
            </div>
        </div>
    </>
  )
}

export default Page1