module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: ['react-native-reanimated/plugin', 'module:react-native-dotenv'],
  env: {
    production: {
      plugins: ['transform-remove-console'],
    },
  },
};

// BASIC:
// 399 - * 12   = ~4.8K Monthly
// 299 -  * 12  = ~3.6K Biannual
// 149 - * 12   = ~1.8K Annual

// PREMIUM:
// 499 - * 12   = ~6K   Monthly
// 399 -  * 12  = ~4.8K Biannual
// 249 - * 12   = ~3K   Annual

// Basic
// - Up to 5 PAPs only
// Customer support: M-F 8AM-5PM only

// Premium
// - Offline Features
// - 24/7 Customer Support
// - Unlimited PAPs

// TRIAL: Use all premium features but data will not be persisted
