import {
  Box,
  Button,
  Center,
  Flex,
  HStack,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import WeightGraph from "../../components/Reports/Card/WeightGraph";
import { report_select } from "../../components/Reports/selectList";
import { CSVLink } from "react-csv";
import { headers } from "../../components/Reports/headersForExport";
import { useContext } from "react";
import { ExerciseContext } from "../../Context/ExerciseContext";
import { useEffect } from "react";
const Reports = () => {
  const [report, setReport] = useState("");
  const { Exercisedata, setExercisedata } = useContext(ExerciseContext);
  const [calories, setCalories] = useState([]);
  useEffect(() => {
    let arr = Exercisedata?.exercise?.map((e) => e.calories);
    setCalories(arr);
  }, [Exercisedata]);
  console.log(calories, "calores");
  const changeHandler = (e) => {
    setReport(e.target.value);
  };

  const csvLink = {
    filename: "reports.csv",
    headers: headers,
    data: "",
  };

  return (
    <Box>
      <Box w={["100%", "70%", "70%"]} m="auto">
        <Box m="10px 0">
          <Text fontSize={["16px", "18px", "20px"]} fontWeight="bold">
            Charts and Reports
          </Text>
        </Box>
        <hr />
        <Box m="10px 0">
          <Flex justify="space-between" align="center">
            <Box>
              <HStack gap="5px">
                <Text fontSize={["14px", "16px", "18px"]} fontWeight="bold">
                  Choose a report:
                </Text>
                <Select w="300px" h="30px" onChange={changeHandler}>
                  {report_select.map((el) => (
                    <option key={el} value={el}>
                      {el}
                    </option>
                  ))}
                </Select>
              </HStack>
            </Box>
            <Box>
              <CSVLink {...csvLink}>
                <Button variant="solid" colorScheme="green" p="2px 30px">
                  Export
                </Button>
              </CSVLink>
            </Box>
          </Flex>
        </Box>
        <Box m="10px 0">
          <Text fontSize={["14px", "16px", "18px"]} fontWeight="bold">
            Reporting period:
          </Text>
          <HStack ml="20px" spacing="20px">
            <Text fontSize={["12px", "14px", "16px"]}>Last 7 days</Text>
            <Text fontSize={["12px", "14px", "16px"]}>Last 30 days</Text>
            <Text fontSize={["12px", "14px", "16px"]}>Last 90 days</Text>
            <Text fontSize={["12px", "14px", "16px"]}>Last 180 days</Text>
            <Text fontSize={["12px", "14px", "16px"]}>Last year</Text>
          </HStack>
        </Box>
        <WeightGraph calories={calories} datakey={report} />
      </Box>
    </Box>
  );
};

export default Reports;
