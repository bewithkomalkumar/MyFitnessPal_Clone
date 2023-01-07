import {
  Box,
  Button,
  Flex,
  HStack,
  Input,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

function Database_calBurn() {
  const data = new Array(10).fill(0);

  return (
    <Flex
      w={{ lg: "80%", md: "80%", sm: "100%", base: "130%" }}
      m=" 2rem auto"
      flexFlow="column"
      height="auto"
      p={"1rem"}
    >
      <Text fontSize="1.5rem " fontWeight="bold" color="#00548f">
        Calories Burned From Exercise
      </Text>
      <hr />
      {/* search */}
      <HStack
        justifyContent={"space-between"}
        flexDir={{ lg: "row", md: "row", sm: "column", base: "column" }}
      >
        <Box w={{ lg: "50%", md: "50%", sm: "80%", base: "100%" }} m="1rem 0">
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
        {/* secound search bar */}
        <Box w={{ lg: "50%", md: "50%", sm: "80%", base: "100%" }}>
          <Text
            color="#00548f"
            fontSize="17px"
            fontWeight="bold"
            m="0 0 0.5rem  0"
          >
            ...or choose an exercise below:
          </Text>
          <Select
            h="30px"
            boxShadow="rgb(42, 43, 44) 1px 1px 2px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset"
            borderRadius="2px"
            placeholder="Select option"
          >
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </Box>
      </HStack>
      {/* matching exercise */}
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
                How Many Calories Did I Burn?
              </Text>
              <Text
                fontSize="15px"
                color="#19791e"
                fontWeight="bold"
                p={"0.5rem 0"}
              >
                Running 10mph (6min mile):
              </Text>
              {/* how long */}

              <HStack>
                <Text fontSize={"12px"} fontWeight="semibold">
                  Your Weight:
                </Text>
                <Input
                  focusBorderColor="none"
                  type="text"
                  w="50px"
                  h="23px"
                  borderRadius="none"
                  borderTop="1px solid black"
                  borderLeft="1px solid black"
                  background="white"
                />
                <Stack spacing={3}>
                  <Select
                    focusBorderColor="none"
                    bg="white"
                    borderTop={"1px solid "}
                    borderLeft={"1px solid "}
                    size="xs"
                  >
                    <option value="option1">Killogram</option>
                    <option value="option2">pounds</option>
                  </Select>
                </Stack>
              </HStack>

              <HStack>
                <Text fontWeight="semibold" fontSize={"12px"}>
                  How long:
                </Text>
                <Input
                  focusBorderColor="none"
                  type="text"
                  w="50px"
                  h="23px"
                  borderRadius="none"
                  borderTop="1px solid black"
                  borderLeft="1px solid black"
                  background="white"
                  placeholder="0"
                />
              </HStack>

              <Box>
                <Text fontWeight={"bold"}>Calories burned: 0</Text>
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
    </Flex>
  );
}

export default Database_calBurn;
