import { useContext } from "react";
import ConfirmText from "../../stories/ConfirmText/ConfirmText"
import Logo from "../stories/Logo/Logo"
import PageContext from "../../context/PageContext";
import PropTypes from 'prop-types';
import Boton from "../../stories/Boton/Boton";

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
                    <ConfirmText label={"Correo"}userData={data.email}/>
                    <ConfirmText label={"Nombre completo"}userData={data.fullname}/>
                    <ConfirmText label={"Telefono"}userData={data.tel}/>
                    <ConfirmText label={"Tematica que te gusto"}userData={data.tematica}/>
                    <ConfirmText label={"Tematica a reforzar"}userData={data.reforzar}/>
                    <ConfirmText label={"Explicación"}op={"Puntuación: "}userData={data.explicacion}/>
               </div>
               <div className="columtwo">
                    <ConfirmText label={"Guias teoricas"}op={"Puntuación: "}userData={data.guias}/>
                    <ConfirmText label={"Ejercicios"}op={"Puntuación: "}userData={data.ejercicios}/>
                    <ConfirmText label={"Manejo de la plataforma"}op={"Puntuación: "}userData={data.plataforma}/>
                    <ConfirmText label={"Plataforma para las clases"}op={"Puntuación: "}userData={data.clases}/>
                    <ConfirmText label={"Plataforma para clases"}op={"Puntuación: "}userData={data.archivos}/>
                    <ConfirmText label={"Tomar un curso"}op={"Respuesta: "}userData={data.curso}/>
               </div>
               </div>
               
                <div className="botones">
                <Boton label="Cancelar" direction="cancel" Onclick={()=>{
                    setEstadoPagina("Page6");
                }}></Boton>
                <Boton label="Confirmar" direction="check" Onclick={()=>{
                    setEstadoPagina("Page7Submit");
                }}></Boton>
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