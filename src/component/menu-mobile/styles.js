import Colors from "../../theme/Color";

export const containerMenu = {
  width: "100%",
  height: "9vh",
  backgroundColor: Colors.darkGray,
  position: "fixed",
  zIndex: 2,
  bottom: 0,
  left: 0,
  right: 0,
  justifyContent: "center",
  alignItems: "center",
};

export const gridMenu = {
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: 1,
};

export const buttonMenu = {
  minWidth: { xs: 55, sm: 100 },
  color: Colors.white,
  "&:hover": {
    backgroundColor: Colors.white,
    color: Colors.darkGray,
  },
};

export const icon = {
  fontSize: { xs: 25, sm: 40 },
};
