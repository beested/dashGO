import { Input } from '@/components/Form/Input'
import { theme } from '../styles/theme'
import { Button, ChakraProvider, Flex, Stack } from '@chakra-ui/react'

export default function Home() {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Flex w="100vw" h="100vh" align="center" justify="center">
        <Flex
          as="form"
          width="100%"
          maxWidth={360}
          bg="gray.800"
          p="8"
          borderRadius={8}
          flexDir="column"
        >
          <Stack spacing="4">
            <Input type="email" name="email" label="Email" />
            <Input type="password" name="password" label="Senha" />
          </Stack>

          <Button type="submit" mt="6" colorScheme="pink">
            Entrar
          </Button>
        </Flex>
      </Flex>
    </ChakraProvider>
  )
}
