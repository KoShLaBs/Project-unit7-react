import { useContext } from "react";
import ConfirmText from "../../componentes/ConfirmText"
import Logo from "../../componentes/Logo"
import PageContext from "../../context/PageContext";

import PropTypes from 'prop-types';

const Page7ConfirmData = ({data}) => {
  
  const {setEstadoPagina} = useContext(PageContext);
  
  return (
    <>
           <div className="container">
            <Logo></Logo>
            <div className="form">
              <div className="square">
               <h1>¿Seguro que deseas enviar esta información?</h1>
               <div className="colum">
               <div className="columone">
                    <ConfirmText text={"Correo"}userData={data.email}/>
                    <ConfirmText text={"Nombre completo"}userData={data.fullname}/>
                    <ConfirmText text={"Telefono"}userData={data.tel}/>
                    <ConfirmText text={"Tematica que te gusto"}userData={data.tematica}/>
                    <ConfirmText text={"Tematica a reforzar"}userData={data.reforzar}/>
                    <ConfirmText text={"Explicación"}op={"Puntuación: "}userData={data.explicacion}/>
               </div>
               <div className="columtwo">
                    <ConfirmText text={"Guias teoricas"}op={"Puntuación: "}userData={data.guias}/>
                    <ConfirmText text={"Ejercicios"}op={"Puntuación: "}userData={data.ejercicios}/>
                    <ConfirmText text={"Manejo de la plataforma"}op={"Puntuación: "}userData={data.plataforma}/>
                    <ConfirmText text={"Plataforma para las clases"}op={"Puntuación: "}userData={data.clases}/>
                    <ConfirmText text={"Plataforma para clases"}op={"Puntuación: "}userData={data.archivos}/>
                    <ConfirmText text={"Tomar un curso"}op={"Respuesta: "}userData={data.curso}/>
               </div>
               </div>
               
                <div className="botones">
                <span onClick={()=>{
                  setEstadoPagina("Page6");
                }}>Cancelar</span>
                <span onClick={()=>{
                  setEstadoPagina("Page7Submit");
                }}>Confirmar</span>
                </div>
                </div>
            </div>
        </div>
    </>
  )
}


Page7ConfirmData.propTypes = {
  data: PropTypes.object,
}

export default Page7ConfirmData