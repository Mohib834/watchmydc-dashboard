export interface UserSystemSelection {
    organisationName: string;
    siteName: string;
    dataCenterName:string;
}

export interface RootState{
    userSystemSelection: UserSystemSelection;
}
