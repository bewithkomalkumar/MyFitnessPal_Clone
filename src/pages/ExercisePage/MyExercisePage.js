import {
  Box,
  Button,
  Flex,
  HStack,
  Input,
  Select,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const data = JSON.parse(localStorage.getItem("PersonalExercise")) || [];
let init = {
  name: "",
  type: "",
  min: "",
  calories: "",
};
function MyExercisePage() {
  const [matchel, setmatchel] = useState({});
  const [edit, setEdit] = useState(matchel);
 
  function handleEdit(e) {
    const { name, value } = e.target;
    setEdit({
      ...edit,
      [name]: value,
    });
  }

  function handleMatch(e) {
    setmatchel(e);
  }

  return (
    <Flex
      w={{ lg: "70%", md: "80%", sm: "95%", base: "100%" }}
      justifyContent={"center"}
      m="5rem auto"
      flexFlow="column"
      pl={{ lg: 0, md: 0, sm: "2rem", base: "2rem" }}
    >
      <HStack mb={"0.3rem"} justifyContent={"space-between"}>
        <Text fontSize="1.3rem " fontWeight="bold" color="#00548f">
          Your Personal Exercises
        </Text>
        <Box>
          <Link to={"/exercise/create-exercise"}>
            <Button
              colorScheme="green"
              className="reportBtn"
              fontSize={"13px"}
              h="30px"
              padding={"0 0.7rem"}
            >
              Create Exercise
            </Button>
          </Link>
        </Box>
      </HStack>
      <hr />

      {/* TExt */}
      <HStack
        justifyContent={"space-between"}
        alignItems=""
        mt="0.5rem"
        flexDir={{ lg: "row", md: "row", sm: "column", base: "column" }}
      >
        <Box w={{ lg: "50%", md: "50%", sm: "90%", base: "90%" }}>
          <Text w="100%" color={"black"} fontSize={"13px"} fontWeight="bold">
            To edit or delete a personal exercise, click on that exercise below.
            Use the search box to narrow your choices.
          </Text>

          {/* search */}
          <Box>
            <Box w="100%" m="0.5rem 0">
              <Text
                color="#00548f"
                fontSize="17px"
                fontWeight="bold"
                m="0 0 0.5rem  0"
              >
                Search our exercise database by name:
              </Text>
              <HStack>
                <Input
                  borderRadius="none"
                  border={"1px solid black"}
                  boxShadow="rgb(42, 43, 44) 1px 1px 2px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset"
                  placeholder="search"
                  focusBorderColor="none"
                  mr="0.3rem"
                  h="35px"
                />
                <Button
                  colorScheme="green"
                  className="reportBtn"
                  h="35px"
                  padding={"0 1.5rem"}
                >
                  Search
                </Button>
              </HStack>
            </Box>
            {/* matching exercise */}

            <Box>
              <Box>
                <Text color="#00548f" fontSize="18px" fontWeight="bold">
                  Matching exercises:
                </Text>

                <Stack direction="row" h="170px" m="1rem 0">
                  <Box
                    border="1px solid lightgrey"
                    w="100%"
                    borderRadius="0.2rem"
                    overflowY="scroll"
                  >
                    {data.map((e) => (
                      <Text
                        p="5px"
                        borderBottom="1px solid lightgrey"
                        color="blue.500"
                        onClick={() => handleMatch(e)}
                      >
                        {e.name}
                      </Text>
                    ))}
                    <Text color="lightgrey">
                      {" "}
                      {data.length
                        ? ""
                        : "Matched Exercises will be displayed here"}
                    </Text>
                  </Box>
                </Stack>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* 2nd div */}
        <VStack
          boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"
          p="1rem"
          rowGap={"1rem"}
          bg="#f6f6f6"
          w={{ lg: "45%", md: "45%", sm: "90%", base: "90%" }}
          borderBottom={"1px solid lightgrey"}
          h={"320px"}
        >
          <Text textAlign={"center"} fontWeight="bold" color="#00548f">
            How Many Calories Did I Burn?
          </Text>
          <HStack justifyContent={"center"}>
            <Text fontWeight="bold" fontSize={"13px"} color="#00548f">
              Name:
            </Text>
            <Input
              placeholder={matchel.name ? `(${matchel.name})` : "exercise name"}
              onChange={(e) => handleEdit(e)}
              name="name"
              focusBorderColor="none"
              type="text"
              w="180px"
              h="23px"
              borderRadius="none"
              borderTop="1px solid black"
              borderLeft="1px solid black"
              background="white"
            />
          </HStack>

          <HStack justifyContent={"center"}>
            <Text fontSize={"13px"} color="#00548f" fontWeight="bold">
              Type:
            </Text>

            <Stack spacing={3}>
              <Select
                onChange={(e) => handleEdit(e)}
                name="type"
                w="150px"
                focusBorderColor="none"
                bg="white"
                borderTop={"1px solid "}
                borderLeft={"1px solid "}
                h="23px"
                borderRadius={"none"}
                fontSize="12px"
              >
                <option value="Cardiovascular">Cardiovascular</option>
                <option value="strength">strength</option>
              </Select>
            </Stack>
          </HStack>
          {/* weight */}
          <HStack justifyContent={"center"}>
            <Text fontWeight="bold" fontSize={"13px"} color="#00548f">
              Your Weight:
            </Text>
            <Input
              focusBorderColor="none"
              type="text"
              w="60px"
              h="23px"
              borderRadius="none"
              borderTop="1px solid black"
              borderLeft="1px solid black"
              background="white"
              placeholder="0"
            />
            <Text>lbs</Text>
          </HStack>

          {/* minutes */}
          <Flex flexFlow={"row"} justify="center" gap="1rem">
            <HStack justifyContent={"center"}>
              <Text fontWeight="bold" fontSize={"13px"} color="#00548f">
                Minutes:
              </Text>
              <Input
                placeholder={matchel.min ? `(${matchel.min})` : "0"}
                onChange={(e) => handleEdit(e)}
                name="min"
                focusBorderColor="none"
                type="text"
                w="60px"
                h="23px"
                borderRadius="none"
                borderTop="1px solid black"
                borderLeft="1px solid black"
                background="white"
              />
            </HStack>
            <HStack justifyContent={"center"}>
              <Text fontWeight="bold" fontSize={"13px"} color="#00548f">
                Calories:
              </Text>
              <Input
                placeholder={matchel.calories ? `(${matchel.calories})` : "0"}
                onChange={(e) => handleEdit(e)}
                name="calories"
                focusBorderColor="none"
                type="text"
                w="60px"
                h="23px"
                borderRadius="none"
                borderTop="1px solid black"
                borderLeft="1px solid black"
                background="white"
              />
            </HStack>
          </Flex>

          {/* buttons */}
          <HStack>
            <Button
              colorScheme="green"
              className="reportBtn"
              fontSize={"13px"}
              h="30px"
              padding={"0 0.7rem"}
            >
              Save
            </Button>
            <Button
              onClick={() => console.log(Date.now())}
              border="1px solid"
              className="reportBtn"
              fontSize={"13px"}
              h="30px"
              padding={"0 0.7rem"}
            >
              Delete
            </Button>
          </HStack>
        </VStack>
      </HStack>
    </Flex>
  );
}

export default MyExercisePage;
