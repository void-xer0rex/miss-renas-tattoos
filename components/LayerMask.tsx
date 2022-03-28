
import { Dimensions, StyleSheet } from 'react-native';

import { View } from '../components/Themed';

export default function LayerMask() {
  return (<View style={styles.container}/>);
}
const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: 'rgba(140,120,120,0.3)',
    height,
    width,
  },
});
