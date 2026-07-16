import "@/global.css"
import { Text, View } from "react-native";
import {Link} from "expo-router";

export default function App() {
    return (
        <View className="flex-1 items-center justify-center bg-background">
            <Text className="text-xl font-bold text-success">
                Welcome to Nativewind!
            </Text>
            <Link href="/(auth)/sign-in" className="bg-primary text-white m-2 p-2 rounded-lg">Sign In</Link>
            <Link href="/(auth)/sign-up" className="bg-primary text-white m-2 p-2 rounded-lg">Sign Up</Link>

            <Link href="/(tabs)/insights" className="bg-primary text-white m-2 p-2 rounded-lg">Insights</Link>
            <Link href="/(tabs)/settings" className="bg-primary text-white m-2 p-2 rounded-lg">Settings</Link>
            <Link href="/(tabs)/subscriptions" className="bg-primary text-white m-2 p-2 rounded-lg">Subscriptions</Link>

            <Link href="/(tabs)/subscriptions/spotify" className="bg-primary text-white m-2 p-2 rounded-lg">Spotify Subscription</Link>
            <Link href="/(tabs)/subscriptions/netflix" className="bg-primary text-white m-2 p-2 rounded-lg">Netflix Subscription</Link>
        </View>
    );
}