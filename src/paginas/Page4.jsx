import { useContext } from "react"
import Logo from "../componentes/Logo"
import PageContext from "../context/PageContext.js"

const Page4 = () => {

    const {setEstadoPagina} = useContext(PageContext);

  return (
    <>
        <div className="container">
            <Logo></Logo>
            <div className="form">
                <h1>Con respecto a la explicación...</h1>
                <h3>Siendo uno (1) una puntuación baja y cinco (5) una puntuación alta</h3>
                <form >
                    <fieldset>
                        <label htmlFor="explicacion">¿Qué tal fue la explicación del curso?</label>
                        <div className="puntuacion">
                        <input type="radio" name="explicacion" id="1ex" value="1"/><label htmlFor="1ex">1</label>
                        <input type="radio" name="explicacion" id="2ex" value="2"/><label htmlFor="2ex">2</label>
                        <input type="radio" name="explicacion" id="3ex" value="3"/><label htmlFor="3ex">3</label>
                        <input type="radio" name="explicacion" id="4ex" value="4"/><label htmlFor="4ex">4</label>
                        <input type="radio" name="explicacion" id="5ex" value="5"/><label htmlFor="5ex">5</label>
                        </div>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="guias">¿Te resultaron claras las guías teoricas del curso?</label>
                        <div className="puntuacion">
                        <input type="radio" name="guias" id="1g" value="1"/><label htmlFor="1g">1</label>
                        <input type="radio" name="guias" id="2g" value="2"/><label htmlFor="2g">2</label>
                        <input type="radio" name="guias" id="3g" value="3"/><label htmlFor="3g">3</label>
                        <input type="radio" name="guias" id="4g" value="4"/><label htmlFor="4g">4</label>
                        <input type="radio" name="guias" id="5g" value="5"/><label htmlFor="5g">5</label>
                        </div>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="ejercicios">¿Te resultaron desafiantes los ejercicios?</label>
                        <div className="puntuacion">
                        <input type="radio" name="ejercicios" id="1ej" value="1"/><label htmlFor="1ej">1</label>
                        <input type="radio" name="ejercicios" id="2ej" value="2"/><label htmlFor="2ej">2</label>
                        <input type="radio" name="ejercicios" id="3ej" value="3"/><label htmlFor="3ej">3</label>
                        <input type="radio" name="ejercicios" id="4ej" value="4"/><label htmlFor="4ej">4</label>
                        <input type="radio" name="ejercicios" id="5ej" value="5"/><label htmlFor="5ej">5</label>
                        </div>
                    </fieldset>
                </form>
                <div className="botones">
                <span onClick={()=>{
                    setEstadoPagina("Page3");
                }}>Atras</span>
                <span onClick={()=>{
                    setEstadoPagina("Page5");
                }}>Siguiente</span>
                </div>
            </div>
        </div>
    </>
  )
}

export default Page4