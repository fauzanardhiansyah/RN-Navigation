import React, { Component } from 'react';
import { View, Text, Button,TextInput,Image } from 'react-native';

class Settings extends Component {
  render() {
    return (
	<View> 
                <Text style ={{fontSize:40, marginLeft:150}}>Login</Text>

                <Image
                style={{width: 120, height: 120,marginLeft:130,marginTop:30}} 
                source={require('./2.png')} />

                <TextInput
                    style={{height: 40,marginTop:50}}
                    placeholder="Username"
                    onChangeText={(text) => this.setState({text})}
                />

                <TextInput
                    style={{height: 40}}
                    placeholder="Password"
                    onChangeText={(text) => this.setState({text})}
                />

                <Button style ={{margin: 20,flexDirection: 'row',justifyContent: 'space-between'}}
		onPress={() => this.props.navigation.navigate('HomeScreen')} title="Home"
                title="Login"
                color="#0012FF"
                />
            </View>
    )
  }
};

export default Settings;
