import React from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const ChatMessage = ({ message }) => (
  <View style={styles.chatBubble}>
    <Text style={styles.messageText}>{message}</Text>
  </View>
);

const ChatInterface = () => {
  const [messages, setMessages] = React.useState([
    "Hello everyone",
    "Hello everyone, how is everyone!!",
    "Hello everyone",
    "Hello everyone, how is everyone!!!",
    "Hello everyone",
  ]);

  return (
    <View style={styles.container}>
      {messages.map((message, index) => (
        <ChatMessage key={index} message={message} />
      ))}
      <TextInput style={styles.inputField} placeholder="Type a message" />
      <Button title="Send" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 10,
    width: "100vw",
  },
  chatBubble: {
    backgroundColor: "#444",
    borderRadius: 5,
    margin: 5,
    padding: 10,
  },
  messageText: {
    color: "#fff",
  },
  inputField: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    color: "#fff",
  },
});

export default ChatInterface;
