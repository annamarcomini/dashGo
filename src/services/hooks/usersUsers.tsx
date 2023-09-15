
import { useQuery } from "react-query"
import { api } from "../api"

type User = {
  name: string;
  email: string;
  createdAt: string;
  id: string;
}

export function useUsers(){
  return useQuery("users", async()=>{
   const { data } = await api.get("users")
   const users= data.users.map((user: User) => {
      return {
        id: user.id,
        name: user.name,
        email: user.email,
        createdAt: new Date(user.createdAt).toLocaleDateString("pt-BR", {
          //formatação data
          day: "2-digit",
          month: "long",
          year: "numeric",
        }), //formatar a data 
      }
    })

    return users
   
})}