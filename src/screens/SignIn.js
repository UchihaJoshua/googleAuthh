import React from 'react';
import { View, Text, Button } from 'react-native';

export default function SignIn({ promptAsync }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Sign In with Google</Text>
      <Button title="Sign In with Google" onPress={() => promptAsync()} />
    </View>
  );
}
