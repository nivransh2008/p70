import * as React from 'react';
import { Text, View, StyleSheet, TouchablelOpacity,  TextInput, KeyboardAvoidingView} from 'react-native';
import MyHeader from './components/MyHeader'
 

 export default class WriteStory extends  React.Component{
   render(){
     return(
       <View style={{flex:1}}>
         <KeyboardAvoidingView>
       <View style={{flex:1}}>
        <MyHeader title = "Story Hub" navigation={this.props.navigation}/>
       </View>
       <View>
       <TextInput style={styles.loginBox} 
        placeholder="Story title" keyboardType="text" onChangeText={(text)=>{
        this.setState({emailId:text})
    }}></TextInput>
    <TextInput style={styles.loginBox } 
        placeholder="Author" keyboardType="text" onChangeText={(text)=>{
        this.setState({emailId:text})
    }}></TextInput>
       </View>  
       </KeyboardAvoidingView>
       </View>
     )
   }
 }

 const styles = StyleSheet.create({
   submitButtonText: {
    padding: 10,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'blue',
  }, 

    loginBox: {
    width: 400,
    height: 50, 
    borderWidth: 1.5, 
    fontSize: 20, 
    margin:10, 
    marginLeft:600, 
    marginBottom:500, 
    marginTop: 200
  } ,

 })