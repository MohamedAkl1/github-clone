import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { AppRoute } from "@github/navigation/routes"
import Home from "@github/views/home/home"
import Search from "@github/views/search/search"
import Query from "@github/views/query/query"
import { IRootParamList } from "./root-navigator.types"

const RootStack = createStackNavigator<IRootParamList>()

const RootNavigator = () => {
  return (
    <RootStack.Navigator initialRouteName={AppRoute.Home} screenOptions={{ headerShown: true }}>
      <RootStack.Screen name={AppRoute.Home} component={Home} />
      <RootStack.Screen name={AppRoute.Search} component={Search} />
      <RootStack.Screen name={AppRoute.Query} component={Query} />
      {/* <RootStack.Group screenOptions={{ presentation: "modal" }}>
        {// any modal screen  }
      </RootStack.Group> */}
    </RootStack.Navigator>
  )
}

export default RootNavigator
