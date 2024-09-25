import * as React from 'react';
import { Text, View, StyleSheet, Image,TextInput } from 'react-native';

export default class AssetExample extends
React.Component {
   constructor(props){
    super(props)
    this.state={
      title: "Je suis un titre"
    }
  }
  render (){
    const{title}=this.props
    return(
    <View style={styles.container}>
     <TextInput
      onChangeText={(t) => { 
        this.setState({title:t})
      }}
        value={this.state.title}
    />
       
      <Text style={styles.paragraph}>
       {this.state.title}
      </Text>
      <Image style={styles.logo} source={require('../assets/jeje.png')} />
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 128,
    width: 128,
  }
});
