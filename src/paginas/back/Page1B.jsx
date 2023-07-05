import { useContext,
    //useState
   } from "react";
import Logo from "../../componentes/Logo"
import PageContext from "../../context/PageContext";
import {Formik, Form, Field, ErrorMessage} from "formik";
import { pageOneSchema } from "../../schemas/pageOneSchema";
import PropTypes from 'prop-types';

const Page1B = ({data, updateData}) => {
    const {setEstadoPagina} = useContext(PageContext);

    const onSubmit= () =>{
        console.log("logrado");
        setEstadoPagina("Page2");
    }   

    const initialValues = {
        email: "",
    }


    
  return (
    <>
        <div className="container">
            <Logo></Logo>
            <div className="form">
                <h1>Hola! Queremos saber mas de ti, ayudanos a completar esta encuesta {data.email} </h1>
                <Formik initialValues={initialValues} validationSchema={pageOneSchema} onSubmit={onSubmit}>
                <Form className="datos">
                    <fieldset>
                        <label htmlFor="email">Correo Electronico</label>
                        <Field id="email" name="email" placeholder="example@correo.com" type="email" 
                          value = {data.email} onChange={(e)=> updateData("email", e.target.value)}
                        />
                        <ErrorMessage name="email" component="p" className="error-message"/>
                    </fieldset>
                    <button type="submit">Empecemos</button>
                </Form>
                </Formik>
            </div>
        </div>
    </>
  )
}

Page1B.propTypes = {
    email: PropTypes.string,
    data: PropTypes.object,
    updateData: PropTypes.func,
}

export default Page1B