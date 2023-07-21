import { useContext} from "react"
import Logo from "../stories/Logo/Logo"
import PageContext from "../context/PageContext.js"
import {Formik, Form, Field} from "formik";
import PropTypes from 'prop-types';
import Boton from "../stories/Boton/Boton";

const Page4 = ({data, updateData}) => {

    const {setEstadoPagina} = useContext(PageContext);

    const onSubmit= () =>{
        console.log("logrado");
       setEstadoPagina("Page5");
    }



  return (
    <>
        <div className="container">
            <Logo></Logo>
            <div className="form">
                <h1>Con respecto a la explicación...</h1>
                <h3>Siendo uno (1) una puntuación baja y cinco (5) una puntuación alta</h3>
                <Formik initialValues={data} onSubmit={onSubmit}>
                <Form className="datos">
                    <fieldset>
                        <label htmlFor="explicacion">¿Qué tal fue la explicación del curso?</label>
                        <div className="puntuacion">
                        <Field required title="Eligue una " autofocus checked={data.explicacion==1?true:false}  value={"1"} onChange={(e)=> updateData("explicacion", e.target.value)} type="radio" name="explicacion" id="1ex"/><label htmlFor="1ex">1</label>
                        <Field required title="Eligue una " autofocus checked={data.explicacion==2?true:false}  value={"2"} onChange={(e)=> updateData("explicacion", e.target.value)} type="radio" name="explicacion" id="2ex"/><label htmlFor="2ex">2</label>
                        <Field required title="Eligue una " autofocus checked={data.explicacion==3?true:false}  value={"3"} onChange={(e)=> updateData("explicacion", e.target.value)} type="radio" name="explicacion" id="3ex"/><label htmlFor="3ex">3</label>
                        <Field required title="Eligue una " autofocus checked={data.explicacion==4?true:false}  value={"4"} onChange={(e)=> updateData("explicacion", e.target.value)} type="radio" name="explicacion" id="4ex"/><label htmlFor="4ex">4</label>
                        <Field required title="Eligue una " autofocus checked={data.explicacion==5?true:false}  value={"5"} onChange={(e)=> updateData("explicacion", e.target.value)} type="radio" name="explicacion" id="5ex"/><label htmlFor="5ex">5</label>
                        </div>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="guias">¿Te resultaron claras las guías teoricas del curso?</label>
                        <div className="puntuacion">
                        <Field required title="Eligue una " autofocus checked={data.guias==1?true:false} value={"1"} onChange={(e)=> updateData("guias", e.target.value)} type="radio" name="guias" id="1g"/><label htmlFor="1g">1</label>
                        <Field required title="Eligue una " autofocus checked={data.guias==2?true:false} value={"2"} onChange={(e)=> updateData("guias", e.target.value)} type="radio" name="guias" id="2g"/><label htmlFor="2g">2</label>
                        <Field required title="Eligue una " autofocus checked={data.guias==3?true:false} value={"3"} onChange={(e)=> updateData("guias", e.target.value)} type="radio" name="guias" id="3g"/><label htmlFor="3g">3</label>
                        <Field required title="Eligue una " autofocus checked={data.guias==4?true:false} value={"4"} onChange={(e)=> updateData("guias", e.target.value)} type="radio" name="guias" id="4g"/><label htmlFor="4g">4</label>
                        <Field required title="Eligue una " autofocus checked={data.guias==5?true:false} value={"5"} onChange={(e)=> updateData("guias", e.target.value)} type="radio" name="guias" id="5g"/><label htmlFor="5g">5</label>
                        </div>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="ejercicios">¿Te resultaron desafiantes los ejercicios?</label>
                        <div className="puntuacion">
                        <Field required title="Eligue una " autofocus checked={data.ejercicios==1?true:false} value={ "1"} onChange={(e)=> updateData("ejercicios", e.target.value)} type="radio" name="ejercicios" id="1ej"/><label htmlFor="1ej">1</label>
                        <Field required title="Eligue una " autofocus checked={data.ejercicios==2?true:false} value={ "2"} onChange={(e)=> updateData("ejercicios", e.target.value)} type="radio" name="ejercicios" id="2ej"/><label htmlFor="2ej">2</label>
                        <Field required title="Eligue una " autofocus checked={data.ejercicios==3?true:false} value={ "3"} onChange={(e)=> updateData("ejercicios", e.target.value)} type="radio" name="ejercicios" id="3ej"/><label htmlFor="3ej">3</label>
                        <Field required title="Eligue una " autofocus checked={data.ejercicios==4?true:false} value={ "4"} onChange={(e)=> updateData("ejercicios", e.target.value)} type="radio" name="ejercicios" id="4ej"/><label htmlFor="4ej">4</label>
                        <Field required title="Eligue una " autofocus checked={data.ejercicios==5?true:false} value={ "5"} onChange={(e)=> updateData("ejercicios", e.target.value)} type="radio" name="ejercicios" id="5ej"/><label htmlFor="5ej">5</label>
                        </div>
                    </fieldset>
                <div className="botones">
                <Boton label="Atras" direction="left" Onclick={()=>{
                    setEstadoPagina("Page3");
                }}></Boton>
                <Boton label="Siguiente" direction="rigth"></Boton>
                </div>
                </Form>
                </Formik>
            </div>
        </div>
    </>
  )
}


Page4.propTypes = {
    fullname: PropTypes.string,
    telefono: PropTypes.number,
    data: PropTypes.object,
    updateData: PropTypes.func,
}



export default Page4