import Logo from "../componentes/Logo"

const Page5 = () => {
  return (
    <>
        <div>
            <Logo></Logo>
            <div className="form">
                <h1>Con respecto a la plataforma...</h1>
                <h3>Siendo uno (1) una puntuación baja y cinco (5) una puntuación alta</h3>
                <form>
                    <fieldset>
                        <label htmlFor="plataforma">¿Te parecio facil de manejar la plataforma?</label>
                        <input type="radio" name="plataforma" id="plataforma" value="1"/>1
                        <input type="radio" name="plataforma" id="plataforma" value="2"/>2
                        <input type="radio" name="plataforma" id="plataforma" value="3"/>3
                        <input type="radio" name="plataforma" id="plataforma" value="4"/>4
                        <input type="radio" name="plataforma" id="plataforma" value="5"/>5
                    </fieldset>
                    <fieldset>
                        <label htmlFor="clases">La plataforma para tomar las clases, ¿te parecio buena?</label>
                        <input type="radio" name="clases" id="clases" value="1"/>1
                        <input type="radio" name="clases" id="clases" value="2"/>2
                        <input type="radio" name="clases" id="clases" value="3"/>3
                        <input type="radio" name="clases" id="clases" value="4"/>4
                        <input type="radio" name="clases" id="clases" value="5"/>5
                    </fieldset>
                    <fieldset>
                        <label htmlFor="archivos">A la hora de subir los archivos a la plataforma, ¿fue facil?</label>
                        <input type="radio" name="archivos" id="archivos" value="1"/>1
                        <input type="radio" name="archivos" id="archivos" value="2"/>2
                        <input type="radio" name="archivos" id="archivos" value="3"/>3
                        <input type="radio" name="archivos" id="archivos" value="4"/>4
                        <input type="radio" name="archivos" id="archivos" value="5"/>5
                    </fieldset>
                </form>
                <span>Atras</span>
                <span>Siguiente</span>
            </div>
        </div>
    </>
  )
}

export default Page5