import { styled } from "@/styles/stitches.config";
import { Flex, Container } from "@/styles/Global";

export const Navbar = styled("nav", {
  background: "$grey0",
  borderBottom: "2px solid #e0e0e0",
  position: "fixed",
  inset: 0,
  bottom: "auto",
  padding: "1rem 0",
  width: "100%",
  zIndex: "99999",

  [`& ${Container}`]: {
    display: "flex",
    position: "relative",
    justifyContent: "space-between",
    "@mobile": {
      flexDirection: "column",
    },
  },
});

export const LogoTipo = styled(Flex, {
  alignItems: "center",
});

export const LogoTipoText = styled("span", {
  fontSize: "1.25rem",
  fontWeight: 600,
  color: "$grey4",
  fontFamily: '"IBM Plex Sans"',
  "@mobile": {
    fontSize: "1rem",
  },
});

export const NavbarLinks = styled(Flex, {  
  "& > a": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "40px",
    cursor: "default",

    "& > p": {
      position: "relative",
      width: "max-content",
      cursor: "pointer",
  
      "&:after, &:before": {
        transition: "all .5s cubic-bezier(0.785, 0.135, 0.15, 0.86)",
        content: '',
        position: "absolute",
      },
  
      "&:after": {
        bottom: "-2px",
        left: "50%",
        transform: "translate(-50%)",
        height: "2px",
        background: "#333",
        width: 0,
      },
  
      "&:hover:after": {
        width: "100%"
      },
    },
  }, 

  

  "@mobile": {
    marginTop: "$3",
    flexDirection: "column",
    alignItems: "flex-start",
    "& a": {
      width: "100%",
      justifyContent: "flex-start",
      paddingLeft: "0",
    },
  },
});

export const NavbarMobileArea = styled("div", {
  display: "flex",
  justifyContent: "space-between",
});
