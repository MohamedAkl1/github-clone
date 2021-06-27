import React from "react"
import { TouchableOpacity } from "react-native"
import { Image, Screen } from "@github-shared"
import { R } from "@github/res"
import { AppRoute } from "@github/navigation/routes"
import { styles } from "./home.styles"

const Home = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions(
      {
        headerRight: () => (
          <TouchableOpacity style={styles.header} onPress={handleOnSearchPress}>
            <Image source={R.image.search} />
          </TouchableOpacity>
        ),
      },
      [navigation],
    )
  })

  const handleOnSearchPress = () => {
    navigation.navigate(AppRoute.Search)
  }

  return <Screen preset="fixed" statusBarPreset="dark-content" />
}

export default Home
