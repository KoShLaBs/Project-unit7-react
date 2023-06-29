import { useState } from "react"
import Page1 from "./paginas/Page1"
import Page4 from "./paginas/Page4"
import Page6 from "./paginas/Page6";
import Page5 from "./paginas/Page5";
import Page3 from "./paginas/Page3";
import Page2 from "./paginas/Page2";
import PageContext from "./context/PageContext.js";
import Page7ConfirmData from "./paginas/Page7/Page7ConfirmData";
import "./style/style.scss";

function App() {
  
  const [estadoPagina, setEstadoPagina] = useState("Page1");

  return (
    <>
    <PageContext.Provider value={{estadoPagina, setEstadoPagina}}>
      <div className="local">
      {estadoPagina == "Page1" && <Page1 />}
      {estadoPagina == "Page2" && <Page2 />}
      {estadoPagina == "Page3" && <Page3 />}
      {estadoPagina == "Page4" && <Page4 />}
      {estadoPagina == "Page5" && <Page5 />}
      {estadoPagina == "Page6" && <Page6 />}
      {estadoPagina == "Page7Confirm" && <Page7ConfirmData />}
      </div>
    </PageContext.Provider>
    </>
  )
}

export default App
