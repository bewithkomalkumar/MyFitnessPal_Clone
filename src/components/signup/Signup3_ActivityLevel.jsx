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

const Signup3 = () => {
  const { signup, signupHandler, setSignup } = useContext(AuthContext);
  const [value, setValue] = useState("");
  const toast = useToast();

  const submitHandler = () => {
    if (!value) {
      toast({
        title: "Choose your Activity Level",
        description: "",
        status: "error",
        duration: 2000,
        position: "top",
        isClosable: true,
      });
    }
    signupHandler({ key: "daily_activity", data: value });
  };

  return (
    <div>
      <Center height={"100vh"}>
        <Box width={"40%"} height={"fit-content"}>
          <Center>
            <Box
              borderRadius="10"
              boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}
              padding={"50px 70px"}
              alignContent={"center"}
            >
              <Text
                noOfLines={4}
                overflow={"auto"}
                fontSize={"25px"}
                fontWeight={"bold"}
                marginBottom="1"
              >
                What is your baseline activity level?
                
              </Text>
              <Text
                noOfLines={4}
                overflow={"auto"}
                fontSize={"15px"}
                marginBottom="8"
                textAlign={"center"}
              >
                <p>Not including workouts-we count that separately</p>
              </Text>
              
              <VStack spacing={4}>
                <Text
                  _hover={{ border: "1.5px solid black" }}
                  borderRadius={7}
                  border={
                    value === "Not very Active"
                      ? "2px solid blue"
                      : "1.5px solid gray"
                  }
                  color={
                    value === "Not very Active" ? "blue" : "black"
                  }
                  w="100%"
                  textAlign={"left"}
                  padding={"15px 7px"}
                  onClick={(e) => {
                    setSignup({
                      ...signup,
                      daily_activity: e.target.innerText,
                    });
                    setValue(e.target.innerText);
                  }}
                >
                  Not very Active
                </Text>
                <Text
                  _hover={{ border: "1.5px solid black" }}
                  borderRadius={7}
                  border={
                    value === "Lightly Weight Active"
                      ? "2px solid blue"
                      : "1.5px solid gray"
                  }
                  color={
                    value === "Lightly Weight Active" ? "blue" : "black"
                  }
                  w="100%"
                  textAlign={"left"}
                  padding={"15px 7px"}
                  onClick={(e) => {
                    setSignup({
                      ...signup,
                      daily_activity: e.target.innerText,
                    });
                    setValue(e.target.innerText);
                  }}
                >
                  Lightly Weight Active
                </Text>
                <Text
                  _hover={{ border: "1.5px solid black" }}
                  borderRadius={7}
                  border={
                    value === "Active" ? "2px solid blue" : "1.5px solid gray"
                  }
                  color={
                    value === "Active" ? "blue" : "black"
                  }
                  w="100%"
                  textAlign={"left"}
                  padding={"15px 7px"}
                  onClick={(e) => {
                    setSignup({
                      ...signup,
                      daily_activity: e.target.innerText,
                    });
                    setValue(e.target.innerText);
                  }}
                >
                  Active
                </Text>
                <Text
                  _hover={{ border: "1.5px solid black" }}
                  borderRadius={7}
                  border={
                    value === "Very Active"
                      ? "2px solid blue"
                      : "1.5px solid gray"
                  }
                  color={
                    value === "Very Active" ? "blue" : "black"
                  }
                  w="100%"
                  textAlign={"left"}
                  padding={"15px 7px"}
                  onClick={(e) => {
                    setSignup({
                      ...signup,
                      daily_activity: e.target.innerText,
                    });
                    setValue(e.target.innerText);
                  }}
                >
                  Very Active
                </Text>
              </VStack>

              <Flex marginTop={7} gap={5}>
                <Box w={"50%"}>
                  <Link to={"/signup2"}>
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
                  <Link to={value ? "/signup4" : "/signup3"}>
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

export default Signup3;
