import Logo from "../componentes/Logo"

const Page3 = () => {
  return (
    <>
        <div>
            <Logo></Logo>
            <div className="form">
                <h1>Con respecto al curso tomado...</h1>
                <form>
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
                    <fieldset>
                        <label htmlFor="opinion">Opinión</label>
                        <input type="tel" id="opinion" placeholder="Dejanos tu opinión frente al curso, tematicas o algo que desearías contarnos" autoFocus></input>
                    </fieldset>
                </form>
                <span>Atras</span>
                <span>Siguiente</span>
            </div>
        </div>
    </>
  )
}

export default Page3