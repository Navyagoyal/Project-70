import React from 'react';
import { StyleSheet, Text, View,TextInput } from 'react-native';
import { Header } from 'react-native-elements';

export default class WriteStoryScreen extends React.Component {
  constructor(){
    super();
    this.state={
      text:'',
      search:''
    }
  }
  render(){
    return (
      <View style={styles.container}>
        <TextInput style={styles.title} placeholder="Title of the story" onChangeText={(text)=>{this.setState({search:text})}}/>
        <TextInput style={styles.author} placeholder="Author of the story" onChangeText={(text)=>{this.setState({search:text})}}/>
        <TextInput style={styles.story} placeholder="Write the story" onChangeText={(text)=>{this.setState({search:text})}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    height:30,
    margin:10,
    padding:5,
    color:"black",
    marginTop:40
  },
  author:{
    height:30,
    margin:10,
    padding:5
  },
  story:{
    height:200,
    margin:10,
    padding:5,
  }
});
