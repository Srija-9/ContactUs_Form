import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Contact from ".components/Contact";

export default function App() {
  const Stack = createStackNavigator();

  let [fontsLoaded] = useFonts({
    Nunito_600SemiBold,
    
  });

return(
  <NavigationContainer>
      <Stack.Navigator initialRouteName="Contact">
          <Stack.Screen
                  name="Contact"
                  component={Contact}
                  options={{
                    headerTitleStyle: {
                      fontSize: 25,
                      fontFamily: "Nunito_600SemiBold",
                    },
                    headerTitleAlign: "center",
                  }}
                />
        </Stack.Navigator>
  </NavigationContainer>
);

}