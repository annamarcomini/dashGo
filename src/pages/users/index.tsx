import { Header } from "../../components/Form/Header";
import { Sidebar } from "@/components/Form/Sidebar";
import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Table,
  Th,
  Thead,
  Tr,
  Checkbox,
  Td,
  Tbody,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react"
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Pagination } from "@/components/Form/Pagination";
import Link from "next/link";
import { useEffect } from "react";



export default function UserList() {
 const isWideVersion= useBreakpointValue({
 base:false,
 lg: true,
})

useEffect(()=> {
fetch("http://localhost:3001/api/users")
.then(response => response.json())
.then(data=> console.log(data))
}, []) 

 return (
   <Box>
     <Header />
     <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
       <Sidebar />
       <Box flex="1" borderRadius={8} bg="gray.800" p="8">
         <Flex mb="8" justify="space-between" align="center">
           <Heading size="lg" fontWeight="normal">
             Usuários
           </Heading>

           <Link href='/users/create' passHref>
             <Button
               as="a"
               size="sm"
               fontSize="sm"
               colorScheme="pink"
               leftIcon={<Icon as={RiAddLine} fontSize="20" />}
             >
               Criar novo
             </Button>
           </Link>
         </Flex>
         <Table colorScheme="whiteAlpha">
           <Thead>
             <Tr>
               <Th px={["4", "4", "6"]} color="gray.300" width="8">
                 <Checkbox colorScheme="pink" />
               </Th>
               <Th>Usuário</Th>
               {isWideVersion && <Th>Data de cadastro</Th>}
             </Tr>
           </Thead>
           <Tbody>
             <Tr>
               <Td px={["4", "4", "6"]}>
                 <Checkbox />
               </Td>
               <Td>
                 <Box>
                   <Text fontWeight="bold">João Vitor</Text>
                   <Text fontSize="small" color="gray.300">
                     Joãovitor.queiroz@hotmail.com
                   </Text>
                 </Box>
               </Td>
               {isWideVersion && <Td>04 de abril 2023</Td>}
             </Tr>
           </Tbody>

           <Tbody>
             <Tr>
               <Td px={["4", "4", "6"]}>
                 <Checkbox />
               </Td>
               <Td>
                 <Box>
                   <Text fontWeight="bold">João Vitor</Text>
                   <Text fontSize="small" color="gray.300">
                     Joãovitor.queiroz@hotmail.com
                   </Text>
                 </Box>
               </Td>
               {isWideVersion && <Td>04 de abril 2023</Td>}
             </Tr>
           </Tbody>
         </Table>

         <Pagination />
       </Box>
     </Flex>
   </Box>
 )
}



