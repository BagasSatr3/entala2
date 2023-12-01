import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { API } from "../libs/api";
import {
  Box,
  Button,
  Card,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";

export default function AddProduct() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    try {
      await API.post("/product", data);
      console.log(data);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Box>
      <Card m={4}>
        <Box m={4}>
          <Text fontSize={"3xl"} textAlign={"center"}>
            Add Product
          </Text>
          <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
            <FormControl id="name" isInvalid={!!errors.title}>
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                {...register("name", {
                  required: "Name is required",
                })}
                placeholder="Insert Name"
              />
              <Box className="red-error-message" color="red.500" mt={1}>
                {errors.name && (
                  <Box className="red-error-message" color="red.500" mt={1}>
                    {errors.name.message as React.ReactNode}
                  </Box>
                )}
              </Box>
            </FormControl>
            <FormControl id="price" isInvalid={!!errors.title}>
              <FormLabel>Price</FormLabel>
              <Input
                type="text"
                {...register("price", {
                  required: "Price is required",
                })}
                placeholder="Insert Price"
              />
              <Box className="red-error-message" color="red.500" mt={1}>
                {errors.price && (
                  <Box className="red-error-message" color="red.500" mt={1}>
                    {errors.price.message as React.ReactNode}
                  </Box>
                )}
              </Box>
            </FormControl>
            <Button
              bg={"blue.400"}
              color={"white"}
              _hover={{
                bg: "blue.500",
              }}
              type="submit"
            >
              Create
            </Button>
          </form>
        </Box>
      </Card>
    </Box>
  );
}
