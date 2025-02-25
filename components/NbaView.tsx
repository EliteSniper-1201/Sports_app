import { StyleSheet, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native';

type Props = PropsWithChildren<{
    headerBackgroundColor: { dark: string; light: string };
  }>;

export default function NbaView({
    children,
    headerBackgroundColor,
  }: Props){
    
    return (
        <View style= {styles.container}>
          <View style= {styles.nabHeader}>
            <Text>NBA</Text>
            <TouchableOpacity>POPULAR</TouchableOpacity>
          </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 408,
        height: 284,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    nabHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});