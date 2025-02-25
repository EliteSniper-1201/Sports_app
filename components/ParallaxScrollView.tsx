import type { PropsWithChildren, ReactElement } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from 'react-native-reanimated';
import { TouchableOpacity } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { useBottomTabOverflow } from '@/components/ui/TabBarBackground';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Image, TextInput } from 'react-native';
import { NbaView } from '@/components/NbaView';

const HEADER_HEIGHT = 68;

type Props = PropsWithChildren<{
  headerImage: ReactElement;
  headerBackgroundColor: { dark: string; light: string };
}>;

export default function ParallaxScrollView({
  children,
  headerImage,
  headerBackgroundColor,
}: Props) {
  const colorScheme = useColorScheme() ?? 'light';
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);
  const bottom = useBottomTabOverflow();

  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
            [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75]
          ),
        },
        {
          scale: interpolate(scrollOffset.value, [-HEADER_HEIGHT, 0, HEADER_HEIGHT], [2, 1, 1]),
        },
      ],
    };
  });


  return (
    <ThemedView style={styles.container}>
      <Animated.ScrollView
        ref={scrollRef}
        scrollEventThrottle={16}
        scrollIndicatorInsets={{ bottom }}
        contentContainerStyle={{ paddingBottom: bottom }}>
        <Animated.View
          style={[
            styles.header,,
            headerAnimatedStyle,
          ]}>
          <Animated.Text style={styles.headerText}>SPORTS</Animated.Text>
          <Animated.View style={styles.iconWrap}>
            <Animated.Image source={require('@/assets/images/bell.png')} style={styles.headerIcons}></Animated.Image>
            <Animated.Image source={require('@/assets/images/library.png')} style={styles.headerIcons}></Animated.Image>
            <Animated.Image source={require('@/assets/images/user.png')} style={styles.headerIcons}></Animated.Image>
          </Animated.View>
        </Animated.View>
        <View>
          <Image 
           source={require('@/assets/images/Stimi.png')}
           style={styles.topImg1}
          />
          <View style={styles.searchContainer}>
            <Image
            source={require('@/assets/images/magni.png')}
            style={styles.searchIcon}
            height={20}
            width={20}
            />
            <TextInput
            style={styles.searchInput}
            placeholder="Search..."
            placeholderTextColor="#888"
            />
          </View>
          <View style ={styles.scrollBar}>
           <Image
            source={require('@/assets/images/ball.png')}
            style={styles.topImg2}
            />
          </View>
          <View style = {styles.viewList}>
            <Image
            source={require('@/assets/images/live.png')}
            style={styles.live}/>
             <View style= {styles.section1}>
              <Text style= {styles.text1}>Live Sports</Text>
              <Text style= {styles.text1}>View All</Text>
             </View>
          </View>
        </View> 
        <ThemedView style={styles.content}>{children}</ThemedView>
        <View style ={styles.bettingCardList}>
        </View>
      </Animated.ScrollView>
    </ThemedView> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: HEADER_HEIGHT,
    marginTop: 60,
    marginBottom: 12,
    overflow: 'hidden',
    flex: 1,
    paddingLeft: 16,
    paddingRight: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 32,
    fontFamily: 'Joyride',
    fontWeight: '400',
    color: '#ffffff',
  },
  iconWrap: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  headerIcons: {
    height: 40,
    width: 40,
    marginRight: 8,
  },
  content: {
    flex: 1,
    gap: 16,
    overflow: 'hidden',
  },
  topImg1: {
    width: '100%',
    height: 60,
  },
  topImg2: {
    width: '100%',
    height: 93,
  },
  reactLogo: {
    height: 68,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 6,
    backgroundColor: '#2B2E33',
    margin: 16,
  },
  searchIcon: {
    marginLeft: 10,
    color: "#888",
  },
  searchInput: {
    color: '#FFF',
    paddingVertical: 10, 
    fontSize: 16,
  },
  scrollBar: {
    width:'100%',
    height: 80,
    alignItems: 'center', // Center content if needed
    justifyContent: 'center',
  },
  viewList: {
    width: '100%', // Adjust width if necessary
    height: 'auto', // Adjust height dynamically
    margin: 16, // Reduce spacing
    flexDirection: 'row',
    alignItems: 'center',
  },
  live: {
    width: 24,
    height:24
  },
  section1: {
    width: '88%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 3.5,
    paddingHorizontal: 6
  },
  text1: {
    color: '#FFF',
    fontSize: 14,
    fontFamily: 'Inter',
    fontWeight: 700,
    lineHeight: 16.94,
  },
  bettingCardList: {
    width: '100% - 16px',
    height: 964,
    flexDirection: 'column',
    alignItems: 'center',
    alignSelf: 'stretch',
    margin: 16,
    borderRadius: 8,
    backgroundColor: '#1B1E23',
  },
});
