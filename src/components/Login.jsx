import { Box, Button, Center, Input, Text, useToast } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { GrFacebook } from "react-icons/gr";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const toast = useToast();

  const onLogin = async () => {
    const data = { email: email, password: password };

    try {
      const res = await axios.post(
        "https://fierce-hen-pajamas.cyclic.app/login",
        data
      );
      console.log(res.data);
      if (res.data.message != "Invalid Credentials") {
        localStorage.setItem("fitUserID", res.data.message.data.id);
        let user = JSON.parse(localStorage.getItem("user"));
        toast({
          title: "Logged In successfully",
          description: `Hey Welcome ${" "}  ${user.username}`,
          status: "success",
          duration: 2000,
          position: "top",
          isClosable: true,
        });

        navigate("/home");
      } else {
        toast({
          title: "Invalid Credentials",
          description: "please try again",
          status: "error",
          duration: 2000,
          position: "top",
          isClosable: true,
        });
      }
    } catch (err) {
      toast({
        title: "Something went wrong",
        description: "please try again",
        status: "error",
        duration: 2000,
        position: "top",
        isClosable: true,
      });
    }
  };
  useEffect(() => {
  }, []);

  return (
    <div>
      <Center height={"100vh"}>
        <Box width={"fit-content"} height={"fit-content"}>
          <Center>
            <Box
              boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}
              padding={"40px 40px"}
              alignContent={"center"}
            >
              <Center>
                <Text fontSize={"20px"} fontWeight={"bold"} marginBottom="5">
                  Member Login
                </Text>
              </Center>
              <Box>
                <Input
                  onChange={(e) => setemail(e.target.value)}
                  marginBottom="2"
                  placeholder="Email Address"
                />
                <Input
                  onChange={(e) => setpassword(e.target.value)}
                  placeholder="Password"
                />

                <Text
                  style={{ cursor: "pointer" }}
                  marginBottom="5"
                  textAlign={"left"}
                  color={"blue"}
                >
                  Forgot Password?
                </Text>
              </Box>
              <Box>
                <Button
                  onClick={onLogin}
                  marginBottom="2"
                  colorScheme={"blue"}
                  w={"100%"}
                >
                  LOG IN
                </Button>
                <Text marginBottom="2" textAlign={"center"}>
                  or
                </Text>
                <Button
                  w={"100%"}
                  colorScheme="facebook"
                  leftIcon={<GrFacebook />}
                >
                  Facebook
                </Button>
              </Box>
            </Box>
          </Center>
          <Text
            color="#A0A0A0"
            my="10px"
            align="center"
            fontSize="md"
            fontWeight={"semibold"}
          >
            Not a member?{" "}
            <Text
              as="span"
              fontSize={"1.2rem"}
              fontWeight="bold"
              style={{ color: "blue", cursor: "pointer" }}
            >
              <Link to={"/signup1"}>Sign Up now</Link>
            </Text>
          </Text>
        </Box>
      </Center>
    </div>
  );
};

export default Login;
