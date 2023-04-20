import { Avatar, Box, Flex, Text } from '@chakra-ui/react'

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Bruno Paim</Text>
        <Text color="gray.300" fontSize="small">
          bruno.paim@windel.com.br
        </Text>
      </Box>
      <Avatar
        size="md"
        name="Bruno Paim"
        src="https://github.com/beested.png"
      />
    </Flex>
  )
}
