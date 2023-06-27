import Logo from "../componentes/Logo"
//import {Formik, Form, Field, ErrorMessage} from "formik";

const Page1 = () => {
  return (
    <>
        <div>
            <Logo></Logo>
            <div className="form">
                <h1>Hola! Queremos saber mas de ti, ayudanos a completar esta encuesta</h1>
                <form>
                    <fieldset>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="example@correo.com" autoFocus></input>
                    </fieldset>
                </form>
                <span>Comenzar</span>
            </div>
        </div>
    </>
  )
}

export default Page1