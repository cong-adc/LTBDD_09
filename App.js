import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Animated, Dimensions } from 'react-native';

export default function App() {
  const [mouse1, setMouse1]
    = useState({
      x: null,
      y: null,
      marginLeft: new Animated.Value(10),
      marginTop: new Animated.Value(10)

    });
  const [mouse2, setMouse2]
    = useState({
      x: null,
      y: null,
      marginLeft: new Animated.Value(30),
      marginTop: new Animated.Value(40)

    });
  const [mouse3, setMouse3]
    = useState({
      x: null,
      y: null,
      marginLeft: new Animated.Value(50),
      marginTop: new Animated.Value(100)
    });

  useEffect(() => {
   setInterval(() => {
    randomLocation(mouse1,setMouse1)
    randomLocation(mouse2, setMouse2)
    randomLocation(mouse3, setMouse3)
   }, 3000)
  }, []);

  const randomLocation = (state, setState) => {

    const left = Math.min(Math.random() * 300, Dimensions.get('window').width )
    const top =  Math.min(Math.random() * 500, Dimensions.get('window').height)

    setState(pre => {
      return {
        ...pre,
        marginLeft: left,
        marginTop: top,
      }
    })
  }

  return (
    <View style={styles.container}>
      <Animated.Image
        source={{ uri: 'https://i.pinimg.com/564x/25/04/69/2504694898b19dee86c57e0f29e8e4c2.jpg' }}
        style={{position: 'absolute',  left: mouse1.marginLeft, top: mouse1.marginTop, width: 50, height: 80, transition: '0.5s'}}
      >
      </Animated.Image>

      <Animated.Image
        source={{ uri: 'https://i.pinimg.com/564x/25/04/69/2504694898b19dee86c57e0f29e8e4c2.jpg' }}
        style={{position: 'absolute', left: mouse2.marginLeft, left: mouse2.marginTop, width: 50, height: 80, transition: '0.5s' }}
      >
      </Animated.Image> <Animated.Image
        source={{ uri: 'https://i.pinimg.com/564x/25/04/69/2504694898b19dee86c57e0f29e8e4c2.jpg' }}
        style={{position: 'absolute', left: mouse3.marginLeft, top: mouse3.marginTop, width: 50, height: 80, transition: '0.5s' }}
      >
      </Animated.Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: '100vh'
  },
});
