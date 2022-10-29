import * as Font from 'expo-font';

export default useFonts = async () =>
    await Font.loadAsync({
        'newake': require("../assets/newake-demo-400.otf"),
        'inter': require("../assets/Inter-Bold.ttf"),
    });