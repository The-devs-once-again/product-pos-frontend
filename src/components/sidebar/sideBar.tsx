import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import Features from "features";
import { SideButton } from "./sideButton";
import { useAtom } from "jotai";
import { activeNavAtom } from "atoms/store";

const Sidebar = () => {
  const navigation = useNavigation();
  const [activeNav, setActiveNav] = useAtom(activeNavAtom);

  const handleNavPress = (viewName: string) => {
    setActiveNav(viewName);
    navigation.navigate(viewName);
  };

  return (
    <View>
      {/* Logo */}
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <Image
          style={{ width: 120, height: 100 }}
          resizeMode="center"
          source={require("@assets/images/Flexi-logo.png")}
        />
      </View>
      {Features.map((feature) => (
        <TouchableOpacity
          onPress={() => handleNavPress(feature.ViewName)}
          key={feature.ViewName}
        >
          <SideButton
            buttonName={feature.NavName}
            buttonIcon={feature.NavIcon}
            isActive={activeNav === feature.ViewName}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Sidebar;
