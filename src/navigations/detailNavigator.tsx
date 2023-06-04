import { createStackNavigator } from "@react-navigation/stack";
import Views from "views";

const Stack = createStackNavigator();

const DetailNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ animationEnabled: false, headerStatusBarHeight: 0,}}>
      {Views.map((view) => (
        <Stack.Screen
          key={view.ViewName}
          name={view.ViewName}
          component={view.ViewComponent}
          options={{ headerLeft: () => null, headerTitle: view.ViewName }}
        />
      ))}
    </Stack.Navigator>
  );
};

export default DetailNavigator;
