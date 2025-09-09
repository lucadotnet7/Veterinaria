import { useForm } from "react-hook-form";
import FormError from "../shared/FormError/FormError";
import type { DraftPatientType } from "../../types";
import { usePatientStore } from "../../stores/usePatient.store";

const PatientForm = () => {
  const { addPatient } = usePatientStore();
  const { register, handleSubmit, formState: {errors} } = useForm<DraftPatientType>();

  const registerPatient = (patient: DraftPatientType) => {
    addPatient(patient);
  }    

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
        <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

        <p className="text-lg mt-5 text-center mb-10">
            Añade Pacientes y {''}
            <span className="text-indigo-600 font-bold">Administralos</span>
        </p>

        <form 
            className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
            noValidate
            onSubmit={handleSubmit(registerPatient)}
        >
              <div className="mb-5">
                  <label htmlFor="name" className="text-sm font-bold">
                      Paciente *
                  </label>
                  <input  
                      id="name"
                      className="w-full p-3 border border-gray-100"  
                      type="text" 
                      placeholder="Nombre del Paciente" 
                      {...register('name', {
                        required: 'El nombre del paciente es obligatorio.',
                      })}
                  />
                  {errors.name && <FormError>{errors.name?.message?.toString()}</FormError>}
              </div>

              <div className="mb-5">
                <label htmlFor="caretaker" className="text-sm font-bold">
                    Dueño * 
                </label>
                <input  
                    id="caretaker"
                    className="w-full p-3 border border-gray-100"  
                    type="text" 
                    placeholder="Nombre del Propietario" 
                    {...register('caretaker', {
                        required: 'El dueño del paciente es obligatorio.',
                    })}
                />
                {errors.caretaker && <FormError>{errors.caretaker?.message?.toString()}</FormError>}
              </div>

            <div className="mb-5">
              <label htmlFor="email" className="text-sm font-bold">
                  Email *
              </label>
              <input  
                  id="email"
                  className="w-full p-3 border border-gray-100"  
                  type="email" 
                  placeholder="Email de Registro"
                  {...register("email", {
                    required: "El email del dueño es obligatorio.",
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'El formato del email es inválido.'
                    }
                  })}
              />
              {errors.email && <FormError>{errors.email?.message?.toString()}</FormError>}
            </div>

            <div className="mb-5">
                <label htmlFor="date" className="text-sm font-bold">
                    Fecha alta *
                </label>
                <input  
                    id="date"
                    className="w-full p-3 border border-gray-100"  
                    type="date"
                    {...register('date', {
                        required: 'La fecha de alta es obligatoria.',
                    })}
                />
                {errors.date && <FormError>{errors.date?.message?.toString()}</FormError>}
            </div>
            
            <div className="mb-5">
                <label htmlFor="symptoms" className="text-sm font-bold">
                Síntomas 
                </label>
                <textarea  
                    id="symptoms"
                    className="w-full p-3 border border-gray-100"  
                    placeholder="Síntomas del paciente"
                    {...register('symptoms', {
                        required: 'Los síntomas del paciente son obligatorios.',
                    })}
                />
                {errors.symptoms && <FormError>{errors.symptoms?.message?.toString()}</FormError>}
            </div>

            <input
                type="submit"
                className="bg-indigo-600 w-full p-3 text-white font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
                value='Registrar paciente'
            />
        </form> 
    </div>
  )
};

export default PatientForm;