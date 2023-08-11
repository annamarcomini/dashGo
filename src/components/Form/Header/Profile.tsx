import { Flex,Box,Text,Avatar } from "@chakra-ui/react";

interface ProfileProps{ //interface 
 showProfileData?: boolean;
}

export function Profile({showProfileData=true} : ProfileProps ){
 return (
   <Flex align="center">
     {showProfileData &&  (<Box mr="4" textAlign="right">
       <Text>João Vitor Queiroz</Text>
       <Text color="gray.300" fontSize="small">
         joaoqueiroz@hotmail.com.br
       </Text>
     </Box>
     )}
     <Avatar size="md" name="João Vitor Queiroz" />
   </Flex>
 )
}