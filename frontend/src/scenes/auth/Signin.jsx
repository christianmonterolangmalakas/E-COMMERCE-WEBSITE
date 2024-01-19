import { SignIn } from "@clerk/clerk-react";
import { Box } from "@mui/material";

export default function SignInPage() {
  return (
    <Box
      display="flex"
      alignItems="flex"
      justifyContent="flexbox"
      marginTop="150px"
    >
      <SignIn />
    </Box>
  );
}
