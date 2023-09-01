import {createServer, Factory, Model} from  'miragejs'

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
  
  factories: { 
  user: Factory.extend({
   name(i: number){
   return `User ${i+1}`
   },
   email(){
   return faker.internet.email()
   },
   createdAt(){

   },
  })
  },  //gerar dados em massa

  seeds( server){

  },

  routes(){
   this.namespace = 'api' //padrão para chamar a api- /api/....
   this.timing= 750;

  this.get('/users'); //shortHands mirage, chama a lista completa de usuarios do Model
  this.post('/users') //cria um usuário

  this.namespace = '' //para não atrapalhar as outras rotas de outras apis depois q acaba de voltar as users
  this.passthrough() //para que as outras rotas que não são do mirage passem a diante 
  }
 })

 return server;
}