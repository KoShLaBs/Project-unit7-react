import { useContext } from "react"
import Logo from "../stories/Logo/Logo"
import PageContext from "../context/PageContext.js"
import {Formik, Form, Field} from "formik";
import PropTypes from 'prop-types';
import Boton from "../stories/Boton/Boton";

const Page5 = ({data, updateData}) => {

    const {setEstadoPagina} = useContext(PageContext);

    const onSubmit= () =>{
        console.log("logrado");
       setEstadoPagina("Page6");
    }

  return (
    <>
        <div className="container">
            <Logo></Logo>
            <div className="form">
                <h1>Con respecto a la plataforma...</h1>
                <h3>Siendo uno (1) una puntuación baja y cinco (5) una puntuación alta</h3>
                <Formik initialValues={data} onSubmit={onSubmit}>
                <Form className="datos">
                    <fieldset>
                        <label htmlFor="plataforma">¿Te parecio facil de manejar la plataforma?</label>
                        <div className="puntuacion">
                        <Field required title="Eligue una " autofocus checked={data.plataforma==1?true:false} value={ "1"} onChange={(e)=> updateData("plataforma", e.target.value)} type="radio" name="plataforma" id="1p" /><label htmlFor="1p">1</label>
                        <Field required title="Eligue una " autofocus checked={data.plataforma==2?true:false} value={ "2"} onChange={(e)=> updateData("plataforma", e.target.value)} type="radio" name="plataforma" id="2p" /><label htmlFor="2p">2</label>
                        <Field required title="Eligue una " autofocus checked={data.plataforma==3?true:false} value={ "3"} onChange={(e)=> updateData("plataforma", e.target.value)} type="radio" name="plataforma" id="3p" /><label htmlFor="3p">3</label>
                        <Field required title="Eligue una " autofocus checked={data.plataforma==4?true:false} value={ "4"} onChange={(e)=> updateData("plataforma", e.target.value)} type="radio" name="plataforma" id="4p" /><label htmlFor="4p">4</label>
                        <Field required title="Eligue una " autofocus checked={data.plataforma==5?true:false} value={ "5"} onChange={(e)=> updateData("plataforma", e.target.value)} type="radio" name="plataforma" id="5p" /><label htmlFor="5p">5</label>
                        </div>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="clases">La plataforma para tomar las clases, ¿te parecio buena?</label>
                        <div className="puntuacion">
                        <Field required title="Eligue una " autofocus checked={data.clases==1?true:false} value={ "1"} onChange={(e)=> updateData("clases", e.target.value)} type="radio" name="clases" id="1c" /><label htmlFor="1c">1</label>
                        <Field required title="Eligue una " autofocus checked={data.clases==2?true:false} value={ "2"} onChange={(e)=> updateData("clases", e.target.value)} type="radio" name="clases" id="2c" /><label htmlFor="2c">2</label>
                        <Field required title="Eligue una " autofocus checked={data.clases==3?true:false} value={ "3"} onChange={(e)=> updateData("clases", e.target.value)} type="radio" name="clases" id="3c" /><label htmlFor="3c">3</label>
                        <Field required title="Eligue una " autofocus checked={data.clases==4?true:false} value={ "4"} onChange={(e)=> updateData("clases", e.target.value)} type="radio" name="clases" id="4c" /><label htmlFor="4c">4</label>
                        <Field required title="Eligue una " autofocus checked={data.clases==5?true:false} value={ "5"} onChange={(e)=> updateData("clases", e.target.value)} type="radio" name="clases" id="5c" /><label htmlFor="5c">5</label>
                        </div>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="archivos">A la hora de subir los archivos a la plataforma, ¿fue facil?</label>
                        <div className="puntuacion">
                        <Field required title="Eligue una " autofocus checked={data.archivos==1?true:false} value={ "1"} onChange={(e)=> updateData("archivos", e.target.value)} type="radio" name="archivos" id="1a" /><label htmlFor="1a">1</label>
                        <Field required title="Eligue una " autofocus checked={data.archivos==2?true:false} value={ "2"} onChange={(e)=> updateData("archivos", e.target.value)} type="radio" name="archivos" id="2a" /><label htmlFor="2a">2</label>
                        <Field required title="Eligue una " autofocus checked={data.archivos==3?true:false} value={ "3"} onChange={(e)=> updateData("archivos", e.target.value)} type="radio" name="archivos" id="3a" /><label htmlFor="3a">3</label>
                        <Field required title="Eligue una " autofocus checked={data.archivos==4?true:false} value={ "4"} onChange={(e)=> updateData("archivos", e.target.value)} type="radio" name="archivos" id="4a" /><label htmlFor="4a">4</label>
                        <Field required title="Eligue una " autofocus checked={data.archivos==5?true:false} value={ "5"} onChange={(e)=> updateData("archivos", e.target.value)} type="radio" name="archivos" id="5a" /><label htmlFor="5a">5</label>
                        </div>
                    </fieldset>
                <div className="botones">
                <Boton label="Atras" direction="left" Onclick={()=>{
                    setEstadoPagina("Page4");
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


Page5.propTypes = {
    fullname: PropTypes.string,
    telefono: PropTypes.number,
    data: PropTypes.object,
    updateData: PropTypes.func,
}


export default Page5