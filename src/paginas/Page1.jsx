import { useContext} from "react";
import Logo from "../stories/Logo/Logo"
import PageContext from "../context/PageContext.js";
import {Formik, Form, Field, ErrorMessage} from "formik";
import PropTypes from 'prop-types';
import Boton from "../stories/Boton/Boton";

const Page1 = ({data, updateData}) => {

    const {setEstadoPagina} = useContext(PageContext);

    const onSubmit= () =>{
        console.log("logrado");
       setEstadoPagina("Page2");
    }   

  return (
    <>
        <div className="container">
            <Logo ></Logo>
            <div className="form">
                <h5>Hola!</h5>
                <h1>Queremos saber mas de ti, ayudanos a completar esta encuesta</h1>
                <Formik initialValues={data}  onSubmit={onSubmit}>
                <Form className="datos">
                    <div className="Sseleccion">
                    <fieldset>
                        <label htmlFor="email">Correo Electronico</label>
                        <Field id="email" name="email" placeholder="example@correo.com" type="email" required 
                        pattern="^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$"
                        title="El correo electronico debe tener la siguiente estructura example@correo.com"
                        value={data.email || ""} onChange={(e)=> updateData("email", e.target.value)} 
                        />
                        <ErrorMessage name="email" component="p" className="error-message"/>
                    </fieldset>
                    {console.log(data)}
                    </div>
                    <Boton label="Empecemos" direction="rigth"></Boton>
                </Form>
                </Formik>
            </div>
        </div>
    </>
  )
}

Page1.propTypes = {
    email: PropTypes.string,
    data: PropTypes.object,
    updateData: PropTypes.func,
}

export default Page1