import React from "react";
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Input,
  } from '@chakra-ui/react'

const CheckInTable = () => {
  return (
    <div>
      <TableContainer maxWidth={"100%"} mt={7}>
        <Table variant="simple">
          <Thead color={"white"} bgColor={"#035184"}>
            <Tr >
              <Th color={"white"} >Other Measurements</Th>
              <Th color={"white"} >Last Entry</Th>
              <Th color={"white"}  isNumeric>Today's Entry</Th>
            </Tr>
          </Thead>
          <Tbody bg={"#f6f6f6"}>
            <Tr>
              <Td>Neck</Td>
              <Td>None</Td>
              <Td isNumeric><Input bg={"white"} type={"number"} size="xs" w={"50px"} /></Td>
            </Tr>
            <Tr>
              <Td>Waist</Td>
              <Td>None</Td>
              <Td isNumeric><Input bg={"white"} type={"number"} size="xs" w={"50px"} /></Td>
            </Tr>
            <Tr>
              <Td>Hips</Td>
              <Td>None</Td>
              <Td isNumeric><Input bg={"white"} type={"number"} size="xs" w={"50px"} /></Td>
            </Tr>
          </Tbody>
          
        </Table>
      </TableContainer>
    </div>
  );
};

export default CheckInTable;
