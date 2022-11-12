import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api.js";

const AuthContext = createContext({})

function AuthProvider({ children }) {
  const [ data, setData ] = useState({ })

  async function signIn({ email, password }) {
    try {
      const response = await api.post("/sessions", { email, password })
      const { user, token } = response.data 
      
      localStorage.setItem("@rocketmoviez:user", JSON.stringify(user))
      localStorage.setItem("@rocketmoviez:token", token)
      
      // api.defaults.headers.authorization = `Bearer ${token}`
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`

      setData({ user, token })

    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert("Não foi possível entrar por algum motivo misterioso!")
      }
    }
  }

  async function logOut() {
    localStorage.removeItem("@rocketmoviez:token")
    localStorage.removeItem("@rocketmoviez:user")
    
    setData({ })
  }
  
  useEffect(() => {
    const token = localStorage.getItem("@rocketmoviez:token")
    const user = localStorage.getItem("@rocketmoviez:user")
    
    if (token && user) {
      // api.defaults.headers.authorization = `Bearer ${token}`
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`

      setData({ 
        user: JSON.parse(user), 
        token 
      })
    }
  }, [])

  return (
    <AuthContext.Provider value={{ signIn, logOut, user: data.user }}>
      { children }
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)
  return context
}

export { AuthProvider, useAuth }
