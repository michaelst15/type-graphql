export interface initialID {
    ID: string;
    Name: string;
    Password: string;
}

export interface AppContext {
    ID?: string;
    payload?: initialID;
}
