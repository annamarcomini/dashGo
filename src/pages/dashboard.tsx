import { Header } from "../components/Form/Header";
import { Box,Flex, SimpleGrid,Text,theme} from "@chakra-ui/react"
import { Sidebar } from "@/components/Form/Sidebar";
import Chart from 'react-apexcharts'
import dynamic from "next/dynamic"

const DynamicChart = dynamic(() => import("react-apexcharts"), { ssr: false })
const options={
 chart: {
  toolbar:{
   show:false,
  },
  zoom:{
   enabled:false,
  },
  foreColor: theme.colors.gray[500],
 },
 grid:{
  show:false,
 },
 dataLabels:{
  enabled: false,
 },
tooltip:{
 enabled:false,
},
axis:{
type: 'datetime',
axisBorder: {
 color: theme.colors.gray[600],
},
axisTicks:{
 color: theme.colors.gray[600],
},
categories:[
 '2021-03-10T00:00:00.000Z',
 '2021-03-11T00:00:00.000Z',
 '2021-03-12T00:00:00.000Z',
 '2021-03-13T00:00:00.000Z',
],
},
fill: {
 opacity:0.3,
 type: 'gradient',
  gradient:{
   shade:'dark',
   opacityFrom:0.7,
   opacityTo:0.3,
  }
}
}
const series=[{
name:'series1',data:[100,56,120,25]}]

export default function Dashboard ()
{
 return (
   <Flex direction="column" h="100vh">
     <Header />

     <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
       <Sidebar />
       <SimpleGrid
         flex="1"
         gap="4"
         minChildWidth="320px" //para quebrar em linha quando chegar a 320px de espaçamento
         align-itens="flex-start"
       >
         <Box p={["6","8"]} bgColor="gray.800" borderRadius={8} pb="4">
           <Text fontSize="lg" mb="4">
             Inscritos da semana
           </Text>
           <DynamicChart
             options={options}
             series={series}
             type="area"
             height={160}
           />
         </Box>

         <Box p={["6","8"]} bgColor="gray.800" borderRadius={8} pb="4">
           <Text fontSize="lg" mb="4">
             Taxa de abertura
           </Text>
           <DynamicChart
             options={options}
             series={series}
             type="area"
             height={160}
           />
         </Box>
       </SimpleGrid>
     </Flex>
   </Flex>
 )
}