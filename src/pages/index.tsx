import {Flex, Button,Stack} from '@chakra-ui/react'
import { useForm, SubmitHandler } from "react-hook-form"
import {Input} from '../components/Form/Input'

type SignInFormValue={
email: string;
password: string;
}

export default function SignIn () {

  const { register, handleSubmit, formState } = useForm<SignInFormValue>()  

  const handleSignIn: SubmitHandler<SignInFormValue> = async (value, event)=> { // para lidar com o registro de usuario
    await new Promise(resolve => setTimeout(resolve, 2000) ) //fica status carregando no botão
   console.log(value) 
  }

  const handleInputError = () => {
    return formState.errors.email?.message || "" // Ajuste de acordo com a estrutura do objeto de erro
  }
  const handleInputErrorPassword = () => {
    return formState.errors.password?.message || "" // Ajuste de acordo com a estrutura do objeto de erro
  }

 return (
   <Flex w="100vw" h="100vh" align="center" justify="center">
     <Flex
       as="form" //formulario
       width="100%"
       maxWidth={360}
       bg="gray.800" //background
       p="8" //padding
       borderRadius={8}
       flexDir="column" //para colocar os dois inputs embaixo um do outro
       onSubmit={handleSubmit(handleSignIn)}
     >
       <Stack spacing="4">
         <Input
           type="email"
           label="E-mail"
           error={handleInputError()}
           {...register("email", { required: "email obrigatório" })} //aqui é para não deixar logar sem obrigatoriamente preencher os campos
         />
         <Input
           type="password"
           label="Password"
           error={handleInputErrorPassword()}
           {...register("password", { required: "password obrigatória" })}
         />
       </Stack>
       <Button
         type="submit"
         mt="6"
         colorScheme="pink"
         size="lg"
         isLoading={formState.isSubmitting} //está carregando ve o estado do botão se está enviando dados
       >
         Entrar
       </Button>
     </Flex>
   </Flex>
 )
}