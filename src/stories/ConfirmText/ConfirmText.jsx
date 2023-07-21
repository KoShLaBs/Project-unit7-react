import PropTypes from 'prop-types';
import "./ConfirmText.scss";

/**
 * Este es el componente <strong> Confirm Text </strong>
 * el cual se usa en el formulario para confirmar datos y lleva el nombre del field y despues lo que respondio el usuario. <br>
 * Se puede modificar teniendo en cuenta los siguientes <i>parametros</i> descritos en la parte inferior 
 */

const ConfirmText = ({label, op, userData, movil, size}) => {

  return (
    <div>
        <h2 className={`h2 ${movil} h2__${size}`}>{label}</h2>
        <h4 className={`h4 ${movil} h4__${size}`}>{op}{userData}</h4>
    </div>
  )
}

ConfirmText.propTypes = {
  /** Nombre del Field del formulario */
    label: PropTypes.string,
    /** Texto que va antes de la informacion <strong> opcional en algun componente </strong> */
    op: PropTypes.string,
    /** Funcion que lleva los datos que fueron llenados previamente por el usuario */
    userData: PropTypes.func,
     /** Propiedad para saber si esta en un dispositivo movil o en un monitor para variar su posicion */
    movil: PropTypes.bool,
    /** Propiedad para saber la resolucion de la pantalla y asi mismo cambiar su tamaño */
    size: PropTypes.oneOf(["c-big", "cel-pequeño", "cel", "lap-grande", "lap-pequeña", "lap", "monitor", "tablet"]),
}


ConfirmText.defaultProps = {
    label: "Nombre Elegido",
    op: "Opción: ",
    userData: undefined,
    movil: false,
    size: "lap",
}

export default ConfirmText