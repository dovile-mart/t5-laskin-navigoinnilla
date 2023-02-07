import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CalculatorScreen from "./CalculatorScreen";
import HistoryScreen from "./HistoryScreen";

const Stack = createNativeStackNavigator();
console.log("latautuu");
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Calculator" component={CalculatorScreen} />

        <Stack.Screen name="History" component={HistoryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
