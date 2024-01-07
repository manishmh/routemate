import { Link } from "expo-router";
import { Text, View } from "../../components/Themed";
import { Navbar } from "@/components/Navbar";
import { Groups } from "@/components/Groups";
import ChatInterface from "@/components/Chat";
export default function Index() {
  return (
    <View>
      <Link href={"/(modals)/login"}>
        <Navbar />
      </Link>
      <Link href={"/(modals)/searching"}>
        <Groups />
      </Link>
      <Link href={"/listing/233"}>
        <ChatInterface />
      </Link>
    </View>
  );
}
