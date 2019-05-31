import React from "react";
import { createAppContainer, createBottomTabNavigator, createStackNavigator } from "react-navigation";
import { Img } from "./elements";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
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
    Home2: {
      screen: Home,
      navigationOptions: ({ navigation }) => ({
        title: 'Inicio2',
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
    Home3: {
      screen: Home,
      navigationOptions: ({ navigation }) => ({
        title: 'Inicio3',
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
  },
  {
    initialRouteName: 'Home',
    tabBarOptions: {
      activeTintColor: theme.black,
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