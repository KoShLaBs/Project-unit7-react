import { useContext,
     //useState
  } from "react";
import Logo from "../componentes/Logo"
import PageContext from "../context/PageContext.js";
import {Formik, Form, Field, ErrorMessage} from "formik";
//import { pageOneSchema } from "../schemas/pageOneSchema";
import PropTypes from 'prop-types';
//import { initialValuesOne } from "../values/initialValuesOne";
    import { BsArrowRight } from "react-icons/bs";

const Page1 = ({data, updateData}) => {

    const {setEstadoPagina} = useContext(PageContext);

    const onSubmit= () =>{
        console.log("logrado");
       setEstadoPagina("Page2");
    }   

    // var inputProps = {
    //             value: data.email,
    //             onChange:(e)=> updateData("email", e.target.value)
    //         };

    //         var inputtProps = {
    //             value: data.email,
    //             className: "comid",
    //         };
    // const value = () => { 

    //     if(pageOneSchema){
               
    //         inputProps; 
    //     }else{
    //         inputtProps;
    //     }
    // } 

    
  return (
    <>
        <div className="container">
            <Logo></Logo>
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
                    </div>
                    <button type="submit"><p>Empecemos</p><BsArrowRight className="icon__rigth"/></button>
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