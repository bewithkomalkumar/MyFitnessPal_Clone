import React, { useContext } from "react";
import {
  Box,
  Button,
  Center,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useToast,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";

const Signup5 = () => {
  const { signup, setSignup } = useContext(AuthContext);
  const navigate = useNavigate();
  const toast = useToast();

  const submitHandler = () => {
    if (signup.height && signup.weight && signup.goalweight) {
      navigate("/signup6");
    } else {
      toast({
        title: "fill all the data",
        description: "",
        status: "error",
        duration: 2000,
        position: "top",
        isClosable: true,
      });
    }
  };
  // get users height and weight details
  return (
    <div>
      <Center height={"100vh"}>
        <Box width={"40%"} height={"fit-content"}>
          <Center>
            <Box
              borderRadius="10"
              boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}
              padding={"50px 60px"}
              alignContent={"center"}
            >
              <Text overflow={"auto"} fontSize={"18px"} fontWeight={"bold"}>
                How tall are you?
              </Text>

              <Flex gap={5}>
                <InputGroup>
                  <Input
                    placeholder="Height (feet)"
                    onChange={(e) =>
                      setSignup({ ...signup, height: e.target.value })
                    }
                  />
                  <InputRightElement children={"ft"} />
                </InputGroup>
                <InputGroup>
                  <Input placeholder="Height (inches)" />
                  <InputRightElement children={"in"} />
                </InputGroup>
              </Flex>

              <Text
                marginTop={10}
                overflow={"auto"}
                fontSize={"18px"}
                fontWeight={"bold"}
              >
                How much do you weight?
              </Text>
              <InputGroup>
                <Input
                  placeholder="Current Weight"
                  onChange={(e) =>
                    setSignup({ ...signup, weight: e.target.value })
                  }
                />
                <InputRightElement children={"kg"} />
              </InputGroup>

              <Text
                marginTop={10}
                overflow={"auto"}
                fontSize={"18px"}
                fontWeight={"bold"}
              >
                What's your goal weight?
              </Text>
              <InputGroup>
                <Input
                  placeholder="Goal Weight"
                  onChange={(e) =>
                    setSignup({ ...signup, goalweight: e.target.value })
                  }
                />
                <InputRightElement children={"kg"} />
              </InputGroup>

              <Flex justifyContent={"space-between"} marginTop={7} gap={5}>
                <Box w={"50%"}>
                  <Link to={"/signup4"}>
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
                  <Button
                    marginBottom="2"
                    colorScheme={"blue"}
                    w={"100%"}
                    onClick={submitHandler}
                  >
                    NEXT
                  </Button>
                </Box>
              </Flex>
            </Box>
          </Center>
        </Box>
      </Center>
    </div>
  );
};

export default Signup5;
