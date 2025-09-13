module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      // Enables file-based routing transforms for expo-router
      require.resolve("expo-router/babel"),
      // Reanimated plugin must be listed last
      "react-native-reanimated/plugin",
    ],
  };
};

