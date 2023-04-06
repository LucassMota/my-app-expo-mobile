import { IconButton, Provider as PaperProvider } from "react-native-paper";
import { useTheme } from "react-native-paper";
import { View } from "react-native";
import SignInPage from "./pages/SignInPage";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";
// import ProjectsList from "./pages/ProjectsList";
// import InitialPage from "./pages/InitialPage";
// import CreateAccount from "./pages/CreateAccount";
// import SuccessPage from "./pages/SuccessPage";
// import ForgotPasswordPage from "./pages/ForgotPasswordPage";
// import CreateNewPassword from "./pages/CreateNewPassword";

export default function App() {
  const theme = useTheme();

  return (
    <PaperProvider theme={theme}>
      <IconButton icon="arrow-left" style={{ marginTop: 20 }} />
      <View style={{ marginTop: 20, marginHorizontal: 20 }}>
        {/*<ProjectsList />*/}
        {/*<InitialPage />*/}
        {/*<CreateAccount />*/}
        {/*<SuccessPage />*/}
        {/*<ForgotPasswordPage />*/}
        {/*<CreateNewPassword />*/}
        {/*<SignInPage />*/}
        <ProjectDetailsPage />
      </View>
    </PaperProvider>
  );
}
