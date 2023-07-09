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
//import { initialValuesOne } from "./values/initialValuesOne";
import { initialValues } from "./values/initialValues";
import Page7Submit from "./paginas/Page7/Page7Submit";


function App() {
  const [estadoPagina, setEstadoPagina] = useState("Page1");
  const [data, setData] = useState(initialValues);
  const updateData = (key, value) => {
    setData((prev) =>{
      return {...prev, [key]:value};
    });
  };

  // const ajusteSize = document.body.width / window.innerWidth;
  // div.width = ajusteSize;

  return (
    <>
    <PageContext.Provider value={{estadoPagina, setEstadoPagina}}>
      <body>
      {estadoPagina == "Page1" && <Page1 data={data} updateData={updateData}/>}
      {estadoPagina == "Page2" && <Page2 data={data} updateData={updateData}/>}
      {estadoPagina == "Page3" && <Page3 data={data} updateData={updateData}/>}
      {estadoPagina == "Page4" && <Page4 data={data} updateData={updateData}/>}
      {estadoPagina == "Page5" && <Page5 data={data} updateData={updateData}/>}
      {estadoPagina == "Page6" && <Page6 data={data} updateData={updateData}/>}
      {estadoPagina == "Page7Confirm" && <Page7ConfirmData data={data} updateData={updateData}/>}
      {estadoPagina == "Page7Submit" && <Page7Submit data={data} updateData={updateData}/>}

      </body>
    </PageContext.Provider>
    </>
  )
}

export default App
