import { create } from "zustand";
import { devtools, persist, createJSONStorage } from "zustand/middleware";
import type { DraftPatientType, PatientStateType, PatientType } from "../types";

const createPatient = (patient: DraftPatientType): PatientType => {
    return {...patient, id: crypto.randomUUID()};
}

export const usePatientStore = create<PatientStateType>()(
  devtools(
  persist((set, get) => ({
    patients: [],
    activePatient: null,
    addPatient: (patient: DraftPatientType) => {
        const newPatient = createPatient(patient);

        set((state) => ({
            patients: [...state.patients, newPatient]
        }));
    },
    deletePatient: (patientId: string) => {
        set((state) => ({
            patients: state.patients.filter(patient => patient.id !== patientId)
        }));
    },
    getPatientById: (patientId: string) => {
        set(() => ({
            activePatient: get().patients.find(patient => patient.id === patientId) || null
        }));
    },
    updatePatient: (patientToEdit: DraftPatientType) => {
        const activeId = get().activePatient?.id;

        if (!activeId) return;
        
        set((state) => ({
            patients: state.patients.map(patient => patient.id === activeId ? {id: activeId, ...patientToEdit} : patient),
            activePatient: null,
        }));
    }
}), {
    name: "patient-storage",
    storage: createJSONStorage(() => sessionStorage),
})));
