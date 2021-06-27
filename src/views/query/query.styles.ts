import { StyleSheet } from "react-native"
import { ImageStyleSheet, TextStyleSheet, ViewStyleSheet } from "@github/utils"

const viewStyles = ViewStyleSheet({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "black",
  },
  searchResults: {
    flexDirection: "row",
    alignItems: "center",
  },
  emptyStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})

const textStyles = TextStyleSheet({
  resultsText: {
    color: "white",
    fontSize: 16,
    marginHorizontal: 16,
  },
})

const imageStyles = ImageStyleSheet({
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
})

export const styles = StyleSheet.create({
  ...viewStyles,
  ...textStyles,
  ...imageStyles,
})
