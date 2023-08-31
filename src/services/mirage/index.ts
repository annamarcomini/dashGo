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
   this.namespace = 'api' //padrão para chamar a api- /api/....
   this.timing= 750;

  this.get('/users'); //shortHands mirage, chama a lista completa de usuarios do Model
  this.post('/users') //cria um usuário

  this.namespace = '' //para não atrapalhar as outras rotas de outras apis depois q acaba de voltar as users
  }
 })

 return server;
}