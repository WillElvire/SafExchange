import { LoginPayload, RegisterPayload } from "@/interfaces"
import { Http } from "@/services"
import { endpoint } from './../constants/index';


// define your API Functions here

const api = new Http();

/** this function is to send OTP to the customer */
export const  SendOtpToUser = async (email: string) => {
    return  api.post(endpoint.authenticate.SEND_OTP, { email })
}
/** this function is to login the customer */
export const LoginUser = async (LoginPayload: LoginPayload) => {
    return  api.post(endpoint.authenticate.LOGIN, {...LoginPayload})
}
/** this function is to create  the customer */
export const RegisterUser = async (registerPayload: RegisterPayload) => {
   return api.post(endpoint.authenticate.REGISTER, {...registerPayload})
}
/** this function is to logout the customer */
export const LogoutUser = async (userId ?: string) => {
    return api.post(endpoint.authenticate.LOGOUT,{userId})
}