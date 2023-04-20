import { theme } from '@/styles/theme'
import { ChakraProvider, Flex } from '@chakra-ui/react'
import { Profile } from './Profile'
import { NotificationsNav } from './NotificationsNav'
import { SearchBox } from './SearchBox'
import { Logo } from './Logo'

export function Header() {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Flex
        as="header"
        width="100%"
        maxW={1480}
        h="20"
        marginX="auto"
        mt="4"
        align="center"
        px="6"
      >
        {/*Logo*/}
        <Logo />

        {/*Informações de Procura */}
        <SearchBox />

        <Flex align="center" ml="auto">
          {/* Informações de notificações */}
          <NotificationsNav />

          {/* Informações do Perfil */}
          <Profile />
        </Flex>
      </Flex>
    </ChakraProvider>
  )
}
