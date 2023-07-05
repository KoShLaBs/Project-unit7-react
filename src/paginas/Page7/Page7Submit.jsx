import PropTypes from 'prop-types';
import Logo from "../../componentes/Logo"

const Page7Submit = ({data}) => {
  return (
    <>
        <div className="container"> 
            <Logo></Logo>
            <div className="form">
            <h1>Muchas gracias por tomar la encuesta, {data.fullname}</h1>
           </div>
        </div>
    </>
  )
}


Page7Submit.propTypes = {
  data: PropTypes.object,
}

export default Page7Submit