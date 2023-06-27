import Logo from "../componentes/Logo"

const Page6 = () => {
  return (
    <>
        <div>
            <Logo></Logo>
            <div className="form">
                <h1>Con respecto a la universidad...</h1>
                <form>
                    <fieldset>
                        <label htmlFor="curso">¿Volverías a tomar un curso con nosotros?</label>
                        <input type="radio" name="curso" id="curso" />Si
                        <input type="radio" name="curso" id="curso" />No
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
                <span>Atras</span>
                <span>Siguiente</span>
            </div>
        </div>
    </>
  )
}

export default Page6