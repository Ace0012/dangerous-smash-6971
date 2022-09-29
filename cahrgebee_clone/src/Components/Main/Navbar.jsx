import { Flex, Menu, MenuItem } from "@chakra-ui/react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from "@chakra-ui/react";
import React from "react";
import { Button, Container, Box, Grid } from "@chakra-ui/react";
import { Link, Navigate } from "react-router-dom";
import { ChevronRightIcon } from "@chakra-ui/icons";

const links = [
  {
    to: "",
    title: "Product",
  },
  {
    to: "/pricing",
    title: "Pricing",
  },
  {
    to: "",
    title: "Solutions",
  },
  {
    to: "/customers",
    title: "Customers",
  },
  {
    to: "",
    title: "Resources",
  },
  {
    to: "/partners",
    title: "Partners",
  },
];

const links2 = [
  { to: "/login", title: "Login" },
  {
    to: "/demo",
    title: "Get A Demo",
  },
];
const Navbar = () => {
  return (
    <Box w={"100%"} bg="transparent">
      <Flex p="1" ml={9} justifyContent="space-between">
        <Flex alignItems="center">
          <Link to="/">
            <img
              style={{ height: "65px" }}
              src="data:image/png;base64,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"
              alt="Logo"
            />
          </Link>
          <Flex ml={12} gap="25px" fontSize={"14px"} fontWeight="600">
            {links.map((el) => {
              return (
                <Link key={el.to} to={el.to}>
                  {el.title}
                </Link>
              );
            })}
          </Flex>
        </Flex>
        <Flex alignItems="center" gap={'30px'}>
          <Popover>
            <PopoverTrigger>
              <Button
                // eslint-disable-next-line no-undef
             bg={'transparent'}
                color="balck"
                borderRadius={"none"}
              >
                <img src="https://webstatic.chargebee.com/assets/web/529/images/globe2.svg" style={{height:'20px',marginRight:'10px'}} alt="" />
                English
                <ChevronRightIcon />
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />

              <PopoverBody>
              <Menu>
                
                <MenuItem value="English">English</MenuItem>
                <MenuItem value="Detsuch">Destuch</MenuItem>

              </Menu>

              </PopoverBody>
            </PopoverContent>
          </Popover>

          <Link to='/login'> Login <ChevronRightIcon/></Link>
          <Button borderRadius={'none'} bg='#ff7846' color='white'>Get a Demo</Button>

        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
