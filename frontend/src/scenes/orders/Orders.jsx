import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  CircularProgress,
  Typography,
  Box,
} from "@mui/material";

const Orders = () => {
  // State variables to manage orders, loading state, and errors
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch orders from the API when the component mounts
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        // Fetch orders from the API
        const response = await fetch("http://localhost:2000/api/orders", {
          method: "GET",
        });

        // Check if the response is successful
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse the response data
        const responseData = await response.json();
        const { data } = responseData;

        // Check if the data is in the expected array format
        if (Array.isArray(data)) {
          setOrders(data);
        } else {
          throw new Error("Invalid data structure. Expected an array.");
        }
      } catch (error) {
        // Handle errors during the fetch process
        console.error("Error fetching orders:", error);
        setError("Error fetching orders. Please try again later.");
      } finally {
        // Set loading to false once the fetch process is complete
        setLoading(false);
      }
    };

    // Invoke the fetchOrders function
    fetchOrders();
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    // Container for the orders table with styling
    <Box marginTop="80px" paddingX="180px">
      <TableContainer>
        {/* Display loading indicator while data is being fetched */}
        {loading ? (
          <div style={{ textAlign: "center", padding: "20px" }}>
            <CircularProgress />
            <Typography variant="body1">Loading orders...</Typography>
          </div>
        ) : error ? (
          // Display an error message if there's an issue fetching data
          <Typography
            variant="body1"
            color="error"
            style={{ textAlign: "center" }}
          >
            {error}
          </Typography>
        ) : (
          // it Display the table when data is successfully loaded
          <Table>
            <TableHead>
              <TableRow>
                {/* Define table headers */}
                <TableCell>EMAIL ADDRESS</TableCell>
                <TableCell>ORDER ID</TableCell>
                <TableCell>ORDER DATE</TableCell>
                {/* Add more table headers based on your order model */}
              </TableRow>
            </TableHead>
            <TableBody>
              {/* Map over orders and display them in table rows */}
              {orders.map((order) => (
                <TableRow key={order.id}>
                  {/*this will Display order details in table cells */}
                  <TableCell>{order.attributes.userName}</TableCell>
                  <TableCell>{order.attributes.stripeSessionId}</TableCell>
                  <TableCell>
                    {new Date(order.attributes.createdAt).toLocaleString()}
                  </TableCell>
                  {/* Add more table cells based on your order model */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </TableContainer>
    </Box>
  );
};

export default Orders;
