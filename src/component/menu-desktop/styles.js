import Colors from "../../theme/Color";

export const containerMenu = {
  width: 60,
  minHeight: "100%",
  backgroundColor: Colors.darkGray,
  color: Colors.white,
  position: "fixed",
};

export const boxMenu = {
  position: "absolute",
  bottom: 0,
  pb: 4,
  justifyContent: "center",
  alignItems: "center",
};

export const gridMenu = {
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
};

export const buttonMenu = {
  color: Colors.white,
  minWidth: 12,
  "&:hover": {
    backgroundColor: Colors.white,
    color: Colors.darkGray,
  },
  justifyContent: "center",
  alignItems: "center",
};

export const icon = {
  fontSize: { md: 25 },
};
