import { Box, Button, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";

const Exports = () => {
  return (
    <Box color="black">
      <Box w="70%" m="auto">
        <Text fontSize="20px" fontWeight="bold">
          Export
        </Text>
        <SimpleGrid columns={[1, 1, 2]} spacing={2} mt="10px">
          <Box>
            <Box m="5px 0">
              <Text fontSize="18px" fontWeight="bold">
                What information will be exported?
              </Text>
              <Text>
                We'll send you the following data: progress history, meal level
                nutrition details, and exercise history.
              </Text>
            </Box>
            <Box m="5px 0">
              <Text fontSize="18px" fontWeight="bold">
                Where will the information be sent?
              </Text>
              <Text>
                You will be emailed a link to download the CSV file. The email
                will be sent to (vg332627@gmail.com)
              </Text>
            </Box>
            <Box m="5px 0">
              <Text fontSize="18px" fontWeight="bold">
                How can I change my email address?
              </Text>
              <Text>
                You can update your email address in <u>Email Settings.</u>
              </Text>
            </Box>
          </Box>

          <Box>
            <Box m="5px 0">
              <Text fontSize="18px" fontWeight="bold">
                Please verify your email
              </Text>
              <Text>
                To protect your privacy, we only export information to verified
                email addresses. Please take a moment to verify your email
                (vg332627@gmail.com).
              </Text>
            </Box>
            <Box m="5px 0">
              <Button variant="solid" bg="blue" color="white" p="2px 20px">
                RESEND VERIFICATION EMAIL
              </Button>
            </Box>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Exports;
