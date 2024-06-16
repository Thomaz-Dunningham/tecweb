//Iasmim Barbosa - 2212130100
//Thomaz Oliveira Dunningham - 2212130027
import React, { useState } from "react";
import {
  Flex,
  Box,
  Center,
  FormControl,
  Input,
  FormLabel,
  HStack,
  RadioGroup,
  Radio,
  Button,
} from "@chakra-ui/react";
import axios from "axios";

function App() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    nasc: "",
    natural: "",
    cel: "",
    telefone: "",
    endereco: "",
    cidade: "",
    sexo: "Masculino",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/form",
        formData,
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box h="100vh">
      <Center
        as="header"
        h={150}
        bg="teal.500"
        color="white"
        fontWeight="bold"
        fontSize="4xl"
        pb="8"
      >
        Formulário
      </Center>
      <Flex
        align="center"
        justify="center"
        bg="blackAlpha.200"
        h="calc(100vh - 150px)"
      >
        <Center
          w="100%"
          maxW={840}
          bg="white"
          top={100}
          position="absolute"
          borderRadius={5}
          p="6"
          boxShadow="0 1px 2px #ccc"
        >
          <FormControl
            display="flex"
            flexDir="column"
            gap="4"
            as="form"
            onSubmit={handleSubmit}
          >
            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="nome">Nome Completo</FormLabel>
                <Input
                  id="nome"
                  value={formData.nome}
                  onChange={handleChange}
                />
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="email">E-mail</FormLabel>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Box>
            </HStack>
            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="nasc">Data de Nascimento</FormLabel>
                <Input
                  id="nasc"
                  type="date"
                  value={formData.nasc}
                  onChange={handleChange}
                />
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="natural">Naturalidade</FormLabel>
                <Input
                  id="natural"
                  value={formData.natural}
                  onChange={handleChange}
                />
              </Box>
            </HStack>
            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="cel">Celular</FormLabel>
                <Input
                  id="cel"
                  type="number"
                  value={formData.cel}
                  onChange={handleChange}
                />
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="telefone">Telefone</FormLabel>
                <Input
                  id="telefone"
                  type="number"
                  value={formData.telefone}
                  onChange={handleChange}
                />
              </Box>
            </HStack>
            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="endereco">Endereço</FormLabel>
                <Input
                  id="endereco"
                  value={formData.endereco}
                  onChange={handleChange}
                />
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="cidade">Cidade</FormLabel>
                <Input
                  id="cidade"
                  value={formData.cidade}
                  onChange={handleChange}
                />
              </Box>
            </HStack>
            <HStack spacing="4">
              <Box w="100%">
                <FormLabel>Sexo</FormLabel>
                <RadioGroup
                  id="sexo"
                  value={formData.sexo}
                  onChange={(value) =>
                    setFormData({ ...formData, sexo: value })
                  }
                >
                  <HStack spacing="24px">
                    <Radio value="Masculino">Masculino</Radio>
                    <Radio value="Feminino">Feminino</Radio>
                    <Radio value="Outro">Outro</Radio>
                  </HStack>
                </RadioGroup>
              </Box>
            </HStack>
            <HStack justify="center">
              <Button
                w={240}
                p="6"
                type="submit"
                bg="teal.600"
                color="white"
                fontWeight="bold"
                fontSize="xl"
                mt="2"
                _hover={{ bg: "teal.800" }}
              >
                Enviar
              </Button>
            </HStack>
          </FormControl>
        </Center>
      </Flex>
    </Box>
  );
}

export default App;
