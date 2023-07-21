import PropTypes from 'prop-types';
import "./Logo.scss";

/**
 * Este es el componente <strong> Logo </strong>
 * el cual lleva la estructura y el diseño del logo principal que se utiliza en toda la página. <br>
 * Se puede modificar teniendo en cuenta los siguientes <i>parametros</i> descritos en la parte inferior 
 */

const Logo = ({size, movil, label}) => {

    const device = movil ? "btn-movil" : "btn-desktop";

    if(size == "c-big" || size == "cel-pequeño" || size == "cel") {
      movil = true
    }else{
     movil = false
    }

    return (
      <div className={`logo ${device} logo__${size} `}>
          <p>{label}</p>
      </div>
    )
  }
  
Logo.propTypes ={
  /** Texto para mostrar en el boton */
    label: PropTypes.string,
    /** Propiedad para saber si esta en un dispositivo movil o en un monitor para variar su posicion */
    movil: PropTypes.bool,
    /** Propiedad para saber la resolucion de la pantalla y asi mismo cambiar su tamaño */
    size: PropTypes.oneOf(["c-big", "cel-pequeño", "cel", "lap-grande", "lap-pequeña", "lap", "monitor", "tablet"]),
}


Logo.defaultProps = {
    label: "Universidad-Distrital",
    movil: false,
    size: "lap",
}

  export default Logo