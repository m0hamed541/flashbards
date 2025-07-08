import { fetchCategories, fetchTopics } from "@/database/crud";
import { drizzle } from "drizzle-orm/expo-sqlite";
import { useSQLiteContext } from "expo-sqlite";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";
import IconedButton from "../../components/IconedButton";
import SectionHeader from "../../components/SectionHeader";
import Topic from "../../components/Topic";

const DATABASE_NAME = "flashcards.db";

const Home = () => {
  const expoDb = useSQLiteContext();
  const db = drizzle(expoDb);

  const [topicsList, setTopicsList] = useState([]);
  const [categoriesList, setCategoriesList] = useState({});
  const [topicCardCounts, setTopicCardCounts] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadTopics = async () => {
      try {
        setLoading(true);
        setError(null);

        const fetchedTopics = await fetchTopics(db, 3);
        const fetchedCategories = await fetchCategories(db);


        setTopicsList(fetchedTopics);

        let categories = {};
        fetchedCategories.forEach((category) => {
          categories[category.id] = category;
        });

        setCategoriesList(categories);
      } catch (err) {
        console.error("Error loading topics:", err);
        setError(err instanceof Error ? err.message : "Failed to load topics");
      } finally {
        setLoading(false);
      }
    };

    loadTopics();
  }, []);

  const stats = [
    { number: "34", label: "Studied cards", color: "bg-purple-100" },
    { number: "18", label: "Decks created", color: "bg-orange-100" },
  ];

  return (
    <ScrollView className="flex-1">
      {/* Header */}
      <SectionHeader title={"Home"} />

      {/* Stats Cards */}
      <View className="px-6 mb-8">
        <View className="flex-row gap-2">
          {stats.map((stat, index) => (
            <View
              key={index}
              className={`flex-1 ${stat.color} rounded-2xl p-4`}
            >
              <Text className="text-2xl font-bold text-gray-800">
                {stat.number}
              </Text>
              <Text className="text-sm text-gray-600 mt-1">{stat.label}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Topics Section */}
      <View className="px-6">
        <Text className="text-lg font-semibold text-gray-800 mb-4">Topics</Text>

        {loading ? (
          <View className="flex-1 justify-center items-center h-[300]">
            <ActivityIndicator size="large" color="#2196F3" />
            <Text className="mt-4 text-gray-600">Loading topics...</Text>
          </View>
        ) : error ? (
          <View className="flex-1 justify-center items-center h-[300]">
            <Text className="text-red-600 text-center">{error}</Text>
          </View>
        ) : topicsList.length === 0 ? (
          <View className="flex-1 justify-center items-center h-[300]">
            <Text className="text-gray-500 text-center">No topics found</Text>
          </View>
        ) : (
          <View className="gap-4">
            {topicsList.map((topic) => (
              <Topic
                key={topic.id}
                topic={topic}
                category={categoriesList[topic.categoryId]}
                cardCount={topicCardCounts[topic.id] || 0}
                onPress={() => console.log("Card pressed:", topic.title)}
              />
            ))}
          </View>
        )}
      </View>

      {/* Quick Actions */}
      <View className="px-6 py-8">
        <View className="flex-row gap-2">
          <IconedButton
            text="Create Deck"
            icon="plus"
            onPress={() => console.log("Create Deck")}
            bgColor="bg-blue-500"
            textColor="text-white"
            iconColor="white"
          />

          <IconedButton
            text="Study Now"
            icon="play"
            onPress={() => console.log("Study Now")}
            bgColor="bg-gray-200"
            textColor="text-gray-700"
            iconColor="#374151"
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;