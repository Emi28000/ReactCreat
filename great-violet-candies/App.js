import { Text,View, SafeAreaView, StyleSheet,TextInput} from 'react-native';
import React, { useState } from 'react';  // Importez useState de react


// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';
import Square from './components/Square' ;

export default function App() {
  const [text,setText] = useState("Text Input")
  const [isFavorite,setIsFavorite]= useState
  (false)
  const title = "Titre de mon Film"
  return (
    <View style={(styles.container)}>
    <TextInput
      onChangeText={(t) => { setText(t)

      }}
        value={text}
    />
           
        <Square title={text}>
        <Text style={styles.paragraph}>
       Change code in the editor and watch it change on your phone! Save to get shareable url.
      </Text>
      </Square>
        <Card>
        <AssetExample title={title}/>
        </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
