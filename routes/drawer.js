import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeStack from "./homeStack";
import AboutStack from "./aboutStack";
import { NavigationContainer } from "@react-navigation/native";
import About from "../screens/about";
import Home from "../screens/home";


const Drawer = createDrawerNavigator();

export default function myDrawer() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeStack} />
        <Drawer.Screen name="About" component={About} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
