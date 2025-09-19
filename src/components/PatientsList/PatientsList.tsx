import { usePatientStore } from "../../stores/usePatient.store"
import PatientDetail from "../PatientDetail/PatientDetail";

const PatientsList = () => {
  const { patients } = usePatientStore();

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5 max-h-[732px] overflow-auto">
      <h2 className="font-black text-3xl text-center">Listado de Pacientes</h2>
        <ul>
          {patients.map((patient) => (
            <PatientDetail key={patient.id} patient={patient} />
          ))}
        </ul>
    </div>
  )
}

export default PatientsList