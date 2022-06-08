import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TouchableOpacity,
  Button,
  Linking,
} from 'react-native';
//a lot of this isn't used atm but might use in the future
import { openCamera } from 'react-native-image-crop-picker';
import ImagePicker from 'react-native-image-crop-picker';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const App = () => {
  const takeVid = () =>{
    ImagePicker.openCamera({
      mediaType: 'video',
    }).then(image => {
      console.log(image);
    });
  }

  return (
    <View style={styles.body}>
      <Text>Camera</Text>
        <Button
        onPress={takeVid} title='Cam'
        />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor:'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cam: {
    width:100,
    height: 100,
  }
});

export default App;
