import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import { SidebarDrawerProvider } from "@/components/contexts/SidebarDrawerContext";
import { makeServer } from "@/services/mirage";
import { QueryClientProvider } from "react-query";
import { QueryClient } from "react-query";
import {ReactQueryDevtools} from 'react-query/devtools'

if (process.env.NODE_ENV === 'development'){ //verifica se o ambiente q roda a aplicação é o de desenvolvimento
makeServer();
}
const queryClient= new QueryClient()

function MyApp({Component, pageProps}: AppProps) {
 return (
   <QueryClientProvider client={queryClient}>
     <ChakraProvider theme={theme}>
       <SidebarDrawerProvider>
         <Component {...pageProps} />
       </SidebarDrawerProvider>
     </ChakraProvider>
     <ReactQueryDevtools/>
   </QueryClientProvider>
 )}

export default MyApp