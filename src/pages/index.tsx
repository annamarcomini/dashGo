import {Flex, Button,Stack} from '@chakra-ui/react'
import {useForm} from 'react-hook-form'
import {Input} from '../components/Form/Input'
export default function SignIn () {
  const {register,handleSubmit}= useForm()  
  function handleSignIn(value){ // para lidar com o registro de usuario
   console.log(value)
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
       onSubmit = {handleSubmit(handleSignIn)}
     >
       <Stack spacing="4">
         <Input type="email" label="E-mail" {...register("email")}
         />
         <Input type="password" label="Password" {...register("password")}
         />
       </Stack>
       <Button type="submit" mt="6" colorScheme="pink" size="lg">
         Entrar
       </Button>
     </Flex>
   </Flex>
 )
}