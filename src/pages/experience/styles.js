import Colors from "../../theme/Color";

export const containerExperience = {
  width: "100%",
  height: "100%",
};

export const boxExperience = {
  display: { sm: "flex", xs: "block" },
  alignItems: { md: "center" },
  justifyContent: { md: "center" },
  mb: 4,
};

export const boxContent = {
  display: "block",
  pl: 4,
  pr: 4,
  width: { sm: "90%" },
};

export const title = {
  color: Colors.blue,
  fontSize: { sm: 50, xs: 45 },
  textAlign: "center",
  fontWeight: 500,
  letterSpacing: 5,
  fontFamily: "DM Serif Display",
  mt: { md: 3, sm: 4, xs: 3 },
};

export const desc = {
  color: Colors.black,
  fontSize: { xs: 16 },
  fontFamily: "Poppins",
};

export const imgLaptop = {
  width: 650,
  maxHeight: 500,
  display: { xs: "none", sm: "block" },
  pr: 4,
  justifyContent: "left",
  alignItems: "center",
};

export const button = {
  mt: 1.5,
  color: Colors.white,
  backgroundColor: Colors.blue,
  borderRadius: 2,
  "&:hover": {
    backgroundColor: Colors.blue,
  },
  minWidth: 130,
  height: 40,
  fontSize: 16,
  textTransform: "capitalize",
  textDecoration: "none",
  fontFamily: "Poppins",
};

export const experienceName = {
  fontSize: { sm: 25, xs: 20 },
  fontWeight: "bold",
  fontFamily: "Poppins",
  letterSpacing: 2,
  color: Colors.darkGray,
};

export const imgMobile = {
  display: { xs: "block", sm: "none" },
  mt:1
};
