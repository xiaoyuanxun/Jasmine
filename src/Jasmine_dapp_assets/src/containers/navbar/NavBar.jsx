import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/jasmine_logo.jpg";
import {
  useBreakpointValue,
  Box,
  Spacer,
  Flex,
  HStack,
  Button,
  IconButton,
  Input,
  InputGroup,
  InputRightAddon,
  InputLeftElement,
  Image as ChakraImage,
  Text,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { HamburgerIcon, Search2Icon } from "@chakra-ui/icons";
import Profile from "./Profile";
import ColorButton from "../colormode/ColorButton";

const LinkItems = [
  { name: "Stories", link: "/stories" },
  {
    name: "Marketplace",
    link: "/marketplace",
  },
  { name: "Mint", link: "/mint" },
  { name: "NobleBright", link: "/noblebright" },
];

const NavItem = ({ link, name }) => {
  return (
    <NavLink to={link}>
      {({ isActive }) => (
        <Box
          borderBottom="3px solid"
          borderColor={isActive ? "#12bdde" : "transparent"}
          pb={0.5}
        >
          <Flex
            align="center"
            py="2"
            px="3"
            m="1"
            borderRadius="md"
            role="group"
            cursor="pointer"
            fontWeight={620}   // 600
            _hover={{
              bg: "#282828",
            }}
            color="white"
            bg={isActive ? "#282828" : null}
            borderColor="#12bdde"
          >
            {name}
          </Flex>
        </Box>
      )}
    </NavLink>
  );
};

const SearchBar = () => {
  return (
    <Box width='250'>
      <InputGroup borderRadius={5} size="sm">
        <InputLeftElement 
          pointerEvents="none"
          children={<Search2Icon color="gray.600" />}
        />
        <Input type="text" placeholder="Search...       " border="1px solid #949494" />
        <InputRightAddon
          p={0}
          border="none"
        >
          <Button size="sm" fontWeight={700}  borderLeftRadius={0} borderRightRadius={3.3} border="1px solid #949494">
            Search
          </Button>
        </InputRightAddon>
      </InputGroup>
    </Box>
  );
};


const NavBar = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });

  return (
    <Box h="4rem">
      <Box
        as="section"
        pt="0.6rem"
        pb={"0.4rem"}
        px={isDesktop ? "4rem" : "1rem"}
        boxShadow="2xl"
        position="fixed"
        width="100%"
        top="0"
        zIndex="2"
        bg={"#111111"}
        borderBottom={isDesktop ? "5px double" : "4px double"}
        borderColor="#1a1a1a"
      >
        {isDesktop ? (
          <Flex align="center">
            <NavLink to={"/"}>
              <Flex align="center" me={5}>
                <ChakraImage h={30} src={logo} />
                <Text fontSize={25} as="samp" color="white">
                  <b>Jasmine </b>
                </Text>
              </Flex>
            </NavLink>
            <HStack fontWeight={700} fontSize={18}>
              {LinkItems.map((link) => (
                <NavItem key={link.name} name={link.name} link={link.link} />
              ))}
            </HStack>
            <Spacer />
            <SearchBar width='50'/>
            <Spacer />
            <Profile />
            <ColorButton />
          </Flex>
        ) : (
          <Flex align="center">
            <NavLink to={"/"}>
              <Flex align="center" me={5}>
                <ChakraImage h={25} src={logo} />
                <Text fontSize={20} as="samp" color="white">
                  Jasmine
                </Text>
              </Flex>
            </NavLink>
            <Spacer />
            <Profile />
            <MobileMenu />
          </Flex>
        )}
      </Box>
    </Box>
  );
};

export default NavBar;

const MobileMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <IconButton ms={2} icon={<HamburgerIcon />} onClick={onOpen} />
      <Drawer onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent bg={"#111111"} borderColor="#1a1a1a">
          <DrawerCloseButton color="white" />
          <DrawerHeader>
            <ColorButton />
          </DrawerHeader>
          <DrawerBody>
            <VStack fontWeight={700} fontSize={28} onClick={() => onClose()}>
              {LinkItems.map((link) => (
                <NavItem key={link.name} name={link.name} link={link.link} />
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
