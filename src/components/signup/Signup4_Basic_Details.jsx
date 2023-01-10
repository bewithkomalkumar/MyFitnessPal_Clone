import React, { useContext } from "react";
import {
  Box,
  Button,
  Center,
  Flex,
  Input,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import Date from "./Date";

const Signup4 = () => {
  const { signup, setSignup } = useContext(AuthContext);
  const navigate = useNavigate();
  const toast = useToast();

  const submitHandler = () => {
    if (signup.gender && signup.country) {
      navigate("/signup5");
    } else {
      toast({
        title: "fill all the data",
        description: "",
        status: "error",
        duration: 2000,
        position: "top",
        isClosable: true,
      });
    }
  };

  let countryList = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antigua &amp; Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia",
    "Bosnia &amp; Herzegovina",
    "Botswana",
    "Brazil",
    "British Virgin Islands",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Cape Verde",
    "Cayman Islands",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Congo",
    "Cook Islands",
    "Costa Rica",
    "Cote D Ivoire",
    "Croatia",
    "Cruise Ship",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Estonia",
    "Ethiopia",
    "Falkland Islands",
    "Faroe Islands",
    "Fiji",
    "Finland",
    "France",
    "French Polynesia",
    "French West Indies",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Grenada",
    "Guam",
    "Guatemala",
    "Guernsey",
    "Guinea",
    "Guinea Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Isle of Man",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jersey",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kuwait",
    "Kyrgyz Republic",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macau",
    "Macedonia",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Namibia",
    "Nepal",
    "Netherlands",
    "Netherlands Antilles",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Norway",
    "Oman",
    "Pakistan",
    "Palestine",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Reunion",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Pierre &amp; Miquelon",
    "Samoa",
    "San Marino",
    "Satellite",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "South Africa",
    "South Korea",
    "Spain",
    "Sri Lanka",
    "St Kitts &amp; Nevis",
    "St Lucia",
    "St Vincent",
    "St. Lucia",
    "Sudan",
    "Suriname",
    "Swaziland",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Timor L'Este",
    "Togo",
    "Tonga",
    "Trinidad &amp; Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Turks &amp; Caicos",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "Uruguay",
    "Uzbekistan",
    "Venezuela",
    "Vietnam",
    "Virgin Islands (US)",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  ];

  // 3rd signup detail page for some more details
  return (
    <>
      <Center height={"100vh"}>
        <Box width={"40%"} height={"fit-content"}>
          <Center>
            <Box
              borderRadius="10"
              boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}
              padding={"50px 100px"}
              alignContent={"center"}
            >
              <Text overflow={"auto"} fontSize={"18px"} fontWeight={"bold"}>
                Please select which sex we should use to calculate your calorie
                needs.
              </Text>

              <RadioGroup name="gender">
                <Stack direction="row">
                  <Radio
                    onClick={(e) => setSignup({ ...signup, gender: "Male" })}
                    value="Male"
                  >
                    Male
                  </Radio>
                  <Radio
                    value="Female"
                    onClick={(e) => setSignup({ ...signup, gender: "Female" })}
                  >
                    Female
                  </Radio>
                </Stack>
              </RadioGroup>

              <Text
                marginTop={10}
                overflow={"auto"}
                fontSize={"18px"}
                fontWeight={"bold"}
              >
                When were you born?
              </Text>
              <Date/>
              {/* <Input
                //  onChange={changeHandler}
                onChange={(e) => setSignup({ ...signup, dob:e.target.value })}
                name="dob"
                placeholder="Select Date and Time"
                type="text"
              /> */}

              <Text
                marginTop={10}
                overflow={"auto"}
                fontSize={"18px"}
                fontWeight={"bold"}
              >
                Where do you live?
              </Text>
              <Select
                placeholder="Select option"
                onChange={(e) =>
                  setSignup({ ...signup, country: e.target.value })
                }
                name="country"
              >
                {countryList.map((el) => (
                  <option key={el} value={el}>
                    {el}
                  </option>
                ))}
              </Select>

              <Flex justifyContent={"space-between"} marginTop={7} gap={5}>
                <Box w={"50%"}>
                  <Link to={"/signup3"}>
                    <Button
                      colorScheme="teal"
                      variant="outline"
                      marginBottom="2"
                      w={"100%"}
                    >
                      BACK
                    </Button>
                  </Link>
                </Box>
                <Box w={"50%"}>
                  <Button
                    marginBottom="2"
                    colorScheme={"blue"}
                    w={"100%"}
                    onClick={submitHandler}
                  >
                    NEXT
                  </Button>
                </Box>
              </Flex>
            </Box>
          </Center>
        </Box>
      </Center>
    </>
  );
};

export default Signup4;
