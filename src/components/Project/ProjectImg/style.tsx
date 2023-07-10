import { styled } from "@/styles/stitches.config";

export const ImgProject = styled("a", {
  height: "450px",
  backgroundImage: `var(--background-image)`,
  backgroundPosition: "top",
  backgroundColor: "$grey4",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  border: "3px solid $grey4",
  borderRadius: "10px",
  boxShadow: "0px 0px 32px -8px $grey4",
  cursor: "pointer",
  transition: "background-position ease-in-out 4s",

  "&:hover": {
    backgroundPosition: "bottom",
  },
});

export const ImgProjectDescription = styled("div", {
  width: "max-content",
  marginLeft: "10px",
  marginTop: "10px",
  backgroundColor: "transparent",
  backgroundImage: "linear-gradient(330deg, #242424 0%, #242424 83%)",
  color: "#F1F1FF",
  borderStyle: "none",
  borderRadius: "4px",
  padding: "11px",
  boxShadow: "0px 0px 10px 0px #000000",
  fontFamily: "'Poppins', Sans-serif",
  fontSize: "13px",
  fontWeight: "600",
  textTransform: "uppercase",
  fontStyle: "italic",
  letterSpacing: "0px",
});
