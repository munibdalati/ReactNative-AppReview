import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";

const Stack = createNativeStackNavigator();

function HomeStack() {
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
            name="Home"
            component={Home}
            options={{ title: "GameZone" }}
          />

          <Stack.Screen
            name="ReviewDetails"
            component={ReviewDetails}
            options={{ title: "Review Details" }}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default HomeStack;
