import { Link as ChackraLink,Icon,Text, LinkProps as ChakraLinkProps} from "@chakra-ui/react";
import { ElementType } from "react";
import { ActiveLink } from "@/components/ActiveLink";

interface NavLinkProps extends ChakraLinkProps { //esse extends é para poder passar tb as outros propriedades do links sem erro
  icon: ElementType //quando passo o nome do componente igual ali os icones;
  children: string
  href: string
}
export function NavLink({icon,children,href,... rest}: NavLinkProps){ 
 return (
   <ActiveLink href={href} passHref>
     <ChackraLink display="flex" alignItems="center" {...rest}>
       {" "}
       {/*iisso se chama spread */}
       <Icon as={icon} font-size="20" />
       <Text ml="4" fontWeight="medium">
         {children}
       </Text>
     </ChackraLink>
   </ActiveLink>
 )
}