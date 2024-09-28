import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'nativewind';
import { Text, View, TouchableOpacity } from 'react-native';
import { styled } from 'nativewind';

// Create styled components
const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTouchableOpacity = styled(TouchableOpacity);

const DarkModeToggle = ({ isDark, onToggle }) => (
  <StyledTouchableOpacity
    onPress={onToggle}
    className="flex-row items-center bg-gray-200 dark:bg-gray-700 p-1 rounded-full w-20 h-10"
  >
    <StyledView 
      className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out transform ${
        isDark ? 'translate-x-10 bg-gray-800' : 'translate-x-0 bg-white'
      }`}
    >
      <StyledText className={isDark ? 'text-gray-200' : 'text-yellow-400'}>
        {isDark ? '🌙' : '☀️'}
      </StyledText>
    </StyledView>
  </StyledTouchableOpacity>
);

export default function App() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <StyledView className="flex-1 bg-gray-100 dark:bg-neutral-900">
      <StatusBar style={isDark ? "light" : "dark"} />
      
      <StyledView className="flex-1 justify-center items-center">
        <StyledView className="items-center space-y-4">
          <DarkModeToggle isDark={isDark} onToggle={toggleColorScheme} />
          <StyledText className="text-center text-lg font-semibold text-gray-800 dark:text-gray-200">
            {isDark ? 'Dark Mode' : 'Light Mode'}
          </StyledText>
        </StyledView>
      </StyledView>
      
      <StyledView className="flex-1 justify-center items-center px-4">
        <StyledText className="text-center mb-8 text-gray-700 dark:text-gray-300">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
        </StyledText>
        
        <StyledView className="h-40 w-full bg-gradient-to-r from-blue-400 to-purple-500 dark:from-indigo-500 dark:to-purple-600 rounded-lg shadow-lg" />
      </StyledView>
    </StyledView>
  );
}