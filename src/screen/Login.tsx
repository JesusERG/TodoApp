import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Login</Text>
      <Button
        title="Go to SignUp"
        onPress={() => navigation.navigate('SignUp' as never)}
      />
    </View>
  );
};

export default Login;
