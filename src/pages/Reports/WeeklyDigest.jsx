import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import AllTimeStatsCard from "../../components/Reports/Card/AllTimeStatsCard";
import CalorieGraph from "../../components/Reports/Card/CalorieGraph";
import FoodLoggedCard from "../../components/Reports/Card/FoodLoggedCard";
import MacronutrientGraph from "../../components/Reports/Card/MacronutrientGraph";
import PremiumCard from "../../components/Reports/Card/PremiumCard";
import WeeklyCard from "../../components/Reports/Card/WeeklyCard";
import WeeklyLogStatus from "../../components/Reports/Card/WeeklyLogStatus";
import { ExerciseContext } from "../../Context/ExerciseContext";

const WeeklyDigest = () => {
  const { Exercisedata, setExercisedata } = useContext(ExerciseContext);
  console.log(Exercisedata, "reports");

  const [calories, setCalories] = useState(547);

  useEffect(() => {
    let sum = Exercisedata?.exercise?.reduce(
      (ac, e) => ac + Number(e.calories),
      0
    );
    setCalories(sum);
  }, [Exercisedata]);

  return (
    <Box>
      <Box h="150px" bg="blue" color="white">
        <Flex
          direction={["column", "column", "row"]}
          w="70%"
          m="auto"
          h="100px"
          gap="20px"
          align="center"
        >
          <Box>
            <Text fontSize="25px">October 31 -November 6,2022</Text>
          </Box>
          <Box>
            <Button variant="solid" borderRadius="20px" color="blue">
              View Past Record
            </Button>
          </Box>
        </Flex>
      </Box>
      <Box
        w={["90%", "90%", "70%"]}
        m="auto"
        position="relative"
        top={["0px", "0px", "-70px"]}
      >
        <Flex direction={["column", "column", "row"]} gap="20px">
          <WeeklyCard calories={calories} />
          <CalorieGraph />
        </Flex>
      </Box>
      <Box w={["90%", "90%", "70%"]} m="auto">
        <Flex direction={["column", "column", "row"]} gap="20px">
          <PremiumCard />
          <FoodLoggedCard />
        </Flex>
      </Box>
      <Box>
        <MacronutrientGraph />
      </Box>
      <Box w={["90%", "90%", "70%"]} m="auto">
        <Flex direction={["column", "column", "row"]} gap="20px">
          <AllTimeStatsCard />
          <WeeklyLogStatus />
        </Flex>
      </Box>
    </Box>
  );
};

export default WeeklyDigest;
