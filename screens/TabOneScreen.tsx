import * as React from 'react';
import { StyleSheet, Image, Dimensions, ImageProps } from 'react-native';
import { Video } from 'expo-av';
import LayerMask from '../components/LayerMask';

import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';


export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {

  const video = React.useRef(null);
  const [status, setStatus] = React.useState({ status: 'initializing' });
  // const [logoWhite, bgVideo]: any[] = useAssets([require('./../assets/images/logo-white.png'), require('./../assets/images/background-video.mp4')]);


  return (
    <View
      style={styles.container}
    >
      <Video
        ref={video}
        style={styles.bgVideo}
        source={require('./../assets/images/background-video.mp4')}
        useNativeControls={false}
        resizeMode="cover"
        shouldPlay
        isLooping
        onPlaybackStatusUpdate={(status: any) => setStatus(() => status)}
      />
      <LayerMask/>
      <View
        style={styles.banner}
      >
        <Image
          style={styles.bgImage}
          source={require('./../assets/images/logo-white.png')}
        />
      </View>
      <Text style={styles.title}>
        Contact
      </Text>

      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
    </View>
  );
}
const { height, width } = Dimensions.get("window");

const styles: any = StyleSheet.create({
  banner: {
    width: width,
    height: '25%',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'rgb(255,255,255)',
  },
  bgVideo: {
    position: 'absolute',
    width: width,
    alignItems: "stretch",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  bgImage: {
    display: 'flex',
    height: '100%',
    width: '100%',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  }
});
