import React, { useState, useRef } from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Carousel from 'react-native-snap-carousel';

const sliderWidth = 300; // Adjust as needed
const itemWidth = 250; // Adjust as needed

// Define the type for carousel data
interface CarouselItem {
  title: string;
}

export default function HomeScreen() {

  const [entries, setEntries] = useState<CarouselItem[]>([
    { title: 'Item 1' },
    { title: 'Item 2' },
    { title: 'Item 3' },
  ]);

  const carouselRef = useRef<Carousel<CarouselItem>>(null);

  const renderItem = ({ item }: { item: CarouselItem }) => {
    return (
      <View style={styles.slide}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    );
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/sports.png')}
          style={styles.reactLogo}
        />
      }
      >

      <Carousel
        ref={carouselRef}
        data={entries}
        renderItem={renderItem}
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
      />
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 68,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  slide: {
    backgroundColor: '#ddd',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
