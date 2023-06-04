import { COLORS } from "constants/theme";
import React, { ReactNode } from "react";
import { View, ViewStyle } from "react-native";

interface ViewContainer {
  children: ReactNode;
  backgroundColor?: string;
  justifyContent?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly";
  alignItems?: "flex-start" | "flex-end" | "center" | "stretch" | "baseline";
}

const ViewContainer = ({
  children,
  justifyContent = "center",
  alignItems = "center",
  backgroundColor = COLORS.white[50],
}: ViewContainer) => {
  const viewStyle: ViewStyle = { flex: 1, backgroundColor, justifyContent, alignItems };
  return <View style={viewStyle}>{children}</View>;
};

export default ViewContainer;
