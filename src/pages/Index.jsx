import React from "react";
import { Box, Heading, Text, Flex, Avatar, Link, List, ListItem, ListIcon, Progress, FormControl, FormLabel, Input, Textarea, Button, useColorModeValue } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope, FaBriefcase, FaCode, FaPaperPlane } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Header */}
      <Flex as="header" align="center" justify="space-between" wrap="wrap" padding="1.5rem" bg={useColorModeValue("gray.100", "gray.900")}>
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
            Artech
          </Heading>
          <Text ml={3} fontSize="xl" fontWeight="medium" color="gray.500">
            Front-End Developer
          </Text>
        </Flex>

        <Box display={{ base: "none", md: "flex" }} width={{ base: "full", md: "auto" }} alignItems="center">
          <Link px={2} py={1} rounded={"md"} _hover={{ textDecoration: "none", bg: useColorModeValue("gray.200", "gray.700") }} href="#about">
            About
          </Link>
          <Link px={2} py={1} rounded={"md"} _hover={{ textDecoration: "none", bg: useColorModeValue("gray.200", "gray.700") }} href="#experience">
            Experience
          </Link>
          <Link px={2} py={1} rounded={"md"} _hover={{ textDecoration: "none", bg: useColorModeValue("gray.200", "gray.700") }} href="#projects">
            Projects
          </Link>
          <Link px={2} py={1} rounded={"md"} _hover={{ textDecoration: "none", bg: useColorModeValue("gray.200", "gray.700") }} href="#contact">
            Contact
          </Link>
        </Box>
      </Flex>

      <Box maxWidth="800px" mx="auto" px={4} py={8}>
        {/* About Section */}
        <Box mb={8} id="about">
          <Heading as="h2" variant="section-title" mb={4}>
            About Me
          </Heading>
          <Flex align="center" mb={4}>
            <Avatar size="xl" name="Artech" src="https://images.unsplash.com/photo-1607294846590-fd005d7973e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjBhdmF0YXJ8ZW58MHx8fHwxNzExMTgxNTE5fDA&ixlib=rb-4.0.3&q=80&w=1080" mr={4} />
            <Box>
              <Text fontSize="xl">Hi, I'm Artech, a passionate front-end developer specializing in creating elegant and functional user interfaces. With expertise in HTML, CSS, JavaScript, and React, I enjoy solving complex problems and bringing designs to life.</Text>
            </Box>
          </Flex>
        </Box>

        {/* Work Experience Section */}
        <Box mb={8} id="experience">
          <Heading as="h2" variant="section-title" mb={4}>
            Work Experience
          </Heading>
          <List spacing={3}>
            <ListItem>
              <Flex align="center">
                <ListIcon as={FaBriefcase} color="green.500" />
                <Box ml={4}>
                  <Text fontWeight="bold">Front-End Developer</Text>
                  <Text fontSize="sm">ABC Company (2020 - Present)</Text>
                </Box>
              </Flex>
              <Text mt={2}>Developed responsive and accessible user interfaces using React and Redux. Collaborated with designers and back-end developers to implement new features and optimize application performance.</Text>
            </ListItem>
            <ListItem>
              <Flex align="center">
                <ListIcon as={FaBriefcase} color="green.500" />
                <Box ml={4}>
                  <Text fontWeight="bold">UI Designer</Text>
                  <Text fontSize="sm">XYZ Agency (2018 - 2020)</Text>
                </Box>
              </Flex>
              <Text mt={2}>Designed intuitive and visually appealing user interfaces for web applications. Created wireframes, prototypes, and high-fidelity mockups using Sketch and InVision.</Text>
            </ListItem>
          </List>
        </Box>

        {/* Projects Section */}
        <Box mb={8} id="projects">
          <Heading as="h2" variant="section-title" mb={4}>
            Projects
          </Heading>
          <Flex wrap="wrap">
            <Box width={{ base: "100%", md: "50%" }} pr={{ base: 0, md: 4 }} mb={4}>
              <Box borderWidth={1} borderRadius="lg" overflow="hidden">
                <Box p={4}>
                  <Heading as="h3" size="md" mb={2}>
                    Project 1
                  </Heading>
                  <Text mb={2}>A web application for managing tasks and projects. Built with React, Node.js, and MongoDB.</Text>
                  <Flex align="center">
                    <Link href="#" mr={4}>
                      <FaGithub />
                    </Link>
                    <Link href="#">Live Demo</Link>
                  </Flex>
                </Box>
              </Box>
            </Box>
            <Box width={{ base: "100%", md: "50%" }} pl={{ base: 0, md: 4 }} mb={4}>
              <Box borderWidth={1} borderRadius="lg" overflow="hidden">
                <Box p={4}>
                  <Heading as="h3" size="md" mb={2}>
                    Project 2
                  </Heading>
                  <Text mb={2}>An e-commerce website for selling handmade crafts. Implemented using React, Commerce.js, and Stripe.</Text>
                  <Flex align="center">
                    <Link href="#" mr={4}>
                      <FaGithub />
                    </Link>
                    <Link href="#">Live Demo</Link>
                  </Flex>
                </Box>
              </Box>
            </Box>
          </Flex>
        </Box>

        {/* Skills Section */}
        <Box mb={8}>
          <Heading as="h2" variant="section-title" mb={4}>
            Skills
          </Heading>
          <Flex wrap="wrap">
            <Box width={{ base: "100%", md: "50%" }} pr={{ base: 0, md: 4 }} mb={4}>
              <Text>HTML</Text>
              <Progress value={90} size="xs" colorScheme="green" />
            </Box>
            <Box width={{ base: "100%", md: "50%" }} pl={{ base: 0, md: 4 }} mb={4}>
              <Text>CSS</Text>
              <Progress value={85} size="xs" colorScheme="green" />
            </Box>
            <Box width={{ base: "100%", md: "50%" }} pr={{ base: 0, md: 4 }} mb={4}>
              <Text>JavaScript</Text>
              <Progress value={80} size="xs" colorScheme="green" />
            </Box>
            <Box width={{ base: "100%", md: "50%" }} pl={{ base: 0, md: 4 }} mb={4}>
              <Text>React</Text>
              <Progress value={75} size="xs" colorScheme="green" />
            </Box>
          </Flex>
        </Box>

        {/* Contact Section */}
        <Box mb={8} id="contact">
          <Heading as="h2" variant="section-title" mb={4}>
            Contact Me
          </Heading>
          <Box borderRadius="lg" bg={useColorModeValue("white", "gray.700")} p={8}>
            <form>
              <FormControl id="name" isRequired>
                <FormLabel>Name</FormLabel>
                <Input type="text" />
              </FormControl>
              <FormControl id="email" isRequired>
                <FormLabel>Email</FormLabel>
                <Input type="email" />
              </FormControl>
              <FormControl id="message" isRequired>
                <FormLabel>Message</FormLabel>
                <Textarea rows={4} />
              </FormControl>
              <Button mt={4} colorScheme="green" type="submit" leftIcon={<FaPaperPlane />}>
                Send Message
              </Button>
            </form>
          </Box>
        </Box>
      </Box>

      {/* Footer */}
      <Box as="footer" bg={useColorModeValue("gray.100", "gray.900")} py={4}>
        <Flex maxWidth="800px" mx="auto" align="center" justify="space-between" wrap="wrap">
          <Text>&copy; {new Date().getFullYear()} Artech. All rights reserved.</Text>
          <Box>
            <Link href="#" mr={4}>
              <FaGithub />
            </Link>
            <Link href="#" mr={4}>
              <FaLinkedin />
            </Link>
            <Link href="#">
              <FaEnvelope />
            </Link>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Index;
