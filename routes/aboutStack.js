import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import About from "../screens/about";

const Stack = createNativeStackNavigator();

function AboutStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group
          screenOptions={{
            headerTintColor: "#444",
            headerStyle: { backgroundColor: "#eee", height: 60 },
          }}
        >
          <Stack.Screen
            name="About"
            component={About}
            options={{ title: "About GameZone" }}
          />

        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AboutStack;
