import { Box, Button, Center, Flex, Input, Text } from "@chakra-ui/react";
import React from "react";
import CheckInTable from "./CheckInTable";

const CheckIn = () => {
  return (
    <div>
      <Center mt={10}>
        <Box w={"50%"} h={"250px"}>
          <Text fontWeight={"bold"} fontSize={22} color={"blue"}>
            Check-In
          </Text>
          <hr />
          <Flex alignItems={"center"} mt={5}>
            <Text fontWeight={"bold"}>Enter today's weight: </Text>
            <Input type={"number"} size="xs" w={"50px"} />
            <Text fontWeight={"bold"}>kg</Text>
          </Flex>
          <Text color={"gray"}>Last recorded weight: 69 kg on 11/10/2022</Text>
          <CheckInTable/>
          <Center mt={7}>
        <Button bgColor={"#53a653"} color="white" _hover={"#53a653"}>Save Changes</Button>
        </Center>
        </Box>
      </Center>
    </div>
  );
};

export default CheckIn;
