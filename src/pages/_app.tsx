import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import { SidebarDrawerProvider } from "@/components/contexts/SidebarDrawerContext";
import { makeServer } from "@/services/mirage";

if (process.env.NODE_ENV === 'development'){ //verifica se o ambiente q roda a aplicação é o de desenvolvimento
makeServer();
}

function MyApp({Component, pageProps}: AppProps) {
 return (
   <ChakraProvider theme={theme}>
     <SidebarDrawerProvider>
       <Component {...pageProps} />
     </SidebarDrawerProvider>
   </ChakraProvider>
 )}

export default MyApp