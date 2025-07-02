import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screen/Login';
import SignUp from '../screen/SignUp';

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
