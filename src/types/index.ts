export type PatientType = {
    id: string;
    name: string;
    caretaker: string;
    email: string;
    date: Date;
    symptoms: string;
}

export type DraftPatientType = Omit<PatientType, 'id'>;

export type PatientStateType = {
    patients: PatientType[];
    activePatient: PatientType | null;
    addPatient: (patient: DraftPatientType) => void;
    deletePatient: (patientId: string) => void;
    getPatientById: (patientId: string) => void;
    updatePatient: (patient: DraftPatientType) => void;
}