import { Stack } from "@chakra-ui/react";
import { RiDashboardLine, RiContactsLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav (){
 return (
   <Stack spacing="12" align="flex-start">
     <NavSection title="Geral">
       {/*colei os links no nav link e o children importa os links para o NavSection*/}{" "}
       <NavLink icon={RiDashboardLine}>Dashboard</NavLink>
       <NavLink icon={RiContactsLine}>Usuários</NavLink>
     </NavSection>

     <NavSection title="Automação">
       <NavLink icon={RiGitMergeLine}>Automação</NavLink>
       <NavLink icon={RiInputMethodLine}>Formulário</NavLink>
     </NavSection>
   </Stack>
 )
}