import { Box, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";

const Payment = ({ values, touched, errors, handleBlur, handleChange }) => {
  return (
    <Box m="30px 0">
      {/* CONTACT INFO */}
      <Box>
        <Typography sx={{ mb: "15px" }} fontSize="18px">
          Contact Info
        </Typography>
        <TextField
          fullWidth
          type="text"
          label="Email"
          }
        
        />
        <TextField
          fullWidth
          type="text"
          label="Phone Number"
       
          helperText={touched.phoneNumber && errors.phoneNumber}
          sx={{ gridColumn: "span 4" }}
        />
      </Box>

  );
};

export default Payment;
