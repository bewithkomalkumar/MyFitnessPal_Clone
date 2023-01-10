import React, { useContext } from "react";
import {
  Box,
  Button,
  Center,
  Checkbox,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useToast,
} from "@chakra-ui/react";

import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { GrFacebook } from "react-icons/gr";
import { AuthContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";

const Signup6 = () => {
  const { signup, setSignup } = useContext(AuthContext);
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const navigate = useNavigate();
  const toast = useToast();

  const submitHandler = () => {
    if (signup.email && signup.password) {
      navigate("/signup7");
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
                Almost there! Create your account.
              </Text>

              <Input
                marginTop={10}
                placeholder="Email Address"
                onChange={(e) =>
                  setSignup({ ...signup, email: e.target.value })
                }
              />
              <InputGroup marginTop={2}>
                <Input
                  pr="4.5rem"
                  type={show ? "text" : "password"}
                  placeholder="Enter password"
                  onChange={(e) =>
                    setSignup({ ...signup, password: e.target.value })
                  }
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? <AiFillEyeInvisible /> : <AiFillEye />}
                  </Button>
                </InputRightElement>
              </InputGroup>

              <Checkbox marginTop={5}>Terms & Conditions</Checkbox>
              <Text paddingLeft={7} color={"gray"} fontSize={14}>
                I agree to MyFitnessPal's{" "}
                <span style={{ color: "blue" }}>Terms & Conditions</span> and{" "}
                <span style={{ color: "blue" }}>Privacy Policy</span>.
              </Text>

              <Text
                marginTop={75}
                textAlign={"center"}
                color={"gray"}
                fontSize={14}
              >
                By signing up for MyFitnessPal, you are agreeing to our
                <span style={{ color: "blue" }}> Privacy Policy</span> and{" "}
                <span style={{ color: "blue" }}>Terms</span>.
              </Text>

              <Button
                mt={5}
                marginBottom="2"
                colorScheme={"blue"}
                w={"100%"}
                onClick={() => {
                  submitHandler();
                  console.log(signup);
                }}
              >
                CONTINUE
              </Button>

              <Text textAlign={"center"}>or</Text>

              <Button
                w={"100%"}
                mt={5}
                colorScheme="facebook"
                leftIcon={<GrFacebook />}
              >
                Facebook
              </Button>
            </Box>
          </Center>
        </Box>
      </Center>
    </div>
  );
};

export default Signup6;
