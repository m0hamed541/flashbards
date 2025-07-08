const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

// Add .sql to sourceExts (won't really help, but OK if you want)
config.resolver.sourceExts.push("sql");

// Wrap with NativeWind
const finalConfig = withNativeWind(config, { input: "./constants/global.css" });

module.exports = finalConfig;
