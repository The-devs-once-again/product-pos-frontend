import { NavigationContainer } from "@react-navigation/native";
import MasterDetailLayout from "components/masterDetailLayout";
import Sidebar from "components/sidebar/sideBar";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import DetailNavigator from "navigations/detailNavigator";
import { useCallback } from "react";
import { StyleSheet, View } from "react-native";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    InterBlack: require("./src/assets/fonts/Inter-Black.ttf"),
    InterExtraBold: require("./src/assets/fonts/Inter-ExtraBold.ttf"),
    InterBold: require("./src/assets/fonts/Inter-Bold.ttf"),
    InterSemiBold: require("./src/assets/fonts/Inter-SemiBold.ttf"),
    InterMedium: require("./src/assets/fonts/Inter-Medium.ttf"),
    InterRegular: require("./src/assets/fonts/Inter-Regular.ttf"),
    InterLight: require("./src/assets/fonts/Inter-Light.ttf"),
    InterExtraLight: require("./src/assets/fonts/Inter-ExtraLight.ttf"),
    InterThin: require("./src/assets/fonts/Inter-Thin.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <View style={styles.container} onLayout={onLayoutRootView}>
        <StatusBar style="auto" />
        <MasterDetailLayout
          masterViewWidth={215}
          masterView={<Sidebar />}
          detailView={
            <DetailNavigator />
          }
        />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
