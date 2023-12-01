import {
  Box,
  Button,
  Card,
  FormControl,
  FormLabel,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { API } from "../libs/api";
import { useEffect, useState } from "react";

interface IProduct {
  id: number;
  name: string;
  price: number;
}

export default function AddTransaction() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    try {
      await API.post("/transaction", data, {
        headers: {
            Authorization: `Bearer ${localStorage.token}`,
          },
      });
      console.log(data);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  async function fetchData() {
    try {
      const resProduct = await API.get("/product", {
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      });
      setProducts(resProduct.data.product);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Box>
      <Card m={4}>
        <Box m={4}>
          <Text fontSize={"3xl"} textAlign={"center"}>
            Add Transaction
          </Text>
          <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
            <FormControl id="invoiceNumber" isInvalid={!!errors.title}>
              <FormLabel>Invoice Number</FormLabel>
              <Input
                type="number"
                {...register("invoiceNumber", {
                  required: "Invoice Number is required",
                })}
                placeholder="Insert Invoice Number"
              />
              <Box className="red-error-message" color="red.500" mt={1}>
                {errors.invoiceNumber && (
                  <Box className="red-error-message" color="red.500" mt={1}>
                    {errors.invoiceNumber.message as React.ReactNode}
                  </Box>
                )}
              </Box>
            </FormControl>
            <FormControl id="qty" isInvalid={!!errors.title}>
              <FormLabel>Qty</FormLabel>
              <Input
                type="number"
                {...register("qty", {
                  required: "Qty is required",
                })}
                placeholder="Insert Qty"
              />
              <Box className="red-error-message" color="red.500" mt={1}>
                {errors.qty && (
                  <Box className="red-error-message" color="red.500" mt={1}>
                    {errors.qty.message as React.ReactNode}
                  </Box>
                )}
              </Box>
            </FormControl>
            <FormControl id="total_amount" isInvalid={!!errors.title}>
              <FormLabel>Total Count</FormLabel>
              <Input
                type="number"
                {...register("total_amount", {
                  required: "Total Count is required",
                })}
                placeholder="Insert Total Count"
              />
              <Box className="red-error-message" color="red.500" mt={1}>
                {errors.total_amount && (
                  <Box className="red-error-message" color="red.500" mt={1}>
                    {errors.total_amount.message as React.ReactNode}
                  </Box>
                )}
              </Box>
            </FormControl>
            <FormControl id="total_count" isInvalid={!!errors.title}>
              <FormLabel>Total Amount</FormLabel>
              <Input
                type="number"
                {...register("total_count", {
                  required: "Total Amount is required",
                })}
                placeholder="Insert Total Amount"
              />
              <Box className="red-error-message" color="red.500" mt={1}>
                {errors.total_count && (
                  <Box className="red-error-message" color="red.500" mt={1}>
                    {errors.total_count.message as React.ReactNode}
                  </Box>
                )}
              </Box>
            </FormControl>
            <FormControl id="product" isInvalid={!!errors.product}>
              <FormLabel>Product</FormLabel>
              <Select
                {...register("product", {
                  required: "Product is required",
                })}
                placeholder="Select Product"
              >
                {products.map((product) => (
                  <option key={product.id} value={product.id}>
                    {product.name}
                  </option>
                ))}
              </Select>
              <Box className="red-error-message" color="red.500" mt={1}>
                {errors.product && (
                  <Box className="red-error-message" color="red.500" mt={1}>
                    {errors.product.message as React.ReactNode}
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
