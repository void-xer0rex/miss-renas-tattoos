import * as React from 'react';
import { StyleSheet, Image, Dimensions } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  
  return (
    <View style={styles.container}>
       <Video
        ref={video}
        style={styles.bgVideo}
        source={require('./../assets/images/background-video.mp4')}
        useNativeControls={false}
        resizeMode="cover"
        shouldPlay={true}
        isLooping
        onPlaybackStatusUpdate={(status: any) => setStatus(() => status)}
      />
      <View style={styles.banner}>
        <Image
          style={styles.bgImage}
          source={require('./../assets/images/logo-white.png')}
        />
      </View>
      <Text style={styles.title}>Home</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  );
}
const { height, width } = Dimensions.get("window");

const styles: any = StyleSheet.create({
  banner: {
    width: '100vw',
    height: '5em',
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
    height: '100px',
    width: '300px',
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
