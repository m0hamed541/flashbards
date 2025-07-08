import { useFonts } from "expo-font";
import { Stack } from "expo-router";

import { Suspense, useEffect, useState } from "react";
import { ActivityIndicator, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "../constants/global.css";

import { SQLiteProvider } from "expo-sqlite";

import { DATABASE_NAME, initializeDatabase } from "@/database/client";

export default function RootLayout() {
  // Use the hook correctly at the top level
  const [fontsLoaded, fontsError] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  const [dbReady, setDbReady] = useState(false);
  const [dbError, setDbError] = useState<string | null>(null);

  // Initialize database independently of fonts
  useEffect(() => {
    const initDb = async () => {
      try {
        await initializeDatabase(setDbReady, setDbError);
      } catch (err) {
        console.error("Database initialization error:", err);
        setDbError(err instanceof Error ? err.message : "Unknown database error");
      }
    };
    initDb();
  }, []);

  // Handle font loading errors
  if (fontsError) {
    console.error("Font loading error:", fontsError);
  }

  // Show loading screen while fonts or database are loading
  if (!fontsLoaded || !dbReady) {

    return (
      <SafeAreaView
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <ActivityIndicator size="large" />
        <Text style={{ marginTop: 10 }}>
          {!fontsLoaded ? "Loading fonts..." : "Initializing database..."}
        </Text>
        {(fontsError || dbError) && (
          <Text style={{ color: "red", textAlign: "center", marginTop: 10 }}>
            Error: {fontsError?.message || dbError}
          </Text>
        )}
      </SafeAreaView>
    );
  }

  return (
    <Suspense fallback={<ActivityIndicator size="large" />}>
      <SQLiteProvider
        databaseName={DATABASE_NAME}
        options={{ enableChangeListener: true }}
        useSuspense
      >
        <SafeAreaView style={{ flex: 1 }}>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          </Stack>
        </SafeAreaView>
      </SQLiteProvider>
    </Suspense>
  );
}