import { StyleSheet } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  withSequence,
} from 'react-native-reanimated';

import { ThemedText } from '@/components/ThemedTฟimport React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'nativewind';
import { Switch, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { styled } from 'nativewind';
import { Ionicons } from '@expo/vector-icons';

// Create styled components
const StyledView = styled(View);
const StyledText = styled(Text);
const StyledScrollView = styled(ScrollView);
const StyledTouchableOpacity = styled(TouchableOpacity);

export default function App() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const [activeTab, setActiveTab] = useState('home');

  const TabButton = ({ name, icon }) => (
    <StyledTouchableOpacity
      className={`flex-1 items-center py-2 ${activeTab === name ? 'bg-sky-500 dark:bg-emerald-500' : ''}`}
      onPress={() => setActiveTab(name)}
    >
      <Ionicons name={icon} size={24} color={colorScheme === 'dark' ? 'white' : 'black'} />
      <StyledText className="mt-1 text-xs dark:text-white">{name.charAt(0).toUpperCase() + name.slice(1)}</StyledText>
    </StyledTouchableOpacity>
  );

  return (
    <StyledView className="flex-1 dark:bg-neutral-900">
      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
      
      {/* Header */}
      <StyledView className="bg-sky-500 dark:bg-emerald-500 p-4 flex-row justify-between items-center">
        <StyledText className="text-2xl font-bold text-white">My App</StyledText>
        <Switch value={colorScheme === 'dark'} onChange={toggleColorScheme} />
      </StyledView>
      
      {/* Content */}
      <StyledScrollView className="flex-1 p-4">
        <StyledText className="text-xl font-semibold mb-4 dark:text-white">Welcome to My App!</StyledText>
        <StyledText className="mb-4 text-justify dark:text-white">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </StyledText>
        <StyledView className="h-48 w-full bg-sky-400 dark:bg-emerald-400 rounded-lg mb-4" />
        <StyledText className="text-lg font-semibold mb-2 dark:text-white">Features:</StyledText>
        {['Feature 1', 'Feature 2', 'Feature 3'].map((feature, index) => (
          <StyledView key={index} className="flex-row items-center mb-2">
            <Ionicons name="checkmark-circle" size={24} color={colorScheme === 'dark' ? '#10b981' : '#0ea5e9'} />
            <StyledText className="ml-2 dark:text-white">{feature}</StyledText>
          </StyledView>
        ))}
      </StyledScrollView>
      
      {/* Tab Bar */}
      <StyledView className="flex-row bg-gray-200 dark:bg-neutral-800">
        <TabButton name="home" icon="home" />
        <TabButton name="search" icon="search" />
        <TabButton name="settings" icon="settings" />
      </StyledView>
    </StyledView>
  );
}ext';

export function HelloWave() {
  const rotationAnimation = useSharedValue(0);

  rotationAnimation.value = withRepeat(
    withSequence(withTiming(25, { duration: 150 }), withTiming(0, { duration: 150 })),
    4 // Run the animation 4 times
  );

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotationAnimation.value}deg` }],
  }));

  return (
    <Animated.View style={animatedStyle}>
      <ThemedText style={styles.text}>❤️🤟🏻</ThemedText>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 28,
    lineHeight: 32,
    marginTop: -6,
  },
});
