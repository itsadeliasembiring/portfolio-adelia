import Colors from "../../theme/Color";

export const containerHome = {
  width: "100%",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  mt: { xs: -7, md: 0 },
};

export const boxImage = {
  width: { xs: 180, sm: 230 },
  height: { xs: 180, sm: 230 },
  mb: 2,
  position: "relative",
  overflow: "hidden",
};

export const image = {
  width: "100%",
  height: "100%",
  position: "absolute",
  objectFit: "cover",
  zIndex: 2,
};
export const greeting = {
  color: Colors.black,
  fontFamily: "Poppins",
  fontSize: 21,
  lineHeight: 1.5,
  ml: -3,
};

export const title = {
  fontWeight: 400,
  letterSpacing: 10,
  fontFamily: "DM Serif Display",
  color: Colors.black,
  fontSize: {
    sm: 51,
    xs: 35,
  },
  lineHeight: { sm: 1, xs: 1.3 },
};

export const role = {
  color: Colors.blue,
  fontWeight: 600,
  fontFamily: "Poppins",
  fontSize: {
    sm: 37,
    xs: 22,
  },
};

export const desc = {
  color: Colors.black,
  fontSize: {
    sm: 22,
    xs: 16,
  },
  paddingX: 3,
  lineHeight: 1.2,
  fontFamily: "Poppins",
};

export const icon = {
  fontSize: { xs: 30, sm: 35 },
};
