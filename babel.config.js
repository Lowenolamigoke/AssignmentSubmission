module.exports = {
  presets: ['module:@react-native/babel-preset'],
  /**
   * IMPORTANT: react-native-reanimated/plugin must be the last item in the plugins array.
   * This plugin is essential for the drawer navigation animations to work correctly.
   */
  plugins: ['react-native-reanimated/plugin'],
};
