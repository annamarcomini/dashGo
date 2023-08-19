import { Stack } from "@chakra-ui/react";
import { RiDashboardLine, RiContactsLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav (){
 return (
   <Stack spacing="12" align="flex-start">
     <NavSection title="Geral">
       {/*colei os links no nav link e o children importa os links para o NavSection*/}{" "}
       <NavLink icon={RiDashboardLine} href='/dashboard'>Dashboard</NavLink>
       <NavLink icon={RiContactsLine} href='/users'>Usuários</NavLink>
     </NavSection>

     <NavSection title="Automação">
       <NavLink icon={RiGitMergeLine} href='/forms'>Automação</NavLink>
       <NavLink icon={RiInputMethodLine} href='/automation'>Formulário</NavLink>
     </NavSection>
   </Stack>
 )
}