import { Pressable, PressableProps, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

type Props = PressableProps & {
    data: {
        name: string,
        email: string,
        phone: string,
        city: string,
        state: string
    },
    onDelete: () => void,
    onPress: () => void
};

export function CustomerCard({ data, onDelete, onPress, ...rest }: Props) {
    return (
        <Pressable
            onPress={onPress}
            style={{
                backgroundColor: "#CECECE",
                padding: 24,
                borderRadius: 5,
                gap: 12,
                flexDirection: "row",
            }}
            {...rest}
        >
            <Text style={{ flex: 1 }}>
                {data.name}
            </Text>

            <TouchableOpacity onPress={onDelete}>
                <MaterialIcons name="delete" size={24} color="red" />
            </TouchableOpacity>
        </Pressable>
    );
}