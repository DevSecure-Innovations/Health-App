import { Stack } from "expo-router";
import { useFonts } from "expo-font";
export default function RootLayout() {

  useFonts({
        'font4':require('../assets/fonts/Montserrat-SemiBold.ttf'),
       'font3':require('../assets/fonts/Righteous-Regular.ttf'),
       'regular':require('../assets/fonts/PlaywriteITModerna-Regular.ttf'),
      'outfit':require('../assets/fonts/Outfit-SemiBold.ttf')   
  })
  return (
<Stack screenOptions={{
  headerShown:false
}
  
}>
   <Stack.Screen name="(tabs)"/>
  </Stack>
  )
}
