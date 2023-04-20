import { Box, Icon, Link, Stack, Text } from '@chakra-ui/react'
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine
} from 'react-icons/ri'
import { NavSection } from './NavSection'
import { NavLink } from './NavLink'

export default function Sidebar() {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        {/* Seção*/}
        <NavSection title="Geral">
          {/* Links */}
          <NavLink icon={RiDashboardLine} href="/dashboard">
            Dashboard
          </NavLink>
          <NavLink icon={RiContactsLine} href="/users">
            Contatos
          </NavLink>
        </NavSection>
        <NavSection title="Automação">
          <NavLink icon={RiInputMethodLine} href="/forms">
            Formularios
          </NavLink>
          <NavLink icon={RiGitMergeLine} href="/automation">
            Automação
          </NavLink>
        </NavSection>
      </Stack>
    </Box>
  )
}
