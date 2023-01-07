import React, { useContext } from "react";
import {
  Box,
  Button,
  Center,
  Flex,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import { signupUser } from "../../api";

const Signup7 = () => {
  const toast = useToast();
  const { signup, setSignup } = useContext(AuthContext);
  const navigate = useNavigate();
  console.log(signup);
  const submitHandle = async () => {
    if (signup.username) {
      localStorage.setItem("user", JSON.stringify(signup));

      const user = await signupUser(signup)
        .then((res) => {
          toast({
            title: "Signup Successfull",
            description: "",
            status: "success",
            duration: 2000,
            position: "top",
            isClosable: true,
          });
          navigate("/signup8");
        })
        .catch((e) =>
          toast({
            title: "signup Failed",
            description: "please signup again",
            status: "error",
            duration: 2000,
            position: "top",
            isClosable: true,
          })
        );
      console.log(user);
    } else {
      toast({
        title: "please Add Username",
        description: "",
        status: "error",
        duration: 2000,
        position: "top",
        isClosable: true,
      });
    }
  };

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
              <Text
                textAlign={"center"}
                overflow={"auto"}
                fontSize={"20px"}
                fontWeight={"bold"}
              >
                Create a username.
              </Text>

              <Input
                required
                marginTop={10}
                placeholder="Create a username"
                onChange={(e) =>
                  setSignup({ ...signup, username: e.target.value })
                }
              />

              <Flex marginTop={7} gap={5}>
                <Link to="/signup6">
                  <Button
                    colorScheme="teal"
                    variant="outline"
                    marginBottom="2"
                    w={"100%"}
                  >
                    BACK
                  </Button>
                </Link>

                <Button
                  onClick={submitHandle}
                  marginBottom="2"
                  colorScheme={"blue"}
                  w={"100%"}
                >
                  NEXT
                </Button>
              </Flex>
            </Box>
          </Center>
        </Box>
      </Center>
    </div>
  );
};

export default Signup7;
