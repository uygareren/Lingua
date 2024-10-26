import { NativeStackScreenProps, createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";
import LoginScreen from "../screens/Profile/LoginScreen";
import ProfileScreen from "../screens/Profile/ProfileScreen";
import RegisterScreen from "../screens/Profile/RegisterScreen";
import { RootStateType } from "../store/store";
import { TabStackParamList } from "../types/stackNavigations";

export type TabProfileScreenProps<T extends keyof TabStackParamList> =
  NativeStackScreenProps<TabStackParamList, T, T>;

const Stack = createNativeStackNavigator<TabStackParamList>();

export default function ProfileNavigation() {
    const userInfo = useSelector<RootStateType, any>((state) => state.user.userInfo);

    const RenderScreens = () => {
        if (userInfo?.userId) {
            return (
                <Stack.Screen
                    component={ProfileScreen}
                    name="Profile"
                    options={{ headerShown: false }}
                />
            );
        } else {
            return (
                <>
                    <Stack.Screen
                        component={LoginScreen}
                        name="Login"
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        component={RegisterScreen}
                        name="Register"
                        options={{ headerShown: false }}
                    />
                </>
            );
        }
    };

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {RenderScreens()}
        </Stack.Navigator>
    );
}
