import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, Image } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: {
          backgroundColor: '#101216', // Set background color here
          position: 'absolute', // Keeps it floating on iOS
          borderTopWidth: 1, // Optional: Removes top border
          borderTopColor: '#F3F3F31A',
          paddingBottom: 12,
          height: 64,
        },
        tabBarLabelStyle: {
          fontSize: 13, // Adjust font size
          fontWeight: '500',
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Sports',
          tabBarIcon: ({ color }) => <Image source={require('@/assets/images/sports.png')} style={{ width: 18, height: 18, tintColor: color }} />,
        }}
      />
      <Tabs.Screen
        name="featured"
        options={{
          title: 'Featured',
          tabBarIcon: ({ color }) => <Image source={require('@/assets/images/featured.png')} style={{ width: 18, height: 18, tintColor: color }} />,
        }}
      />
      <Tabs.Screen
        name="mybets"
        options={{
          title: 'My bets',
          tabBarIcon: ({ color }) => <Image source={require('@/assets/images/mybets.png')} style={{ width: 18, height: 18, tintColor: color }} />,
        }}
      />
      <Tabs.Screen
        name="social"
        options={{
          title: 'Social',
          tabBarIcon: ({ color }) => <Image source={require('@/assets/images/social.png')} style={{ width: 18, height: 18, tintColor: color }} />,
        }}
      />
      <Tabs.Screen
        name="reward"
        options={{
          title: 'Reward',
          tabBarIcon: ({ color }) => <Image source={require('@/assets/images/reward.png')} style={{ width: 18, height: 18, tintColor: color }} />
        }}
      />
    </Tabs>
  );
}
