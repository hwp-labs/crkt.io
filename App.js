import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import { IconComponentProvider, Icon } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
//
import NewsStack from "./navigators/NewsStack";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <IconComponentProvider IconComponent={MaterialCommunityIcons}>
        <NewsStack />
      </IconComponentProvider>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
