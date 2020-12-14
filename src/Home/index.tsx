import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { HomeRoutes } from "../components/Navigation";

import { default as CustomDrawer, DRAWER_WIDTH, assets } from "./Drawer";
import OutfitIdeas from "./OutfitIdeas";
import FavoriteOutfits from "./FavoriteOutfits";

const Drawer = createDrawerNavigator<HomeRoutes>();

const HomeNavigator = () => (
  <Drawer.Navigator
    drawerContent={(props) => <CustomDrawer {...props} />}
    drawerStyle={{ width: DRAWER_WIDTH }}
  >
    <Drawer.Screen name="OutfitIdeas" component={OutfitIdeas} />
    <Drawer.Screen name="FavoriteOutfits" component={FavoriteOutfits} />
  </Drawer.Navigator>
);

export { HomeNavigator, assets as drawerAssets };
