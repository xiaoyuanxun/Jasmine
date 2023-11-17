import React, { useEffect } from "react";
import {
  Heading,
  Text,
  Stack,
  useColorModeValue,
  Box,
  Center,
  Alert,
  AlertDescription,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  HeadingColorDark,
  HeadingColorLight,
} from "../../containers/colormode/Colors";
import TopNfts from "./TopNfts";
import TopAuthors from "./TopAuthors";
import TopStories from "./TopStories";
import CardInfo from "./CardInfo";
import SocialCards from "./SocialCards";
// import Heros from "./Heros@";
import backgroundImage from '../../../assets/background.jpg';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const textColor = useColorModeValue(HeadingColorLight, HeadingColorDark);
  return (
    <>
      {/* <HomeAlert /> */}
      <Box color={textColor} pb={20} >

        <Box 
          bgImage={backgroundImage}
          bgSize='cover'
          // pb='195'
          height='calc(100vh - 65px)'
          >
          <Center pb={{ base: 0, md: 3 }} mt='2.9' mb='35' width='85%' margin="0 auto" >
            <Stack spacing={3} textAlign="center" pt='68'>
              <Heading
                lineHeight={1.1}
                fontWeight={"bold"}
                fontSize={{ base: "3xl", sm: "4xl", lg: "5xl" }}
                bgGradient={`linear(to-tl, #f9c051, #d0a85d)`}
                bgClip="text"
                transition="0.3s"
              >
                Explore Creator Stories and Discover Real Art
              </Heading>
              <Center>
                <Text
                  fontSize={{ base: "lg", md: "xl" }}
                  maxW={{ base: "xs", md: "xl" }}
                  color='white'
                >
                  <b>
                  <h3>Jasmine is a new Web3 platform built on ICP for Creator</h3>
                  </b>
                  <p fontSize={"20em"}>©2023 arkMeta Crypto Network Ltd. All rights reserved</p>
                </Text>
              </Center>
            </Stack>
          </Center>
          <TopAuthors  width='85%' margin="0 auto" />
        </Box>


        <TopStories  width='85%' margin="0 auto"/>
        <TopNfts  width='85%' margin="0 auto"/>
        <CardInfo  width='85%' margin="0 auto"/>
        <SocialCards  width='85%' margin="0 auto"/>
      </Box>
    </>
  );
};

export default Home;

const HomeAlert = () => {
  return (
    <Alert
      status="info"
      bg="radial-gradient(circle, rgba(208,168,93,1) 54%, rgba(249,190,82,1) 100%)"
      color="white"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      p={{ base: 3, lg: 5 }}
      mt={{ base: -1, lg: 0 }}
    >
      <AlertDescription>
        ⚡️ New Launch ⚡️{" "}
        <NavLink to="/noblebright">
          <Text
            display="inline"
            fontWeight="bold"
            _hover={{ textDecoration: "underline" }}
          >
            NobleBright Comic NFTs
            <ExternalLinkIcon mx="2px" />
          </Text>{" "}
        </NavLink>
      </AlertDescription>
    </Alert>
  );
};
