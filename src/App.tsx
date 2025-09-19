import { ToastContainer } from "react-toastify";
import PatientForm from "./components/PatientForm/PatientForm";
import PatientsList from "./components/PatientsList/PatientsList";

function App() {
  return (
    <>
      <div className="container mx-auto">
        <h1 className="font-black text-5xl text-center md:w-2/3 md:mx-auto">
          Seguimiento de pacientes {''} 
          <span className="text-indigo-700">Veterinaria</span>
        </h1>

        <div className="mt-12 md:flex">
          <PatientForm />
          <PatientsList />
        </div>
      </div>

      <ToastContainer />
    </>
  )
}

export default App
