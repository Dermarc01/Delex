import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function Login(params) {
  const navigation = params.navigation;
  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        style={{
          // transform: [{ rotate: '90deg' }],
          borderRadius: 70,
          marginBottom: 60,
          width: 300,
          height: 550,
        }}
        source={require('./pictures/frontpage.png')}
      />
      <Text style={{ fontSize: 30, color: 'grey', fontWeight: 'bold' }}>
        Welcome to
      </Text>
      <Text style={{ fontSize: 40, fontWeight: 'bold' }}>Delex</Text>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Home');
        }}
        style={{
          padding: 15,
          paddingHorizontal: 80,
          marginTop: 10,
          alignItems: 'center',
          borderRadius: 20,
          flexDirection: 'row',
          backgroundColor: '#69db7c',
        }}>
        <Text style={{ paddingLeft: 5, color: 'white', fontSize: 26, fontWeight: 'bold'}}>
          Get Started{' '}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
