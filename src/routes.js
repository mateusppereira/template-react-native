import { createStackNavigator, createAppContainer } from "react-navigation";
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"

const Routes = createStackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: {
        header: null,
      }
    },
    SignUp: {
      screen: SignUp,
    }
  },
  {
    initialRouteName: 'Login'
  }
);

export default createAppContainer(Routes);