export default ({ config }) => ({
  ...config,
  icon: 'https://github.com/expo/expo/blob/master/templates/expo-template-blank/assets/icon.png?raw=true',
  splash: {
    image:
      'https://github.com/expo/expo/blob/master/templates/expo-template-blank/assets/splash.png?raw=true',
  },
  scheme: 'naveed',
  android: {
    package: 'com.app.webredirective',
  },
});
