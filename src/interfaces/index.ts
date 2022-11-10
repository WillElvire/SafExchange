export interface Cart {
    id: number,
    quantity : number,
}
  
export interface Coin {
  
}

export interface User {
    uid: string | undefined
    email: string
    displayName?: string
    photoURL?: string
}

export interface RegisterPayload {
    name: string,
    email: string, 
    password: string,
    phoneNumber: string | any
}
  

export interface LoginPayload {
    email: string
    password: string
}