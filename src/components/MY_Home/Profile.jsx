import { Box, Button, Center, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

const Profile = () => {
  const username = "aditya"
  return (
    <div>
      <Center mt={10}>
      <Text fontSize={21} fontWeight={"bold"}>{username}'s profile</Text>
      </Center>
      
      <Center mt={10}>
      <Box h={"350px"} width={"fit-content"} bgColor={"#f6f6f6"}>
        <Flex alignItems={"center"} padding={"25px 50px"} gap={10}>
          <Image src='https://www.myfitnesspal.com/_next/image?url=https%3A%2F%2Fd34yn14tavczy0.cloudfront.net%2Fimages%2Fno_photo.png&w=640&q=75' w={275} h={275}></Image>
          <Box>
            <Text fontWeight={"bold"}>{username}</Text>
            <Text>22 years old</Text>
            <Text>Male</Text>
            <Text>Member since January 9, 2023</Text>
            <Button _hover={"#0066ee"} mt={10} bgColor={"#0066ee"} color="white">EDIT PROFILE</Button>
            <br />
            <br />
            <Button _hover={"#0066ee"} bgColor={"#0066ee"} color="white">EDIT PHOTOS</Button>
          </Box>
        </Flex>
      </Box>
      </Center>
    </div>
  )
}

export default Profile