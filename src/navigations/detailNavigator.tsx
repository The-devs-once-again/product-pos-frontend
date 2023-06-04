import { createStackNavigator } from "@react-navigation/stack";
import Features from "features";

const Stack = createStackNavigator();

const DetailNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ animationEnabled: false, headerStatusBarHeight: 0,}}>
      {Features.map((feature) => (
        <Stack.Screen
          key={feature.ViewName}
          name={feature.ViewName}
          component={feature.ViewComponent}
          options={{ headerLeft: () => null, headerTitle: feature.NavName }}
        />
      ))}
    </Stack.Navigator>
  );
};

export default DetailNavigator;
