import Logo from "../componentes/Logo"

const Page2 = () => {
  return (
    <>
        <div>
            <Logo></Logo>
            <div className="form">
                <h1>Un par de datos personales para llenar la base de datos!</h1>
                <form>
                    <fieldset>
                        <label htmlFor="fullname">Nombre Completo</label>
                        <input type="text" id="fullname" placeholder="Nombre y apellidos" autoFocus></input>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="telefono">Número telefonico</label>
                        <input type="tel" id="telefono" placeholder="Numero telefonico" autoFocus></input>
                    </fieldset>
                </form>
                <span>Atras</span>
                <span>Siguiente</span>
            </div>
        </div>
    </>
  )
}

export default Page2