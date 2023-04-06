import { Button, Text } from "react-native-paper";
import { View, Image } from "react-native";
export default function InitialPage() {
  return (
    <>
      <View>
        <Image
          style={{ height: 150, width: 150 }}
          source={{ uri: "https://reactnative.dev/img/header_logo.svg" }}
        ></Image>
      </View>
      <View
        style={{
          alignSelf: "center",
          flexDirection: "column",
          paddingHorizontal: 10,
        }}
      >
        <Text
          variant="headlineLarge"
          style={{ fontWeight: "bold", textAlign: "center" }}
        >
          Start by creating an account.
        </Text>
        <Button
          buttonColor={"#2C353D"}
          style={{
            borderRadius: 10,
            minWidth: "100%",
            height: 70,
            marginTop: 50,
            padding: 15,
          }}
          labelStyle={{
            textAlignVertical: "center",
            color: "#ffffff",
          }}
        >
          Sign up with email
        </Button>
        <Text
          variant="labelLarge"
          style={{ textAlign: "center", marginTop: 20 }}
        >
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
        <Text
          variant="labelLarge"
          style={{ textAlign: "center", marginTop: 20, color: "#c4c3c3" }}
        >
          By signing up you agree to our{"  "}
          <Text
            variant="labelLarge"
            style={{ textDecorationLine: "underline", color: "#c4c3c3" }}
          >
            Privacy Policy and Terms
          </Text>
        </Text>
      </View>
    </>
  );
}
