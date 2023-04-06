import { Button, Text, TextInput } from "react-native-paper";
import { View } from "react-native";

export default function CreateNewPassword() {
  return (
    <View>
      <Text
        variant="headlineLarge"
        style={{ fontWeight: "bold", textAlign: "center", marginBottom: 50 }}
      >
        Create a new password
      </Text>
      <TextInput
        style={{ height: 70 }}
        mode="outlined"
        activeOutlineColor="#000000FF"
        label="New password"
      ></TextInput>
      <TextInput
        style={{ height: 70 }}
        mode="outlined"
        activeOutlineColor="#000000FF"
        label="Repeat new password"
      ></TextInput>
      <Button
        buttonColor={"#2C353D"}
        style={{
          borderRadius: 10,
          minWidth: "100%",
          height: 70,
          marginTop: 10,
          padding: 15,
        }}
        labelStyle={{
          textAlignVertical: "center",
          color: "#ffffff",
        }}
      >
        Sign in
      </Button>
      <Text variant="labelLarge" style={{ textAlign: "center", marginTop: 20 }}>
        Already have an account?
        <Text
          variant="labelLarge"
          style={{
            color: "#094cb0",
          }}
        >
          {"     "}
          Sign in
        </Text>
      </Text>
    </View>
  );
}
