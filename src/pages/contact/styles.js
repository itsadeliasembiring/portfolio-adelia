import Colors from "../../theme/Color";

export const containerContact = {
  width: "100%",
  display: "block",
};

export const boxContent = {
  display: "block",
  pl: 4,
  pr: 4,
};

export const title = {
  color: Colors.blue,
  fontSize: { sm: 53, xs: 45 },
  fontWeight: 500,
  letterSpacing: 5,
  fontFamily: "DM Serif Display",
  mt: { md: 3, sm: 4, xs: 3 },
  textAlign: "center",
};

export const desc = {
  color: Colors.black,
  fontSize: { xs: 16 },
  fontFamily: "Poppins",
  lineHeight: 1.4,
};

export const icon = {
  fontSize: { xs: 30, sm: 35 },
  mr: 0.5,
  color: Colors.darkGray,
};

export const footer = {
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export const footerBox = {
  maxWidth: 750,
  position: "absolute",
  bottom: 0,
  pb: { md: 3, sm: 14, xs: 12 },
};
