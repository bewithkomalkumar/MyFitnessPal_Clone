import {
  Box,
  Button,
  Center,
  Flex,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";

const Signup2 = () => {
  const { signup, signupHandler, setSignup } = useContext(AuthContext);
  const [value, setValue] = useState("");
  const toast = useToast();

  const submitHandler = () => {
    if (!value) {
      toast({
        title: "Select Weight Goal",
        description: "",
        status: "error",
        duration: 2000,
        position: "top",
        isClosable: true,
      });
    }
    signupHandler({ key: "currweight", data: value });
  };

  return (
    <div>
      <Center height={"100vh"}>
        <Box width={"35%"} height={"fit-content"}>
          <Center>
            <Box
              borderRadius="10"
              boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}
              padding={"90px 100px"}
              alignContent={"center"}
            >
              <Text
                noOfLines={4}
                overflow={"auto"}
                fontSize={"25px"}
                fontWeight={"bold"}
                marginBottom="10"
              >
                What is your weight goal?
              </Text>

              <VStack spacing={4}>
                <Text
                  _hover={{ border: "1.5px solid black" }}
                  borderRadius={7}
                  border={
                    value === "Lose Weight"
                      ? "2px solid blue"
                      : "1.2px solid gray"
                  }
                  color={
                    value === "Lose Weight"
                      ? "blue"
                      : "gray"
                  }
                  w="100%"
                  textAlign={"center"}
                  padding={"15px 0px"}
                  onClick={(e) => {
                    setSignup({ ...signup, goal: e.target.innerText });
                    setValue(e.target.innerText);
                  }}
                >
                  Lose Weight
                </Text>
                <Text
                  _hover={{ border: "1.5px solid black" }}
                  borderRadius={7}
                  border={
                    value === "Maintain Weight"
                      ? "2px solid blue"
                      : "1.2px solid gray"
                  }
                  color={
                    value === "Maintain Weight"
                      ? "blue"
                      : "gray"
                  }
                  w="100%"
                  textAlign={"center"}
                  padding={"15px 0px"}
                  onClick={(e) => {
                    setSignup({ ...signup, goal: e.target.innerText });
                    setValue(e.target.innerText);
                  }}
                >
                  Maintain Weight
                </Text>
                <Text
                  _hover={{ border: "1.5px solid black" }}
                  borderRadius={7}
                  border={
                    value === "Gain Weight"
                      ? "2px solid blue"
                      : "1.2px solid gray"
                  }
                  color={
                    value === "Gain Weight"
                      ? "blue"
                      : "gray"
                  }
                  w="100%"
                  textAlign={"center"}
                  padding={"15px 0px"}
                  onClick={(e) => {
                    setSignup({ ...signup, goal: e.target.innerText });
                    setValue(e.target.innerText);
                  }}
                >
                  Gain Weight
                </Text>
              </VStack>

              <Flex marginTop={7} gap={5}>
                <Box w={"50%"}>
                  <Link to={"/signup1"}>
                    <Button
                      colorScheme="teal"
                      variant="outline"
                      marginBottom="2"
                      w={"100%"}
                    >
                      BACK
                    </Button>
                  </Link>
                </Box>
                <Box w={"50%"}>
                  <Link to={value ? "/signup3" : "/signup2"}>
                    <Button
                      marginBottom="2"
                      colorScheme={"blue"}
                      w={"100%"}
                      onClick={submitHandler}
                    >
                      NEXT
                    </Button>
                  </Link>
                </Box>
              </Flex>
            </Box>
          </Center>
        </Box>
      </Center>
    </div>
  );
};

export default Signup2;
