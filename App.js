import "react-native-gesture-handler";
import * as React from 'react';
import SignIn from "./src/screens/SignIn";
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from 'expo-web-browser';
import { GoogleAuthProvider, onAuthStateChanged, signInWithCredential, } from "firebase/auth"; 
import { auth } from './firebase'; 

WebBrowser.maybeCompleteAuthSession();

export default function App() {
  const [userInfo, setUserInfo] = React.useState();
  const [request, response, promptAsync] = Google.useAuthRequest({
   
    androidClientId: '545004980786-5ptep15ld3vv3ibns21vuhvutrd38r85.apps.googleusercontent.com',
  });

  React.useEffect(() => {
    if (response?.type == "success") {
      const { id_token } = response.params;
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential); 
    }
  }, [response])
   return <SignIn promptAsync={promptAsync}/>;
}



