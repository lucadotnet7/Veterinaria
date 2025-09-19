import { toast } from 'react-toastify';
import { usePatientStore } from '../../stores/usePatient.store';
import type { PatientType } from '../../types'
import PatientDetailItem from '../PatientDetailItem/PatientDetailItem';

const PatientDetail = ({ patient }: { patient: PatientType }) => {
  const { deletePatient, getPatientById } = usePatientStore();

  const handleDelete = () => {
    deletePatient(patient.id);

    toast.error('Paciente eliminado correctamente!', {
        position: "bottom-right",
        autoClose: 3000,
    });
  }

  return (
    <div className='mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl'>
        <PatientDetailItem label="ID" value={patient.id} />
        <PatientDetailItem label="Nombre" value={patient.name} />
        <PatientDetailItem label="Dueño" value={patient.caretaker} />
        <PatientDetailItem label="Correo electrónico" value={patient.email} />
        <PatientDetailItem label="Fecha de alta" value={patient.date.toString()} />
        <PatientDetailItem label="Síntomas" value={patient.symptoms} />

        <div className='flex justify-between gap-3 mt-10 lg:gap-1'>
            <button 
                type="button" 
                className='py-2 px-5 bg-indigo-600 hover:bg-indigo-700 hover:cursor-pointer text-white font-bold uppercase rounded-lg w-[120px]'
                onClick={() => getPatientById(patient.id)}>
                    Editar
            </button>
            
            <button 
                type="button" 
                className='py-2 px-5 bg-red-600 hover:bg-red-700 hover:cursor-pointer text-white font-bold uppercase rounded-lg w-[120px]'
                onClick={handleDelete}>
                    Eliminar
            </button>
        </div>
    </div>
  )
}

export default PatientDetail;