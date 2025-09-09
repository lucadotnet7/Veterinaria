import { usePatientStore } from "../../stores/usePatient.store"

const PatientsList = () => {
  const { patients } = usePatientStore();

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Listado de Pacientes</h2>
      <div className="mt-7 bg-white shadow-md rounded-lg py-10 px-5 mb-10">
        <ul>
          {patients.map((patient) => (
            <li key={patient.id}>{patient.name}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default PatientsList