import { StyleSheet } from "react-native"
import { TextStyleSheet, ViewStyleSheet } from "@github/utils"

const viewStyles = ViewStyleSheet({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "black",
  },
  header: {
    marginRight: 14,
  },
  emptySearch: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  typeView: {
    flexDirection: "row",
    alignItems: "center",
    margin: 8,
  },
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: "grey",
    position: "absolute",
    bottom: 0,
  },
})

const textStyles = TextStyleSheet({
  emptyTextTitle: {
    textAlign: "center",
    textAlignVertical: "center",
    fontWeight: "bold",
    fontSize: 30,
    color: "white",
  },
  emptyTextSubtitle: {
    textAlign: "center",
    fontSize: 18,
    color: "white",
  },
  entitiesText: {
    color: "white",
    fontSize: 16,
    marginHorizontal: 16,
  },
})

export const styles = StyleSheet.create({
  ...viewStyles,
  ...textStyles,
})
