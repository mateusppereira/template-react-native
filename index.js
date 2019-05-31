import { AppRegistry, AppState } from 'react-native';
import { name as appName } from './app.json';
import App from './src';

AppState.addEventListener('change', () => {})

AppRegistry.registerComponent(appName, () => App);
