import React, {useState} from 'react';
import {
  View,
  TextInput,
  Button,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import {useDispatch} from 'react-redux';
import ActionLogin from '../../redux/action/actionLogin';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/FontAwesome';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {moderateScale} from './../../../responsive';

export function LoginScreen({navigation}) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const dispatch = useDispatch();
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  const handleLogin = async () => {
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);

    try {
      const result = await fetch(
        'http://3.7.81.243/projects/plie-api/public/api/login',
        {
          method: 'POST',
          body: formData,
        },
      );

      const data = await result.json();

      console.log('data', data);
      if (data.success == true) {
        navigation.navigate('MyTab');
        dispatch(ActionLogin(email, password, data.data.user.usr_fname));
        Alert.alert('Login successful', data.message);
      } else {
        Alert.alert('Login failed', data.message || 'An error occurred');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      Alert.alert('Error', 'Failed to login. ' + error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Plié</Text>
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Text style={styles.label}>Password</Text>
      <View style={styles.containers}>
        <TextInput
          style={styles.inputs}
          placeholder="Password"
          secureTextEntry={!isPasswordVisible}
          onChangeText={setPassword}
          value={password}
        />
        <TouchableOpacity
          style={styles.icon}
          onPress={togglePasswordVisibility}>
          <Icon
            name={isPasswordVisible ? 'eye-off-outline' : 'eye-outline'}
            size={moderateScale(20)}
            color="gray"
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.forgotpw} onPress={console.log('hello')}>
        <Text>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleLogin} style={styles.button}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      <View style={styles.forgotpw} onPress={console.log('hello')}>
        <Text style={styles.footerText}>
          Not a member? <Text style={styles.link}>Sign Up Here</Text>
        </Text>
      </View>
      <View style={styles.lineView}>
        <View style={styles.line} />
        <Text style={styles.text}>or Sign In with</Text>
        <View style={styles.line} />
      </View>
      <View style={styles.iconView}>
        <TouchableOpacity style={styles.buttonlogo}>
          <Icons name="google" size={moderateScale(30)} color="#DB4437" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonlogo}>
          <Ionicon name="logo-apple" size={moderateScale(30)} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonlogo}>
          <Icons name="facebook" size={moderateScale(30)} color="#4267B2" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.forgotpw} onPress={console.log('hello')}>
        <Text>Enter as Guest</Text>
      </TouchableOpacity>
    </View>
  );
}
export default LoginScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: moderateScale(16),
  },
  logo: {
    fontSize: moderateScale(40),
    fontWeight: 'bold',
    marginBottom: moderateScale(32),
  },
  input: {
    width: '100%',
    padding: moderateScale(5),
    height: moderateScale(40),
    borderColor: 'black',
    fontSize: moderateScale(15),
    borderWidth: 1,
    borderTopWidth: 0,
    borderTopLeftRadius: moderateScale(10),
    borderTopRightRadius: moderateScale(10),
    borderBottomLeftRadius: moderateScale(10),
    borderBottomRightRadius: moderateScale(10),
    marginBottom: moderateScale(16),
  },
  label: {
    color: 'black',
    alignSelf: 'flex-start',
    marginBottom: moderateScale(5),
    fontSize: moderateScale(16),
  },
  button: {
    backgroundColor: '#21D393',
    padding: moderateScale(10),
    borderRadius: moderateScale(8),
    alignSelf: 'flex-end',
    marginBottom: moderateScale(10),
  },
  iconView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: moderateScale(16),
  },
  buttonlogo: {
    backgroundColor: '#f2f2f2',
    padding: moderateScale(10),
    borderRadius: moderateScale(8),
    margin: moderateScale(10),
    alignItems: 'center',
  },
  buttonText: {color: '#fff', fontWeight: 'bold'},
  footerText: {color: 'black'},
  link: {color: 'black', textDecorationLine: 'underline'},
  containers: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    marginBottom: moderateScale(10),
    borderColor: 'black',
    borderWidth: 1,
    borderTopWidth: 0,
    borderTopLeftRadius: moderateScale(10),
    borderTopRightRadius: moderateScale(10),
    borderBottomLeftRadius: moderateScale(10),
    borderBottomRightRadius: moderateScale(10),
  },
  forgotpw: {
    alignSelf: 'flex-end',
    marginBottom: moderateScale(10),
  },
  inputs: {
    flex: 1,
    height: moderateScale(40),
    fontSize: moderateScale(15),
  },
  icon: {
    marginRight: moderateScale(5),
  },
  lineView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: moderateScale(16),
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: 'black',
  },
  text: {
    marginHorizontal: moderateScale(8),
    fontSize: moderateScale(14),
    color: 'black',
  },
});
