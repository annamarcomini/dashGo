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
  Spinner,
} from "@chakra-ui/react"
import { RiAddLine} from "react-icons/ri";
import { Pagination } from "@/components/Form/Pagination";
import Link from "next/link";
import { api } from "@/services/api";
import { useUsers } from "@/services/hooks/usersUsers";

interface User{
name: string;
email: string;
createdAt: string;
id: string
}

export default function UserList() {
 const {data, isLoading, isFetching, error}= useUsers()

 const isWideVersion= useBreakpointValue({
 base:false,
 lg: true,
})

 return (
   <Box>
     <Header />
     <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
       <Sidebar />
       <Box flex="1" borderRadius={8} bg="gray.800" p="8">
         <Flex mb="8" justify="space-between" align="center">
           <Heading size="lg" fontWeight="normal">
             Usuários
             {!isLoading && isFetching && <Spinner size='sm' color='gray.500' ml='4'/>}
           </Heading>

           <Link href="/users/create" passHref>
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
         {isLoading ? ( //if, else, else
           <Flex justify="center">
             <Spinner />
           </Flex>
         ) : error ? (
           <Flex justify="center">
             <Text>Falha ao obter dados dos usuários</Text>
           </Flex>
         ) : (
           <>
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
              
                 {data.map((user: User)=>{
                  
                  return (
                    <Tr key={user.id}>
                      <Td px={["4", "4", "6"]}>
                        <Checkbox />
                      </Td>
                      <Td>
                        <Box>
                          <Text fontWeight="bold">{user.name}</Text>
                          <Text fontSize="small" color="gray.300">{user.email} </Text>
                        </Box>
                      </Td>
                      {isWideVersion && <Td>{user.createdAt}</Td>}
                    </Tr>
                  )
                 })}
               </Tbody>
             </Table>
             <Pagination />
           </>
         )}
       </Box>
     </Flex>
   </Box>
 )
}



