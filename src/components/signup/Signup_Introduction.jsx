import { Box, Button, Center, Text, useToast } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Signup1 = () => {
  const toast = useToast();
  useEffect(() => {
    toast({
      title: "Welcome to Myfitnesspal",
      description: "Please Continue..",
      status: "success",
      duration: 2000,
      position: "top",
      isClosable: true,
    });
  }, []);
  return (
    <>
      <Center height={"100vh"}>
        <Box width={"40%"} height={"fit-content"}>
          <Center>
            <Box
              borderRadius="10"
              boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}
              padding={"150px 100px"}
              alignContent={"center"}
            >
              <Text
                noOfLines={4}
                overflow={"auto"}
                fontSize={"25px"}
                fontWeight={"bold"}
                marginBottom="10"
              >
                Welcome! Just a few quick questions so we can customize
                MyFitnessPal for you.
              </Text>

              <Box>
                <Link to="/signup2">
                  <Button marginBottom="2" colorScheme={"blue"} w={"100%"}>
                    CONTINUE
                  </Button>
                </Link>
              </Box>
            </Box>
          </Center>
        </Box>
      </Center>
    </>
  );
};

export default Signup1;
