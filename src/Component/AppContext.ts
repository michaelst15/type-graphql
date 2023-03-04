export interface initialID {
    ID: string
    Name: string
    password: string
}

export interface AppContext {
    ID?: string
    payload?: initialID
}
