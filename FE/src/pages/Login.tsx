"use client";

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { API } from "../libs/api";
import { useNavigate } from "react-router-dom";

export default function SimpleCard() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    try {
      const res = await API.post("/login", data);
      localStorage.setItem("token", res.data.token);
      console.log(data);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in to your account</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool <Text color={"blue.400"}>features</Text> ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
            <Stack spacing={4}>
              <FormControl id="username" isInvalid={!!errors.title}>
                <FormLabel>Username</FormLabel>
                <Input
                  type="text"
                  {...register("username", {
                    required: "Username is required",
                  })}
                  placeholder="Insert Username"
                />
                <Box className="red-error-message" color="red.500" mt={1}>
                  {errors.username && (
                    <Box className="red-error-message" color="red.500" mt={1}>
                      {errors.username.message as React.ReactNode}
                    </Box>
                  )}
                </Box>
              </FormControl>
              <FormControl id="password" isInvalid={!!errors.title}>
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                  placeholder="Insert Password"
                />
                {errors.password && (
                  <Box color="red.500" mt={1}>
                    {errors.password.message as React.ReactNode}
                  </Box>
                )}
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox>Remember me</Checkbox>
                  <Text color={"blue.400"}>Forgot password?</Text>
                </Stack>
                <Button
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  type="submit"
                >
                  Sign in
                </Button>
                <Text align={"center"}>
                  Don't have an account?{" "}
                  <Link href="/login" color={"blue.400"}>
                    Login
                  </Link>
                </Text>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
}
