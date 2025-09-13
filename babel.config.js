module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      // Reanimated v4 on RN 0.81+ moved to the Worklets plugin
      // Keep this last in the list
      "react-native-worklets/plugin",
    ],
  };
};
