import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import NewsScreen from "../screens/News";
import ArticleScreen from "../screens/Article";
import { APP, COLOR } from "../utils/constants";

const Stack = createNativeStackNavigator();

export default function NewsStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          // headerShown: false,
          headerStyle: {
            backgroundColor: COLOR.yellow,
          },
          headerTintColor: '#000',
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="News"
          component={NewsScreen}
          options={{ title: APP.name }}
        />
        <Stack.Screen name="Article" component={ArticleScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
