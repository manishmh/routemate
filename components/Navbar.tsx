import { View, Text, Image, TouchableOpacity } from "react-native";
import { FullWindowOverlay } from "react-native-screens";

export function Navbar() {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        backgroundColor: "#111111",
      }}
    >
      <View
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <Image
          source={require("./img/logoroutemate.png")}
          style={{ width: 50, height: 50 }}
        />
        <Text style={{ color: "#fff", fontSize: 20 }}>Routemate</Text>
      </View>

      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity onPress={() => {}}>
          <Image
            source={require("./img/bell.png")}
            style={{ width: 30, height: 30, marginRight: 10 }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Image
            source={require("./img/profile.png")}
            style={{ width: 30, height: 30 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
