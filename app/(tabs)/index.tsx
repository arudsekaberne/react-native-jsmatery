import "@/global.css";
import { Link } from "expo-router";
import { styled } from "nativewind";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

const App = () => {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <Text className="text-5xl font-sans-bold">Home</Text>
      <Link
        href="/(auth)/sign-in"
        className="bg-primary text-white font-sans-bold my-2 p-4 rounded-lg"
      >
        Go to Sign in
      </Link>
      <Link
        href="/(auth)/sign-up"
        className="bg-primary text-white font-sans-bold my-2 p-4 rounded-lg"
      >
        Go to Sign up
      </Link>
    </SafeAreaView>
  );
};

export default App;
