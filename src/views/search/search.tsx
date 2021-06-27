import React, { useState } from "react"
import { FlatList, Text, TouchableOpacity, View } from "react-native"
import { Image, Input, Screen } from "@github-shared"
import { R } from "@github/res"
import { AppRoute } from "@github/navigation/routes"
import { styles } from "./search.styles"

const orgTypes = [
  {
    id: "People",
    image: R.image.people,
    text: "People with",
  },
  {
    id: "Organizations",
    image: R.image.organization,
    text: "Organizations with",
  },
]

const Search = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions(
      {
        headerTitle: () => (
          <Input
            placeholder="Search GitHub"
            textColor="black"
            onChange={(text) => {
              if (text.length > 0) {
                shouldShowButtons(true)
                setText(text)
              } else {
                shouldShowButtons(false)
                setText("")
              }
            }}
            autoFocus
          />
        ),
      },
      [navigation],
    )
  })

  const [showButtons, shouldShowButtons] = useState(false)
  const [currentSearchInput, setText] = useState("")

  const _renderType = ({ item }) => (
    <TouchableOpacity
      style={styles.typeView}
      onPress={() =>
        navigation.navigate(AppRoute.Query, { id: item.id, query: currentSearchInput })
      }>
      <Image source={item.image} />
      <Text style={styles.entitiesText}>
        {item.text} "{currentSearchInput}"
      </Text>
      <View style={styles.divider} />
    </TouchableOpacity>
  )

  return (
    <Screen
      preset="fixed"
      statusBarPreset="dark-content"
      children={
        <View style={styles.container}>
          {showButtons ? (
            <FlatList data={orgTypes} renderItem={_renderType} keyExtractor={(item) => item.id} />
          ) : (
            <View style={styles.emptySearch}>
              <Text style={styles.emptyTextTitle}>Find your stuff.</Text>
              <Text style={styles.emptyTextSubtitle}>
                Search all of GitHub for People and Organizations
              </Text>
            </View>
          )}
        </View>
      }
    />
  )
}

export default Search
