import Colors from "../../theme/Color";

export const containerAbout = {
  width: "100%",
  height: "100%",
  display: { md: "flex", xs: "block" },
  alignItems: { md: "center" },
  justifyContent: { md: "center" },
  mt: { md: 0, xs: 7 },
};

export const title = {
  color: Colors.blue,
  fontSize: { sm: 53, xs: 45 },
  fontWeight: 500,
  letterSpacing: 5,
  fontFamily: "DM Serif Display",
};

export const desc = {
  color: Colors.black,
  fontSize: { xs: 16 },
  fontFamily: "Poppins",
};

export const img = { width: { xs: 250, sm: 350, md: 380 } };

export const button = {
  mt: 1.5,
  color: Colors.white,
  backgroundColor: Colors.blue,
  borderRadius: 2,
  "&:hover": {
    backgroundColor: Colors.blue,
  },
  minWidth: 40,
  height: 40,
  fontSize: 16,
  textTransform: "capitalize",
  textDecoration: "none",
  fontFamily: "Poppins",
};
