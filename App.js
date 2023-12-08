import { View } from "react-native";
import stylesApp from "./styleApp";
import LoginAndRegMain from "./pages/LoginAndRegistration/Components/LoginAndRegMain"; 
import Main from "./pages/Main/Components/Main";
import MainProfile from "./pages/Profile/Components/Mainprofile";


const App = () => {
  return ( 
    <View style={stylesApp.continer}>
      <MainProfile />
    </View>
  )
}

export default App