import {
  Box,
  Button,
  Flex,
  HStack,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GetExerciseByName } from "../../api";
import CheckedExeRow from "../../components/ExerciseComp/CheckedExeRow";

function AddToDairy() {
  const [search, setSearch] = useState(false);
  const [q, setq] = useState("");
  const data = new Array(10).fill(0);

  async function handleSearch() {
    let data = await GetExerciseByName(q);
    console.log(data.data);
  }

  return (
    <Flex w="60%" m="auto" flexFlow="column" height="500px">
      <Text fontSize="1.5rem " fontWeight="bold" color="#00548f">
        Add To Exercise
      </Text>
      {/* search */}
      <Box>
        <Text>Search our exercise database by name:</Text>
        <Input
          borderRadius="5px"
          border={"1px solid black"}
          borderTop={"2px solid black"}
          borderLeft={"2px solid black"}
          placeholder="search"
          w="50%"
          mr="1rem"
          onChange={(e) => setq(e.target.value)}
        />
        <Button
          onClick={handleSearch}
          colorScheme="green"
          className="reportBtn"
        >
          Search
        </Button>
      </Box>
      {/* checked and after search */}

      {search ? (
        <CheckedExeRow />
      ) : (
        <Box>
          <Box>
            <Text color="#00548f" fontSize="18px" fontWeight="bold">
              Matching exercises:
            </Text>

            <Stack
              direction="row"
              //  border="1px solid red"
              h="250px"
              m="1rem 0"
            >
              <Box
                border="1px solid black"
                w="50%"
                borderRadius="0.1rem"
                overflowY="scroll"
              >
                {data.map((e) => (
                  <Text
                    p="5px"
                    borderBottom="1px solid lightgrey"
                    color="blue.500"
                  >
                    running fsadfkjfhn hfsjdh
                  </Text>
                ))}
              </Box>
              <Stack
                direction="column"
                w="50%"
                // border="1px solid black"
                background="#f6f6f6"
                justifyContent="center"
                alignItems="center"
                boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"
              >
                <Text fontWeight="bold" color="#00548f">
                  Adding:
                </Text>
                <Text fontSize="15px" color="red" fontWeight="semibold">
                  Running 10mph (6min mile):
                </Text>
                {/* how long */}

                <HStack>
                  <Text fontWeight="bold" color="#00548f">
                    How Long:
                  </Text>
                  <Input
                    type="text"
                    w="50px"
                    h="23px"
                    borderRadius="none"
                    borderTop="1px solid black"
                    borderLeft="1px solid black"
                    background="white"
                  />
                </HStack>

                {/* how long */}
                <HStack>
                  <Text fontWeight="bold" color="#00548f">
                    Calories Burned:
                  </Text>
                  <Input
                    type="text"
                    w="50px"
                    h="23px"
                    borderRadius="none"
                    borderTop="1px solid black"
                    borderLeft="1px solid black"
                    background="white"
                  />
                </HStack>
                <Text
                  color="blackAlpha.900"
                  p="0 1rem"
                  fontSize="12px"
                  textAlign="center"
                >
                  <i>
                    {" "}
                    If you know how many calories you burned (e.g. from a
                    machine at the gym), manually enter that value above
                  </i>
                </Text>

                <Box>
                  <Link to="/exercise">
                    <Button colorScheme="green" className="reportBtn">
                      Add Exercise
                    </Button>
                  </Link>
                </Box>
              </Stack>
            </Stack>
          </Box>
          <HStack fontSize="17px" fontWeight="bold" justifyContent="center">
            <Text color="black">Can't find what you're looking for? </Text>
            <Text color="#00548f" _hover={{ color: "orange" }}>
              Add an exercise to the database
            </Text>
          </HStack>
        </Box>
      )}
    </Flex>
  );
}

export default AddToDairy;
