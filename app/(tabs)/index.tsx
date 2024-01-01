import { Link } from "expo-router";
import { Text, View } from "../../components/Themed";

export default function Index() {
  return (
    <View>
      <Link href={"/(modals)/login"}>
        <Text>login</Text>
      </Link>
      <Link href={"/(modals)/searching"}>
        <Text>searching</Text>
      </Link>
      <Link href={"/listing/233"}>
        <Text>listing</Text>
      </Link>
    </View>
  );
}
