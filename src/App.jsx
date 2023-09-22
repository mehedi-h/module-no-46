import { Form } from "react-router-dom"
import SimpleForm from "./components/simpleForm/SimpleForm"
import StatefulForm from "./components/StatefulForm/StatefulForm"
import RefForm from "./components/RefForm/RefForm"


function App() {

  return (
    <>
      <div className="text-center">
      <h1 className="text-4xl font-semibold">Vite + React Form</h1>
      {/* <StatefulForm></StatefulForm> */}
      <RefForm></RefForm>
      </div>
    </>
  )
}

export default App
