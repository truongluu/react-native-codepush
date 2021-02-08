/**
 * @format
 */

import {AppRegistry} from 'react-native';
import CodePush from 'react-native-code-push';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () =>
  CodePush({
    updateDialog: true,
    installMode: CodePush.InstallMode.IMMEDIATE,
    checkFrequency: CodePush.CheckFrequency.ON_APP_START,
  })(App),
);
