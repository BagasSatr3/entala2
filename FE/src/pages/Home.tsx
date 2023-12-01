import {
  Box,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { API } from "../libs/api";

interface ICustomer {
  id: number;
  username: string;
  password: string;
}

interface IProduct {
  id: number;
  name: string;
  price: number;
}

interface ITransaction {
  id: number;
  invoiceNumber: number;
  invoiceDate: string;
  qty: number;
  total_amount: number;
  total_count: number;
  customer: ICustomer;
  product: IProduct;
}

export default function Home() {
  const [customer, setCustomer] = useState<ICustomer[]>([]);
  const [product, setProduct] = useState<IProduct[]>([]);
  const [transaction, setTransaction] = useState<ITransaction[]>([]);

  async function fetchData() {
    try {
      const resCustomer = await API.get("/customers", {
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      });
      const resProduct = await API.get("/product", {
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      });
      const resTransaction = await API.get("/transaction", {
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      });

      setCustomer(resCustomer.data);
      setProduct(resProduct.data.product);
      setTransaction(resTransaction.data.transactions);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box>
      <Box m={4}>
        <Text fontSize={"4xl"} textAlign={"center"}>
          Products
        </Text>
        {product.length > 0 ? (
          <TableContainer>
            <Table variant="simple">
              <TableCaption>This is Products table</TableCaption>
              <Thead>
                <Tr>
                  <Th>Product Name</Th>
                  <Th>Product Price</Th>
                </Tr>
              </Thead>
              <Tbody>
                {product.map((data) => (
                  <Tr key={data.id}>
                    <Td>{data.name}</Td>
                    <Td>{data.price}</Td>
                  </Tr>
                ))}
              </Tbody>
              <Tfoot>
                <Tr>
                  <Th>Name</Th>
                  <Th>Price</Th>
                </Tr>
              </Tfoot>
            </Table>
          </TableContainer>
        ) : (
          <Text>No products available</Text>
        )}
      </Box>

      <Box m={4}>
        <Text fontSize={"4xl"} textAlign={"center"}>
          Customers
        </Text>
        {customer.length > 0 ? (
          <TableContainer>
            <Table variant="simple">
              <TableCaption>This is customers table</TableCaption>
              <Thead>
                <Tr>
                  <Th>Username</Th>
                  <Th>Password</Th>
                </Tr>
              </Thead>
              <Tbody>
                {customer.map((data) => (
                  <Tr key={data.id}>
                    <Td>{data.username}</Td>
                    <Td>{data.password}</Td>
                  </Tr>
                ))}
              </Tbody>
              <Tfoot>
                <Tr>
                  <Th>Username</Th>
                  <Th>Password</Th>
                </Tr>
              </Tfoot>
            </Table>
          </TableContainer>
        ) : (
          <Text>No customers available</Text>
        )}
      </Box>

      <Box m={4}>
        <Text fontSize={"4xl"} textAlign={"center"}>
          Transaction
        </Text>
        {transaction.length > 0 ? (
          <TableContainer>
            <Table variant="simple">
              <TableCaption>This is transactions table</TableCaption>
              <Thead>
                <Tr>
                  <Th>Invoice Number</Th>
                  <Th>Invoice Date</Th>
                  <Th>Qty</Th>
                  <Th>Total Amount</Th>
                  <Th>Total Count</Th>
                  <Th>Customer</Th>
                  <Th>Product</Th>
                </Tr>
              </Thead>
              <Tbody>
                {transaction.map((data) => (
                  <Tr key={data.id}>
                    <Td>{data.invoiceNumber}</Td>
                    <Td>{data.invoiceDate}</Td>
                    <Td>{data.qty}</Td>
                    <Td>{data.total_amount}</Td>
                    <Td>{data.total_count}</Td>
                    <Td>{data.customer.username}</Td>
                    <Td>{data.product.name}</Td>
                  </Tr>
                ))}
              </Tbody>
              <Tfoot>
                <Tr>
                  <Th>Invoice Number</Th>
                  <Th>Invoice Date</Th>
                  <Th>Qty</Th>
                  <Th>Total Amount</Th>
                  <Th>Total Count</Th>
                  <Th>Customer</Th>
                  <Th>Product</Th>
                </Tr>
              </Tfoot>
            </Table>
          </TableContainer>
        ) : (
          <Text>No transactions available</Text>
        )}
      </Box>
    </Box>
  );
}
