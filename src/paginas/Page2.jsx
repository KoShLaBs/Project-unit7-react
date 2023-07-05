import { useContext } from "react";
import Logo from "../componentes/Logo"
import PageContext from "../context/PageContext.js";
import {Formik, Form, Field, ErrorMessage} from "formik";
//import { pageTwoSchema } from "../schemas/pageTwoSchema";
import PropTypes from 'prop-types';

const Page2 = ({data, updateData}) => {

    const {setEstadoPagina} = useContext(PageContext);

    const onSubmit= () =>{
        console.log("logrado");
       setEstadoPagina("Page3");
    }   

  return (
    <>
        <div className="container">
            <Logo></Logo>
            <div className="form">
                <h1>Un par de datos personales para llenar la base de datos!</h1>
                <Formik initialValues={data} onSubmit={onSubmit}>
                <Form className="datos">
                    <fieldset>
                        <label htmlFor="fullname">Nombre Completo</label>
                        <Field type="text" id="fullname" name="fullname" 
                        placeholder="Nombre y apellidos" autoFocus 
                        required pattern="^[ÁÉÍÓÚA-Z][a-záéíóú]+(\s+[ÁÉÍÓÚA-Z]?[a-záéíóú]+)*$" title="Dame tu nombre completo"
                        value={data.fullname || ""} onChange={(e)=> updateData("fullname", e.target.value)}
                        />
                        <ErrorMessage name="fullname" component="p" className="error-message"/>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="tel">Número telefonico</label>
                        <Field type="tel" id="tel" name="tel"placeholder="Numero telefonico" 
                        required pattern="^!*([0-9]!*){10,12}$" title="Dame un numero de 10 o 12 digitos sin espacios ni digitos especiales"
                        autoFocus value={data.tel || ""} onChange={(e)=> updateData("tel", e.target.value)}/>
                        <ErrorMessage name="tel" component="p" className="error-message"/>
                    </fieldset>
                <div className="botones">
                <span onClick={()=>{
                    setEstadoPagina("Page1");
                }}>Atras</span>
                <button type="submit">Siguiente</button>
                </div>
                </Form>
                </Formik>
            </div>
        </div>
    </>
  )
}


Page2.propTypes = {
    fullname: PropTypes.string,
    telefono: PropTypes.number,
    data: PropTypes.object,
    updateData: PropTypes.func,
}

export default Page2