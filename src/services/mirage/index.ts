import {createServer, Model} from  'miragejs'

type User = {
name: string;
email: string;
created_at: string;
};

export function makeServer(){
 const server  = createServer({
  models: {
  user: Model.extend<Partial<User>>({}) //casos que talvez não vai ter obrigatório ter tds os tipo
  },
  routes(){

  }
 })
}