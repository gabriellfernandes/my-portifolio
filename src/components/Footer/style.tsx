import { styled } from "@/styles/stitches.config";
import { Container, Flex } from "@/styles/Global";
import dots from "@/public/static/img/background/dots.svg";

export const Footer = styled("footer", {
  backgroundColor: "$grey0",
  padding: "7rem 0",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "left top 8rem",
  borderTop: "2px solid rgb(224, 224, 224)",
  
  "& a": {
    margin: "0 !important",
  },
  "@tablet": {
    backgroundPosition: "center top 1rem",
  },
  [`& ${Container}`]: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "@mobile": {
      flexDirection: "column",
      [`& ${Flex}:first-child`]: {
        marginBottom: "$5",
        flexDirection: "column",
        textAlign: "center",
        [`& img`]: {
          marginBottom: "$2",
        },
      },
    },
  },
});
