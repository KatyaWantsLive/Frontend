import { View } from "react-native";
import stylesApp from "./styleApp";
import LoginAndRegMain from "./pages/LoginAndRegistration/Components/LoginAndRegMain"; 
import Main from "./pages/Main/Components/Main";


const App = () => {
  return ( 
    <View style={stylesApp.continer}>
      <LoginAndRegMain />
    </View>
  )
}

export default App