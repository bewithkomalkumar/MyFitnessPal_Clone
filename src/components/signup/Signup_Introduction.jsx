import { Box, Button, Center, Text, useToast } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Signup1 = () => {
  useEffect(() => {
  }, []);
  return (
    <>
      <Center height={"100vh"}>
        <Box width={"35%"} height={"fit-content"}>
          <Center>
            <Box
              borderRadius="10"
              boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}
              padding={"160px 100px"}
              alignContent={"center"}
              textAlign={"center"}
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
