import { useContext, useEffect, useState } from "react"
import Logo from "../componentes/Logo"
import PageContext from "../context/PageContext.js"
import {Formik, Form, Field} from "formik";
import PropTypes from 'prop-types';
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";

const Page3 = ({data, updateData}) => {

    const {setEstadoPagina} = useContext(PageContext);
    
    const onSubmit= () =>{
        console.log("logrado");
       setEstadoPagina("Page4");
    }   

    const [longitud, setLongitud] = useState(0);

    useEffect(()=>{
        console.log("cargando");
//        setLongitud(data.opinion.length);
        setLongitud(data.opinion.length);
    },[data.opinion])

  return (
    <>
        <div className="container">
            <Logo></Logo>
            <div className="form">
                <h1>Con respecto al curso tomado...</h1>
                <Formik initialValues={data} onSubmit={onSubmit}>
                <Form className="datos">
                        <div className="seleccion">

                    <fieldset>
                        <label htmlFor="tematica">¿Qué tematica te gustó más?</label>
                        
                        <Field as="select" id="tematica" name="tematica" autoFocus
                        required title="Eligue una "
                        value={data.tematica || ""} onChange={(e)=> updateData("tematica", e.target.value)}
                        >
                            <option value="">Selecciona la tematica</option>
                            <option value="css">CSS</option>
                            <option value="javascript">JavaScript</option>
                            <option value="typescript">Typescript</option>
                            <option value="git">Git</option>
                            <option value="react">React</option>
                            <option value="storybook">Storybook</option>
                            <option value="npm">NPM Deploy</option>
                            <option value="angular">Angular</option>
                        </Field>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="reforzar">¿Qué tematica reforzarías?</label>
                        
                        <Field as="select" id="reforzar" name="reforzar" autoFocus
                        required title="Eligue una "
                        value={data.reforzar || ""} onChange={(e)=> updateData("reforzar", e.target.value)}
                        >
                            <option value="">Selecciona la tematica</option>
                            <option value="css">CSS</option>
                            <option value="javascript">JavaScript</option>
                            <option value="typescript">Typescript</option>
                            <option value="git">Git</option>
                            <option value="react">React</option>
                            <option value="storybook">Storybook</option>
                            <option value="npm">NPM Deploy</option>
                            <option value="angular">Angular</option>
                        </Field>
                    </fieldset>
                        </div>
                    <fieldset>
                        <label htmlFor="opinion">Opinión</label>
                        
                        <Field as="textarea" className="textarea" id="opinion" name="opinion" placeholder="Dejanos tu opinión frente al curso, tematicas o algo que desearías contarnos" autoFocus
                        required disabled={longitud > 2253 ? true : false}  title="Danos tu opinión"
                        value={data.opinion || ""} onChange={(e)=> updateData("opinion", e.target.value)}
                        />
                        {longitud}/2,254
                    </fieldset>
                <div className="botones">
                <button onClick={()=>{
                    setEstadoPagina("Page2");
                }}><p>Atras</p><BsArrowLeft className="icon__left"></BsArrowLeft></button>
                <button type="submit"><p>Siguiente</p><BsArrowRight className="icon__rigth"/></button>
                </div>
                </Form>
                </Formik>
            </div>
        </div>
    </>
  )
}


Page3.propTypes = {
    fullname: PropTypes.string,
    telefono: PropTypes.number,
    data: PropTypes.object,
    updateData: PropTypes.func,
}


export default Page3