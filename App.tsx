import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import React from 'react';

import FirebaseManager from './components/services/firebase-manager';
import { FirebaseApp } from 'firebase/app';

export interface FirebaseNavigationProps {
  colorScheme: any
}


export class FirebaseNavigation extends React.Component {
  firebase: FirebaseApp = FirebaseManager;
  colorScheme;
  
  constructor(props: FirebaseNavigationProps) {
    super(props);
    this.colorScheme = props.colorScheme;
  }
  render() {
    return Navigation({colorScheme: this.colorScheme});
  }
}

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme: any = useColorScheme();
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <FirebaseNavigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
