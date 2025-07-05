import { Pressable, PressableProps, Text } from "react-native";

type Props = PressableProps & {
    data: {
        name: string,
        email: string,
        phone: string,
        city: string,
        state: string
    }
}

export function CustomerCard({ data, ...rest }: Props) {
    return (
        <Pressable
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
        </Pressable>
    );
}