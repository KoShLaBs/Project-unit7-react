import { useContext } from "react"
import Logo from "../componentes/Logo"
import PageContext from "../context/PageContext.js"

const Page3 = () => {

    const {setEstadoPagina} = useContext(PageContext);

  return (
    <>
        <div className="container">
            <Logo></Logo>
            <div className="form">
                <h1>Con respecto al curso tomado...</h1>
                <form>
                        <div className="seleccion">

                    <fieldset>
                        <label htmlFor="tematica">¿Qué tematica te gustó más?</label>
                        <select id="tematica">
                            <option value="">Selecciona la tematica</option>
                            <option value="css">CSS</option>
                            <option value="javascript">JavaScript</option>
                            <option value="typescript">Typescript</option>
                            <option value="git">Git</option>
                            <option value="react">React</option>
                            <option value="storybook">Storybook</option>
                            <option value="npm">NPM Deploy</option>
                            <option value="angular">Angular</option>
                        </select>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="tematica">¿Qué tematica reforzarías?</label>
                        <select id="tematica">
                            <option value="">Selecciona la tematica</option>
                            <option value="css">CSS</option>
                            <option value="javascript">JavaScript</option>
                            <option value="typescript">Typescript</option>
                            <option value="git">Git</option>
                            <option value="react">React</option>
                            <option value="storybook">Storybook</option>
                            <option value="npm">NPM Deploy</option>
                            <option value="angular">Angular</option>
                        </select>
                    </fieldset>
                        </div>
                    <fieldset>
                        <label htmlFor="opinion">Opinión</label>
                        <input type="tel" id="opinion" placeholder="Dejanos tu opinión frente al curso, tematicas o algo que desearías contarnos" autoFocus></input>
                    </fieldset>
                </form>
                <div className="botones">
                <span onClick={()=>{
                    setEstadoPagina("Page2");
                }}>Atras</span>
                <span onClick={()=>{
                    setEstadoPagina("Page4");
                }}>Siguiente</span>
                </div>
            </div>
        </div>
    </>
  )
}

export default Page3