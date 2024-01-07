import { View, Text, Image, TouchableOpacity } from "react-native";
import { FullWindowOverlay } from "react-native-screens";

// Define your group data with image paths
const groupData = [
  { id: 1, name: "Group 1", imagePath: require("./img/grouplogo.png") },
  { id: 2, name: "Group 2", imagePath: require("./img/grouplogo.png") },
  { id: 3, name: "Group 3", imagePath: require("./img/grouplogo.png") },
];

export function Groups() {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        backgroundColor: "#111111",
      }}
    >
      {groupData.map((group) => (
        <TouchableOpacity key={group.id}>
          <Image
            source={group.imagePath}
            style={{ width: 50, height: 50 }} // adjust the size as needed
          />
          <Text>{group.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
