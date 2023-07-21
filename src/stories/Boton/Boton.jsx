import PropTypes from 'prop-types';
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import { BsCheck2 } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import "./Boton.scss";

/**
 * Este es el componente <strong> Boton </strong> <br>
 * Es un botón el cual se usa en los formularios para cambiar de formulario <i> atras o adelante </i>. <br>
 * Se puede modificar teniendo en cuenta los siguientes <i>parametros</i> descritos en la parte inferior 
 */

const Boton = ({label, direction, movil, size, Onclick, icono}) => {

    const block = movil ? "movil" : "desktop";
    
    if(size == "c-big" || size == "cel-pequeño" || size == "cel") {
        movil = true
      }else{
       movil = false
      }

    if(direction == "left" && movil == true){
        icono = <BsArrowLeft className={`icono icon__left icon__${size}`}></BsArrowLeft>
    }
    if(direction == "rigth" && movil == true){
        icono = <BsArrowRight className={`icono icon__rigth icon__${size}`}></BsArrowRight>
    }
    if(direction == "cancel" && movil == true){
        icono = <MdClose className={`icono icon__cancel icon__${size}`}></MdClose>
    }
    if(direction == "check" && movil == true){
        icono = <BsCheck2 className={`icono icon__check icon__${size}`}></BsCheck2>
    }
    
  return (
   
        <button type="submit" className={`${size}`} onClick={Onclick}>
            <p className={`${block}`}>{label}</p>
            {icono}
        </button>
 
  )
}

Boton.propTypes = {
    /** Texto que va dentro del boton */
    label: PropTypes.string,
    /** Propiedad para saber que icono deberia ir de acuerdo a cuatro opciones  */
    direction: PropTypes.oneOf(["left", "rigth", "cancel", "check"]),
       /** Propiedad para saber si esta en un dispositivo movil o en un monitor para variar su posicion */
    movil: PropTypes.bool,
    /** Propiedad para saber la resolucion de la pantalla y asi mismo cambiar su tamaño */
    size: PropTypes.oneOf(["c-big", "cel-pequeño", "cel", "lap-grande", "lap-pequeña", "lap", "monitor", "tablet"]),
    /** Funcion que tiene un onClick y permite cambiar de acuerdo a lo que necesita */
    Onclick: PropTypes.func,
    /** Este es el icono que cambia de acuerdo a lo que se necesita */
    icono: PropTypes.string,
}


Boton.defaultProps = {
    label: "Nombre Elegido",
    direction: "rigth",
    movil: false,
    size: "lap",
    Onclick: undefined,
    icono: "",
}

export default Boton