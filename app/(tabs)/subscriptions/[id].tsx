import {Text, View} from "react-native";
import {useLocalSearchParams} from "expo-router";

export default function SubScriptionDetails() {
    const { id } = useLocalSearchParams<{ id: string }>();
    return (
        <View className="flex-1 items-center justify-center bg-background">
            <Text>Subscription Details: { id }</Text>
        </View>
    )
};