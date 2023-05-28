import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
//
import NewsStack from "./navigators/NewsStack";
import styles from "./App.module";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NewsStack />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
