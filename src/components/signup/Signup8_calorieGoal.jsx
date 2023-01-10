import React from "react";
import { Box, Button, Center, Checkbox, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Signup8 = () => {
  return (
    <div>
      <Center height={"100vh"}>
        <Box width={"40%"} height={"fit-content"}>
          <Center>
            <Box
              borderRadius="10"
              boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}
              padding={"90px 100px"}
              alignContent={"center"}
            >
              <Text
                textAlign={"center"}
                noOfLines={4}
                overflow={"auto"}
                fontSize={"31px"}
                fontWeight={"bold"}
                color="blue"
                marginBottom="10"
              >
                Congratulations!
              </Text>

              <Text textAlign={"center"}>Your daily net calorie goal is:</Text>

              <Text
                fontWeight={"bold"}
                textAlign={"center"}
                mt={5}
                fontSize={35}
              >
                1,970
              </Text>
              <Center>
                <Button>calories</Button>
              </Center>

              <Text textAlign={"center"}>With this plan, you should:</Text>
              <Text textAlign={"center"}>Maintain your current weight</Text>

              <hr />

              <Checkbox>Sign up for emails</Checkbox>
              <Text>
                Get recipes, workouts, and nutrition & fitness tips from
                MyFitnessPal experts. Plus, a first look at new features!
              </Text>

              <Link to="/home">
                <Button colorScheme="blue" marginBottom="2" w={"100%"}>
                  EXPLORE MYFITNESSPAL
                </Button>
              </Link>
            </Box>
          </Center>
        </Box>
      </Center>
    </div>
  );
};

export default Signup8;
