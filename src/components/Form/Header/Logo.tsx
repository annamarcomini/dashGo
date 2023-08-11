import { Flex,Text } from "@chakra-ui/react";

export function Logo (){
 return(
  
     <Text fontSize={["2xl","3xl"]} fontWeight="bold" letterSpacing="tight" w="64">
       Dashgo
       <Text as="span" color="pink.500" ml="1">
         .
       </Text>
       {/*span para tirar o display block */}
     </Text>

 )
}