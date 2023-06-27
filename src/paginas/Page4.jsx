import Logo from "../componentes/Logo"

const Page4 = () => {
  return (
    <>
        <div>
            <Logo></Logo>
            <div className="form">
                <h1>Con respecto a la explicación...</h1>
                <h3>Siendo uno (1) una puntuación baja y cinco (5) una puntuación alta</h3>
                <form>
                    <fieldset>
                        <label htmlFor="explicacion">¿Qué tal fue la explicación del curso?</label>
                        <input type="radio" name="explicacion" id="explicacion" value="1"/>1
                        <input type="radio" name="explicacion" id="explicacion" value="2"/>2
                        <input type="radio" name="explicacion" id="explicacion" value="3"/>3
                        <input type="radio" name="explicacion" id="explicacion" value="4"/>4
                        <input type="radio" name="explicacion" id="explicacion" value="5"/>5
                    </fieldset>
                    <fieldset>
                        <label htmlFor="guias">¿Te resultaron claras las guías teoricas del curso?</label>
                        <input type="radio" name="guias" id="guias" value="1"/>1
                        <input type="radio" name="guias" id="guias" value="2"/>2
                        <input type="radio" name="guias" id="guias" value="3"/>3
                        <input type="radio" name="guias" id="guias" value="4"/>4
                        <input type="radio" name="guias" id="guias" value="5"/>5
                    </fieldset>
                    <fieldset>
                        <label htmlFor="ejercicios">¿Te resultaron desafiantes los ejercicios?</label>
                        <input type="radio" name="ejercicios" id="ejercicios" value="1"/>1
                        <input type="radio" name="ejercicios" id="ejercicios" value="2"/>2
                        <input type="radio" name="ejercicios" id="ejercicios" value="3"/>3
                        <input type="radio" name="ejercicios" id="ejercicios" value="4"/>4
                        <input type="radio" name="ejercicios" id="ejercicios" value="5"/>5
                    </fieldset>
                </form>
                <span>Atras</span>
                <span>Siguiente</span>
            </div>
        </div>
    </>
  )
}

export default Page4