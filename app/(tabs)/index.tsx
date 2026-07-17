import "@/global.css";
import { Link } from "expo-router";
import { styled } from "nativewind";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

const App = () => {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <Text className="text-xl font-bold text-success">
        Welcome to Nativewind!
      </Text>
      <Link
        href="/(auth)/sign-in"
        className="bg-primary text-white m-2 p-2 rounded-lg"
      >
        Sign In
      </Link>
      <Link
        href="/(auth)/sign-up"
        className="bg-primary text-white m-2 p-2 rounded-lg"
      >
        Sign Up
      </Link>
    </SafeAreaView>
  );
};

export default App;
