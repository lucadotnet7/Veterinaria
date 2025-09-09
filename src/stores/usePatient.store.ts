import { create } from "zustand"
import type { DraftPatientType, PatientStateType, PatientType } from "../types";

const createPatient = (patient: DraftPatientType): PatientType => {
    return {...patient, id: crypto.randomUUID()};
}

export const usePatientStore = create<PatientStateType>((set) => ({
    patients: [],
    addPatient: (patient: DraftPatientType) => {
        const newPatient = createPatient(patient);

        set((state) => ({
            patients: [...state.patients, newPatient]
        }));
    },
}));
