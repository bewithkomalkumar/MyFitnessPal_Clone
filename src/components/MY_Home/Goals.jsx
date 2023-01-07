import React from "react";
import { Box, Center, Flex, Text } from "@chakra-ui/react";
import { AiFillLock } from "react-icons/ai";

const Daily_Nutrition_Goals = [
  { name: "Calories", value: 2710 },
  { name: "Carbohydrates", value: "50%" },
  { name: "Fat", value: "30%" },
  { name: "Protein", value: "20%" },
];

const Calories_Meal = ["Breakfast", "Lunch", "Dinner", "Snacks"];

const fitness = [
  { name: "Calories Burned / Week", value: "0 Calories" },
  { name: "Workouts / Week", value: "0 workouts" },
  { name: "Minutes/Workout", value: 0 },
];

const micronutrients = [
  { name: "Saturated Fat", value: "30 g" },
  { name: "Polyunsaturated Fat", value: "0 g" },
  { name: "Monounsaturated Fat", value: "0 g" },
  { name: "Trans Fat", value: "0 g" },
  { name: "Cholesterol", value: "300 mg" },
  { name: "Sodium", value: "2300 mg" },
  { name: "Potassium", value: "3500 mg" },
  { name: "Fiber", value: "38 g" },
  { name: "Sugar", value: "102 g" },
];

const Goals = () => {
  return (
    <div>
      <Center>
        <Box mb={10} w={"50%"}>
          <Text mt={10} fontWeight={"bold"} fontSize={25}>
            Your Fitness Goals
          </Text>
          <Flex mb={2} mt={7} justifyContent={"space-between"}>
            <Text fontWeight={"bold"} fontSize={18}>
              Daily Nutrition Goals
            </Text>
            <Text fontWeight={"bold"} fontSize={18} color="blue">
              EDIT
            </Text>
          </Flex>
          {/* table  */}
          {Daily_Nutrition_Goals.map((el) => (
            <Box bgColor={"#f6f6f6"} border={"0.5px solid gray"} w={"100%"}>
              <Flex padding={"7px 7px"} justifyContent={"space-between"}>
                <Text>{el.name}</Text>
                <Text>{el.value}</Text>
              </Flex>
            </Box>
          ))}

          {/* Calories by Meal  */}
          <Flex mb={2} mt={7} justifyContent={"space-between"}>
            <Text fontWeight={"bold"} fontSize={18}>
              Calories by Meal
            </Text>
            <Text fontWeight={"bold"} fontSize={18} color="blue">
              EDIT
            </Text>
          </Flex>
          {/* table  */}
          {Calories_Meal.map((el) => (
            <Box bgColor={"#f6f6f6"} border={"0.5px solid gray"} w={"100%"}>
              <Flex padding={"7px 7px"} justifyContent={"space-between"}>
                <Text>{el}</Text>
                <AiFillLock />
              </Flex>
            </Box>
          ))}

          {/* Fitness */}

          <Flex mb={2} mt={7} justifyContent={"space-between"}>
            <Text fontWeight={"bold"} fontSize={18}>
              Fitness
            </Text>
            <Text fontWeight={"bold"} fontSize={18} color="blue">
              EDIT
            </Text>
          </Flex>
          {/* table  */}
          {fitness.map((el) => (
            <Box bgColor={"#f6f6f6"} border={"0.5px solid gray"} w={"100%"}>
              <Flex padding={"7px 7px"} justifyContent={"space-between"}>
                <Text>{el.name}</Text>
                <Text>{el.value}</Text>
              </Flex>
            </Box>
          ))}
        </Box>
      </Center>
    </div>
  );
};

export default Goals;
