import { Box, Button, Flex, Heading, Text, VStack, Image, useColorModeValue, chakra } from "@chakra-ui/react";
import { FaComments, FaSearch } from "react-icons/fa";
import { useState } from "react";

const Index = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const sendMessage = () => {
    if (inputValue.trim()) {
      setMessages([...messages, { text: inputValue, sender: "user" }]);
      setInputValue("");
      // Simulate AI response
      setTimeout(() => {
        setMessages((messages) => [...messages, { text: "Here's a content idea based on your input!", sender: "bot" }]);
      }, 1000);
    }
  };

  const bgColor = useColorModeValue("gray.50", "gray.700");
  const chatBgColor = useColorModeValue("white", "gray.800");

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      minH="100vh"
      p={4}
      sx={{
        "@keyframes fadeIn": {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        animation: "fadeIn 1s ease-in-out",
      }}
    >
      <VStack spacing={8} w="full" maxW="lg">
        <Box w="full" p={5} shadow="md" borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Image src="https://images.unsplash.com/photo-1613633043968-e4ffc82d241b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb250ZW50JTIwY3JlYXRpb258ZW58MHx8fHwxNzE0NDU5OTc5fDA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="lg" />
          <Heading fontSize="2xl" mt={4}>
            Unlock Your Creative Potential
          </Heading>
          <Text mt={4}>Get personalized content ideas from our AI chatbot!</Text>
          <Button rightIcon={<FaComments />} colorScheme="blue" mt={4} onClick={() => alert("Chat Started")}>
            Start Chat
          </Button>
        </Box>
        <Box w="full" bg={chatBgColor} p={5} shadow="md" borderWidth="1px" borderRadius="lg" overflow="hidden">
          <VStack spacing={4} align="stretch">
            {messages.map((message, index) => (
              <chakra.div key={index} alignSelf={message.sender === "user" ? "flex-end" : "flex-start"}>
                <Box maxW="70%" p={3} bg={message.sender === "user" ? "blue.500" : "gray.300"} color={message.sender === "user" ? "white" : "black"} borderRadius="lg">
                  {message.text}
                </Box>
              </chakra.div>
            ))}
          </VStack>
          <Flex mt={4}>
            <input value={inputValue} onChange={handleInputChange} placeholder="Type your message here..." style={{ flexGrow: 1, padding: "8px", marginRight: "8px", borderRadius: "8px", border: "1px solid lightgray", scrollBehavior: "smooth" }} />
            <Button colorScheme="blue" onClick={sendMessage} _hover={{ transform: "scale(1.05)" }} _active={{ transform: "scale(0.95)" }}>
              <FaComments />
            </Button>
          </Flex>
        </Box>
      </VStack>
    </Flex>
  );
};

export default Index;
