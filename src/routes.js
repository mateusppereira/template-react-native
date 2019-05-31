import React from "react"
import { Image } from "react-native"
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from "react-navigation";
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import Home from "./pages/Home"
import Tests from "./pages/Tests"
import Profile from "./pages/Profile"
import { Img } from "./elements"
import theme from "./theme";

const PrivateRoutes = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: ({ navigation }) => ({
        title: 'Inicio',
        header: null,
        tabBarIcon: () => (
          <Img
            height={20}
            width={20}
            source={require('./assets/home.png')}
          />
        )
      })
    },
    Tests: {
      screen: Tests,
      navigationOptions: ({ navigation }) => ({
        title: 'Provas',
        tabBarIcon: () => (
          <Img
            height={20}
            width={20}
            source={require('./assets/clipboard.png')}
          />
        )
      })
    },
    Profile: {
      screen: Profile,
      navigationOptions: ({ navigation }) => ({
        title: 'Perfil',
        tabBarIcon: () => (
          <Img
            height={20}
            width={20}
            source={require('./assets/user.png')}
          />
        )
      })
    },
  },
  {
    initialRouteName: 'Home',
    tabBarOptions: {
      activeTintColor: theme.primary,
      inactiveTintColor: theme.gray,
    },
  }
)

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
      navigationOptions: {
        header: null,
      }
    },
    PrivateRoutes: {
      screen: PrivateRoutes,
      navigationOptions: {
        header: null,
      }
    }
  },
  {
    initialRouteName: 'Login'
  }
);


export default createAppContainer(Routes);