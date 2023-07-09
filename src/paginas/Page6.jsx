import { useContext, useEffect, useState } from "react"
import Logo from "../componentes/Logo"
import PageContext from "../context/PageContext.js"
import {Formik, Form, Field} from "formik";
import PropTypes from 'prop-types';
import { BsArrowLeft } from "react-icons/bs";
import { BsCheck2 } from "react-icons/bs";

const Page6 = ({data, updateData}) => {

    const {setEstadoPagina} = useContext(PageContext);

    const onSubmit= () =>{
        console.log("logrado");
        setEstadoPagina("Page7Confirm");
    }

    const [longitud, setLongitud] = useState(0);

    useEffect(()=>{
        console.log("cargando");
//        setLongitud(data.opinion.length);
        setLongitud(data.mejorar.length);
    },[data.mejorar])

    
    const [longitudd, setLongitudd] = useState(0);

    useEffect(()=>{
        console.log("cargando");
//        setLongitud(data.opinion.length);
        setLongitudd(data.experiencia.length);
    },[data.experiencia])


  return (
    <>
        <div className="container">
            <Logo></Logo>
            <div className="form">
                <h1>Con respecto a la universidad...</h1>
                <Formik initialValues={data} onSubmit={onSubmit}>
                <Form className="datos">
                    <fieldset>
                        <label htmlFor="curso">¿Volverías a tomar un curso con nosotros?</label>
                        <div className="puntuacion">
                        <Field required title="Eligue una " autofocus checked={data.curso=="si"?true:false} value={ "si"} onChange={(e)=> updateData("curso", e.target.value)} type="radio" name="curso" id="si" className="sino"/><label htmlFor="si">Si</label>
                        <Field required title="Eligue una " autofocus checked={data.curso=="no"?true:false} value={ "no"} onChange={(e)=> updateData("curso", e.target.value)} type="radio" name="curso" id="no" className="sino"/><label htmlFor="no">No</label>
                        </div>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="mejorar">¿Cómo podemos mejorar?</label>
                        <Field as="textarea" className="textarea__op" id="mejorar" name="mejorar" placeholder="Cuentanos" autoFocus
                        required disabled={longitud > 2253 ? true : false}   title="Danos tu opinión"
                        value={data.mejorar || ""} onChange={(e)=> updateData("mejorar", e.target.value)}
                        />
                            {longitud}/2,254
                    </fieldset>
                    <fieldset>
                        <label htmlFor="experiencia">Cuentanos mas sobre tu experiencia</label>
                        <Field as="textarea" className="textarea__op" id="experiencia" name="experiencia" placeholder="Cuentanos" autoFocus
                        required disabled={longitud > 2253 ? true : false}   title="Danos tu opinión"
                        value={data.experiencia || ""} onChange={(e)=> updateData("experiencia", e.target.value)}
                        />
                            {longitudd}/2,254
                    </fieldset>
                <div className="botones">
                <button onClick={()=>{
                    setEstadoPagina("Page5");
                }}><p>Atras</p><BsArrowLeft className="icon__left"></BsArrowLeft></button>
                 <button type="submit"><p>Terminar</p><BsCheck2 className="icon__rigth"/></button>
            </div>
                </Form>
                </Formik>
            </div>
        </div>
    </>
  )
}


Page6.propTypes = {
    fullname: PropTypes.string,
    telefono: PropTypes.number,
    data: PropTypes.object,
    updateData: PropTypes.func,
}


export default Page6