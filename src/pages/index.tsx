import {Flex, Button,Stack} from '@chakra-ui/react'
import {Input} from '../components/Form/Input'
export default function SignIn () {
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
     >
       <Stack spacing="4">
         <Input name="email" type="email" label="E-mail" />
         <Input name="password" type="password" label="Password" />
       </Stack>
       <Button type="submit" mt="6" colorScheme="pink" size="lg">
         Entrar
       </Button>
     </Flex>
   </Flex>
 )
}