import { ConfigContext, ExpoConfig } from "expo/config";

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: "island-health-app",
  slug: "island-health-app",
  updates: {
    url: "https://u.expo.dev/20ca376e-2584-4ba9-9ee6-e289e9012a4e",
  },
  extra: {
    eas: { projectId: "20ca376e-2584-4ba9-9ee6-e289e9012a4e" },
  },
});
