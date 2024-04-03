import { View, Text } from "react-native";

export default function ItemLista(props) {
  return (
    <View>
      <Text>{props.item}</Text>
    </View>
  );
}
