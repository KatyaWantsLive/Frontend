import { View } from "react-native";
import stylesApp from "./styleApp";
import LoginAndRegMain from "./pages/LoginAndRegistration/Components/LoginAndRegMain"; 


const App = () => {
  return ( 
    <View style={stylesApp.continer}>
      <LoginAndRegMain />
    </View>
  )
}

export default App