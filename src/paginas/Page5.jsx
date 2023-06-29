import { useContext } from "react"
import Logo from "../componentes/Logo"
import PageContext from "../context/PageContext.js"

const Page5 = () => {

    const {setEstadoPagina} = useContext(PageContext);

  return (
    <>
        <div className="container">
            <Logo></Logo>
            <div className="form">
                <h1>Con respecto a la plataforma...</h1>
                <h3>Siendo uno (1) una puntuación baja y cinco (5) una puntuación alta</h3>
                <form>
                    <fieldset>
                        <label htmlFor="plataforma">¿Te parecio facil de manejar la plataforma?</label>
                        <div className="puntuacion">
                        <input type="radio" name="plataforma" id="1p" value="1"/><label htmlFor="1p">1</label>
                        <input type="radio" name="plataforma" id="2p" value="2"/><label htmlFor="2p">2</label>
                        <input type="radio" name="plataforma" id="3p" value="3"/><label htmlFor="3p">3</label>
                        <input type="radio" name="plataforma" id="4p" value="4"/><label htmlFor="4p">4</label>
                        <input type="radio" name="plataforma" id="5p" value="5"/><label htmlFor="5p">5</label>
                        </div>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="clases">La plataforma para tomar las clases, ¿te parecio buena?</label>
                        <div className="puntuacion">
                        <input type="radio" name="clases" id="1c" value="1"/><label htmlFor="1c">1</label>
                        <input type="radio" name="clases" id="2c" value="2"/><label htmlFor="2c">2</label>
                        <input type="radio" name="clases" id="3c" value="3"/><label htmlFor="3c">3</label>
                        <input type="radio" name="clases" id="4c" value="4"/><label htmlFor="4c">4</label>
                        <input type="radio" name="clases" id="5c" value="5"/><label htmlFor="5c">5</label>
                        </div>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="archivos">A la hora de subir los archivos a la plataforma, ¿fue facil?</label>
                        <div className="puntuacion">
                        <input type="radio" name="archivos" id="1a" value="1"/><label htmlFor="1a">1</label>
                        <input type="radio" name="archivos" id="2a" value="2"/><label htmlFor="2a">2</label>
                        <input type="radio" name="archivos" id="3a" value="3"/><label htmlFor="3a">3</label>
                        <input type="radio" name="archivos" id="4a" value="4"/><label htmlFor="4a">4</label>
                        <input type="radio" name="archivos" id="5a" value="5"/><label htmlFor="5a">5</label>
                        </div>
                    </fieldset>
                </form>
                <div className="botones">
                <span onClick={()=>{
                    setEstadoPagina("Page4");
                }}>Atras</span>
                <span onClick={()=>{
                    setEstadoPagina("Page6");
                }}>Siguiente</span>
                </div>
            </div>
        </div>
    </>
  )
}

export default Page5