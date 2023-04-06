import { Button, IconButton, Text } from "react-native-paper";
import { View, Image } from "react-native";

export default function SuccessPage() {
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
        }}
      >
        <Text
          variant="headlineLarge"
          style={{ fontWeight: "bold", textAlign: "center" }}
        >
          Success!
        </Text>
        <Text
          variant="titleLarge"
          style={{ textAlign: "center", marginTop: 20 }}
        >
          Now check your email for a confirmation link.
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
          Back to sign in
        </Button>
        <Text
          variant="labelLarge"
          style={{ textAlign: "center", marginTop: 60 }}
        >
          Didn't receive it?{"  "}
          <Text
            variant="labelLarge"
            style={{ textDecorationLine: "underline" }}
          >
            Resend Email
          </Text>
        </Text>
      </View>
    </>
  );
}
