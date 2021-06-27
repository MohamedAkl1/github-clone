import React, { useState } from "react"
import { FlatList, Text, View } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { Image, Screen } from "@github-shared"
import { API, HttpMethod, IResponse, githubResponseMapper } from "@github/services"
import { ENV } from "@github/config"
import { AppRoute } from "@github/navigation/routes"
import { IRootParamList } from "@github/navigation/root-navigator"
import { IGithubUser } from "@github/utils"
import { styles } from "./query.styles"

type Props = StackScreenProps<IRootParamList, AppRoute.Query>

const Query = ({ route, navigation }: Props) => {
  const { id, query } = route.params
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: id,
    })
  })

  const [githubUsers, setUsers] = useState<IGithubUser[]>([])

  API.request(
    {
      method: HttpMethod.Get,
      path: `${ENV.baseURL}/search/users?q=${query}+in:login+type%3A${
        id === "People" ? "user" : "org"
      }`,
    },
    { pathParams: "", responseType: "json", mapper: githubResponseMapper },
  ).then((response: IResponse<IGithubUser[]>) => {
    if (response.ok) {
      setUsers(response.data)
    }
  })

  const _renderUser = (_user: IGithubUser) => {
    return (
      <View style={styles.searchResults}>
        <Image style={styles.image} source={{ uri: _user.avatarUrl }} />
        <Text style={styles.resultsText}>{_user.username}</Text>
      </View>
    )
  }

  return (
    <Screen
      preset="fixed"
      statusBarPreset="dark-content"
      children={
        <View style={styles.container}>
          <FlatList
            data={githubUsers}
            renderItem={(item) => _renderUser(item.item)}
            keyExtractor={(item) => item.username}
            ListEmptyComponent={
              <View style={styles.emptyStyle}>
                <Text style={styles.resultsText}>Nothing to see here.</Text>
              </View>
            }
          />
        </View>
      }
    />
  )
}

export default Query
