import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BookInfoScreen from "./app/Pages/BookInfo";
import BarcodeScreen from "./app/Pages/BarcodeScreen";
import HomeScreen from "./app/Pages/HomeScreen";

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Livro Livre" }}
        />
        <Stack.Screen
          name="Barcode"
          component={BarcodeScreen}
          options={{ title: "Ler código" }}
        />
        <Stack.Screen
          name="Result"
          component={BookInfoScreen}
          options={{ title: "Livro encontrado" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator();
