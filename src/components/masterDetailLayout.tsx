import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import { COLORS } from "constants/theme";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

const statusBarHeight = getStatusBarHeight();

interface ColumnProps {
  children: React.ReactNode;
  width?: number;
  backgroundColor?: string;
  flex?: number;
  paddingTop?: number;
}

interface Props {
  masterView: React.ReactElement;
  detailView: React.ReactElement;
  masterViewWidth: number;
  bgColors?: string[];
}

const styles = StyleSheet.create({
  styledView: {
    flex: 1,
    flexDirection: "row",
    alignItems: "stretch",
    height: "100%",
  },
  styledColumn: {
    paddingTop: statusBarHeight,
  },
  verticalDivider: {
    width: 0.5,
    height: "100%",
    backgroundColor: COLORS.gray[100],
  },
});

const Column: React.FC<ColumnProps> = ({
  children,
  width,
  backgroundColor,
  flex,
  paddingTop,
}) => {
  return (
    <View style={[styles.styledColumn, { width, backgroundColor, flex, paddingTop}]}>
      {children}
    </View>
  );
};

const MasterDetailLayout: React.FC<Props> = ({
  masterView,
  masterViewWidth,
  detailView,
  bgColors = [],
}) => {
  const masterBackroundColor = bgColors[0];
  const detailColumnBackground = bgColors[1];

  return (
    <View style={styles.styledView}>
      <Column
        width={masterViewWidth}
        backgroundColor={masterBackroundColor}
        paddingTop={70}
      >
        {masterView}
      </Column>
      <View style={styles.verticalDivider} />
      <Column
        backgroundColor={detailColumnBackground}
        flex={1}
        paddingTop={20}
      >
        {detailView}
      </Column>
    </View>
  );
};

export default MasterDetailLayout;
