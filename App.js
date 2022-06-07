import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Navigation from "./components/Navigation";
import { AuthProvider } from "./context/AuthContext";

const App = () => {
  return <Navigation />;
};

export default App;
