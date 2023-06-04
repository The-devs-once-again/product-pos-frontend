import { useNavigation } from "@react-navigation/native";
import { View, TouchableOpacity } from "react-native";
import Typography from "../typography";
import Views from "views";

const Sidebar = () => {
  const navigation = useNavigation();

  return (
    <View>
      {Views.map((view) => (
        <TouchableOpacity
          onPress={() => navigation.navigate(view.ViewName)}
          key={view.ViewName}
        >
          <Typography.headlineSmall>{view.ViewName}</Typography.headlineSmall>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Sidebar;
