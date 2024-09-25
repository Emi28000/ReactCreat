import {Text,View} from 'react-native';

export default function Square({title,children}){
  
  return (
    <View>
      <Text> {title} </Text>
      {children}
    </View>


  )
}