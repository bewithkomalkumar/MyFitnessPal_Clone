import { Box, Button, Center, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Label } from "recharts";
import { MyStore } from "../../Redux/MyStore";
import TotalNutrients from "../TotalNutrients/TotalNutrients";
const MyHome = () => {
  const data = useSelector((MyStore) => {
    return MyStore;
  });
  return (
    <>
      <Center m={"10% auto"} ml={{ lg: "0", base: "4rem" }}>
        <Box
          w={{ lg: "auto", md: "80%", sm: "100%" }}
          backgroundColor={"#f6f6f6"}
          p="2rem"
        >
          <Box bgColor={"blue"}>
            <Flex
              padding={2}
              justifyContent={"space-between"}
              alignItems="center"
            >
              <Text color={"white"}>Your Daily Summary</Text>
              <Text color={"white"}>0 DAY STREAK</Text>
            </Flex>
          </Box>

          <Box marginTop={5}>
            <Flex flexDir={{ lg: "row", md: "row", sm: "row", base: "column" }}>
              <Box>
                <Center>
                  <Box w={120} h={120} bgColor={"#e6e6e6"}>
                    <Label for="file-input">
                      <Center>
                        <Text>Upload Photo</Text>
                      </Center>
                    </Label>

                    <input
                      style={{ display: "none" }}
                      id="file-input"
                      type="file"
                    />
                  </Box>
                </Center>

                {/* KG GAINED */}
                <Box as="center">
                  <Text fontSize={20}>0 KG Gained</Text>
                </Box>
              </Box>
              {/* Calories remaining  */}

              <Box padding={"10px 20px"}>
                <Flex gap={20}>
                  <Box>
                    <Text>Calories Remaining</Text>
                    <Text fontWeight={"bold"} color={"#85c400 "} fontSize={31}>
                      1970
                    </Text>
                  </Box>
                  <Box>
                    <Flex
                      gap={5}
                      flexDir={{
                        lg: "row",
                        md: "row",
                        sm: "column",
                        base: "column",
                      }}
                    >
                      <Button bgColor={"white"} border={"1px solid black"}>
                        <Link to="/exercise">Add Exercise</Link>
                      </Button>
                      <Button bgColor={"white"} border={"1px solid black"}>
                        <Link to="/food/dairy">Add Food</Link>
                      </Button>
                    </Flex>
                  </Box>
                </Flex>

                {/* Goal count */}
                <Box mt={5}>
                  <Flex justifyContent={"space-evenly"}>
                    <Box>
                      <Text>2710</Text>
                      <Text>GOAL</Text>
                    </Box>
                    <Box>
                      <Text>0</Text>
                      <Text>FOOD</Text>
                    </Box>
                    <Box>
                      <Text>-</Text>
                    </Box>
                    <Box>
                      <Text>0</Text>
                      <Text>EXERCISE</Text>
                    </Box>
                    <Box>
                      <Text>=</Text>
                    </Box>
                    <Box>
                      <Text>0</Text>
                      <Text>NET</Text>
                    </Box>
                  </Flex>
                </Box>

                {/* <TotalNutrients
                  data={[
                    ...data.Breakfast,
                    ...data.Dinner,
                    ...data.Lunch,
                    ...data.Snacks,
                  ]}
                /> */}
              </Box>
            </Flex>
          </Box>
        </Box>
      </Center>
      {/* <TotalNutrients
        data={[
          ...data.Breakfast,
          ...data.Dinner,
          ...data.Lunch,
          ...data.Snacks,
        ]}
      /> */}
    </>
  );
};

export default MyHome;
