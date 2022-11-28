import { useCallback } from "react";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ionicons from "react-native-vector-icons/Ionicons";
import ProfileScreen from "./screens/ProfileScreen";
import SearchScreen from "./screens/SearchScreen";
import NewPostScreen from "./screens/NewPostScreen";
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { UserProvider } from "./context/UserContext";
import { ScrollProvider } from "./context/ScrollContext";
import { HomeStack } from "./routes/HomeStack";
import SortingPicker from "./ui_elements/SortingPicker";
import SettingsButton from "./ui_elements/SettingsButton";
import CommerceScreen from "./screens/CommerceScreen";

const Tab = createBottomTabNavigator();
const queryClient = new QueryClient();

export default function App() {
  const [fontsLoaded] = useFonts({
    newake: require("artree/assets/newake-demo-400.otf"),
    inter: require("artree/assets/Inter-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const Stack = createNativeStackNavigator();

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer onLayout={onLayoutRootView}>
        <UserProvider>
          <ScrollProvider>
            <Tab.Navigator
              screenOptions={({ route }) => ({
                tabBarShowLabel: false,
                tabBarStyle: {
                  backgroundColor: "#090820",
                  height: 55,
                  borderTopWidth: 0,
                },
                headerStyle: {
                  shadowColor: "transparent",
                  backgroundColor: "#090820",
                  borderBottomWidth: 0,
                },
                headerTintColor: "#1FCEC6",
                headerTitleStyle: {
                  fontSize: 32,
                  fontFamily: "newake",
                  marginTop: 4,
                },
                tabBarIcon: ({ color, size }) => {
                  let iconName;

                  if (route.name === "Home") {
                    iconName = "home-sharp";
                  } else if (route.name === "Search") {
                    iconName = "search";
                  } else if (route.name === "NewPost") {
                    iconName = "add-circle";
                  } else if (route.name === "Commerce") {
                    iconName = "pricetag";
                  } else if (route.name === "Profile") {
                    iconName = "person";
                  }

                  // You can return any component that you like here!
                  return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: "#1FCEC6",
                tabBarInactiveTintColor: "#fff",
              })}
            >
              <Tab.Screen
                name="Home"
                component={HomeStack}
                options={{
                  headerTitle: "artree",
                  headerTitleAlign: "left",
                  headerRight: () => <SortingPicker />,
                  headerShown: false,
                }}
              />
              <Tab.Screen
                name="Search"
                component={SearchScreen}
                options={{
                  headerTitle: "Search",
                  headerTitleAlign: "center",
                }}
              />
              <Tab.Screen
                name="NewPost"
                component={NewPostScreen}
                options={{
                  headerTitle: "New Post",
                  headerTitleAlign: "center",
                }}
              />
              <Tab.Screen
                name="Commerce"
                component={CommerceScreen}
                options={{
                  headerTitle: "Buying & Selling",
                  headerTitleAlign: "center",
                }}
                />
              <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                  headerRight: () => <SettingsButton />,
                  headerTitle: "artree",
                  headerTitleAlign: "left",
                }}
              />
            </Tab.Navigator>
          </ScrollProvider>
        </UserProvider>
      </NavigationContainer>
    </QueryClientProvider>
  );
}
