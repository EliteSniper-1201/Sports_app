import React, { useState, useRef } from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Carousel from 'react-native-snap-carousel';
import { SlideOutLeft } from 'react-native-reanimated';
import { TouchableOpacity } from 'react-native';


const sliderWidth = 408; // Adjust as needed
const itemWidth = 324; // Adjust as needed

// Define the type for carousel data
interface CarouselItem {
  title: string;
}

export default function HomeScreen() {

  const [entries, setEntries] = useState<CarouselItem[]>([
    { title: 'League or Rournament name' },
    { title: 'League or Rournament name' },
    { title: 'League or Rournament name' },
  ]);

  const handleBet = (matchTitle: string) => {
    console.log(`Bet placed on: ${matchTitle}`);
  };

  const carouselRef = useRef<Carousel<CarouselItem>>(null);

  const renderItem = ({ item }: { item: CarouselItem }) => {
    return (
      <View style={styles.slide}>
        <Image
          source={require('@/assets/images/League.png')}
          style={styles.layimg}
        />
        <View style={styles.titleRow}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.time}>18 min left</Text>
        </View>
        <View style={styles.titleRow}>
          <Text style={styles.text}>Aldenaire vs Wardiere</Text>
        </View>
        <TouchableOpacity style={styles.betButton} onPress={() => handleBet(item.title)}>
          <View style={styles.betButtonTextLay}>
            <Text style={styles.betButtonText}>Place Your Bet</Text>
            <Image source={require('@/assets/images/less.png')}
                   style={styles.buttonlogo}
            />
          </View>
        </TouchableOpacity>
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
    height: 181,
    backgroundColor: '#1B1E23',
    borderRadius: 8,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  titleRow: {
    flexDirection: 'row', // Arrange items in a row
    justifyContent: 'space-between', // Space between title and time
    alignItems: 'center', // Align vertically
    width: '100%', // Full width
    paddingHorizontal: 10, // Padding for spacing
  },
  title: {
    fontSize: 14,
    fontFamily: 'Inter',
    fontWeight: 500,
    lineHeight: 16.94,
    display: 'flex',
    color: '#FFFFFF',
  },
  time: {
    fontSize: 12,
    fontFamily: 'Inter',
    fontWeight: 400,
    lineHeight: 16,
    display: 'flex',
    color: '#FFFFFFCC',
  },
  text: {
    fontFamily: 'Inter',
    fontWeight: 500,
    fontSize: 12,
    color: '#FFFFFF',
  },
  layimg: {
    width: 324,
    borderTopRightRadius:8,
    borderTopLeftRadius:8,
    height: 80,
  },
  betButton: {
    backgroundColor: '#2B2E33',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: 10,
    height: 33,
  },
  betButtonTextLay: {
    flexDirection: 'row',
    width: 96,
    height: 17,
  },
  betButtonText: {
    color: '#FFFFFF', // White text color
    fontSize: 14,
    lineHeight: 16.94,
    fontFamily: 'Inter',
    fontWeight: 500,
  },
  buttonlogo: {
    width: 16,
    height: 16,
  },
});
