import {  Stack } from 'expo-router'
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";

const RootLayout = () => {
  return <GluestackUIProvider mode="light">
    <Stack>
      <Stack.Screen name="index" options={{title:"Shop"}} />
  <Stack.Screen name="product/[id]" options={{title:"Product"}} /> {/*permet de renommer l'entete de l'application */}
    </Stack>
    </GluestackUIProvider>;
}

export default RootLayout
