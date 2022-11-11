// @ts-check
import { defineStore } from 'pinia'
import { LoginPayload, RegisterPayload, User } from '@/interfaces'
import { LoginUser, LogoutUser, RegisterUser } from '@/functions/Auth'



interface State {
  user: User | null
}

const lastState = localStorage.getItem('userState') ? JSON.parse(localStorage.getItem('userState') || '') : null

export const useUserStore = defineStore({
  id: 'user',

  state: (): State => ({
    user: lastState && lastState.user,
  }),

  getters: {
    isLoggedIn: (state) => !!state.user,
  },

  actions: {

    async login(email: string, password: string) {
    
      const LoginPayload : LoginPayload = {
        email,
        password
      }
      const data = await LoginUser(LoginPayload)

      if (!data || !data.user) {
        window.$message.error('Merci de verifier vos informations.')
        return
      }

      return  this.user =  { ...data?.user }

    },

   

  

    async logout() {

      const logoutResponse = await LogoutUser(this.user?.uid);

      if(!logoutResponse)
      {
        window.$message.error('Une erreur est survenue')
        return
      }
      this.user = null
     
    },

    async register(registerPayload : RegisterPayload) {

      const data = await RegisterUser(registerPayload)

      if (!data?.user) {
        window.$message.error('Merci de verifier vos informations.')
        return
      }

      return   this.user = { ...data?.user }

    }
  }

    
})
