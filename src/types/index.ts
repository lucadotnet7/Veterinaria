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
    addPatient: (patient: DraftPatientType) => void;
}