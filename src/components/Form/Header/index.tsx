import { useSidebarDrawer } from "@/components/contexts/SidebarDrawerContext"
import { Flex, useBreakpointValue, IconButton, Icon } from "@chakra-ui/react"
import { RiMenuLine } from "react-icons/ri"
import { Logo } from "./Logo"
import { NotificationNav } from "./NotificationNav"
import { Profile } from "./Profile"
import { SearchBox } from "./SearchBox"

export function Header() {
 const {onOpen}= useSidebarDrawer()
 const isWideVersion = useBreakpointValue({
   //base é padrão, pra mostrar ou não a foto de perfil 
   base: false,
   lg: true,
 })
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1400} //largura maxima
      h="20" //altura
      mx="auto" //margin horizontal
      mt="4" //margin top
      px="6" //padding horizontal
      align="center"
    >
     {! isWideVersion && (
      <IconButton aria-label='Open navigation'
      icon={<Icon as={RiMenuLine}/> }
      fontSize='24'
      variant='unstyled'
      onClick={onOpen}
      mr='2'
      >

      </IconButton>
     )}
      <Logo />
      {isWideVersion && <SearchBox />}

      <Flex align="center" ml="auto">
        {" "}
        {/*barrinha de separção */}
        <NotificationNav />
        <Profile showProfileData={isWideVersion}/> {/*pra mostrar ou não a foto de perfil */}
      </Flex>
    </Flex>
  )
}
