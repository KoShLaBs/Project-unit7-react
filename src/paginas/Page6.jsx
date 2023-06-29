import { useContext } from "react"
import Logo from "../componentes/Logo"
import PageContext from "../context/PageContext.js"

const Page6 = () => {

    const {setEstadoPagina} = useContext(PageContext);

  return (
    <>
        <div className="container">
            <Logo></Logo>
            <div className="form">
                <h1>Con respecto a la universidad...</h1>
                <form>
                    <fieldset>
                        <label htmlFor="curso">¿Volverías a tomar un curso con nosotros?</label>
                        <div className="puntuacionn">
                        <input type="radio" name="curso" id="si" className="sino"/><label htmlFor="si">Si</label>
                        <input type="radio" name="curso" id="no" className="sino"/><label htmlFor="no">No</label>
                        </div>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="mejorar">¿Cómo podemos mejorar?</label>
                        <input type="text" id="mejorar" placeholder="Cuentanos" autoFocus></input>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="experiencia">Cuentanos mas sobre tu experiencia</label>
                        <input type="text" id="experiencia" placeholder="Cuentanos" autoFocus></input>
                    </fieldset>
                </form>
                <div className="botones">
                <span onClick={()=>{
                    setEstadoPagina("Page5");
                }}>Atras</span>
                {/* <span onClick={()=>{
                    setEstadoPagina("Page7Confirm");
                }}>Siguiente</span>
            */}
                 <button type="submit">Terminar</button>
            </div>
            </div>
        </div>
    </>
  )
}

export default Page6