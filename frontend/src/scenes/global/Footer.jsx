import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import { shades } from "../../theme";

function Footer() {
  const {
    palette: { neutral },
  } = useTheme();
  return (
    <Box marginTop="70px" padding="40px 0" backgroundColor="black">
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        columnGap="clamp(20px, 30px, 40px)"
      >
        <Box width="clamp(20%, 30%, 40%)">
          <Typography
            variant="h4"
            fontWeight="bold"
            mb="30px"
            color={shades.primary[200]}
          >
            ForSumShop
          </Typography>
          <div style={{ color: "white" }}>
            Welcome to For Sum Shop, your go-to online store for electronics,
            shoes, clothes, and watches. Explore our collection of quality
            products that blend style and functionality. Upgrade your gadgets,
            step into fashion-forward footwear, and stay on trend with our
            clothing selections. Don't forget to check out our timeless watches.
            Shop with confidence at For Sum Shop for a simple and enjoyable
            online shopping experience.
          </div>
        </Box>

        <Box width="clamp(20%, 25%, 30%)">
          <Typography color={"white"} variant="h4" fontWeight="bold" mb="30px">
            Contact Us
          </Typography>
          <Typography color={"white"} mb="30px">
            Address:
          </Typography>
          <Typography color={"white"} mb="30px" sx={{ wordWrap: "break-word" }}>
            Email: DemCharles@gmail.com, JeffreeLingal@gmail.com,
            ChristianMontero@gmail.com, AlbertRetiza@gmail.com
          </Typography>
          <Typography color={"white"} mb="30px">
            Contact Number: 09123123
          </Typography>
          <Typography color={"white"} mb="30px">
            Developed By: Dem Charles Bule, Jeffree Lingal, Christian Montero,
            John Albert Retiza
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;