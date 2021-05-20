import React from "react";
import {Platform} from "react-native";
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from "react-navigation-drawer";
import {createMaterialBottomTabNavigator} from "react-navigation-material-bottom-tabs";
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from "react-navigation-tabs";
import {Ionicons} from "@expo/vector-icons";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryProductsScreen from "../screens/CategoryProductsScreen";
import Colors from "../constants/Colors";
import FavoritesScreen from "../screens/FavoritesScreen";
import FiltersScreen from "../screens/FiltersScreen";
import ProductDetailScreen from "../screens/ProductDetailScreen";


// Default stack config
const defaultStackNavigation = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.companyBlue : Colors.companyWhite
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.companyBlue
}


// Products Navigator
const ProductsNavigator = createStackNavigator(
    {
        Categories: { // First value is default route on opening
            screen: CategoriesScreen,
            navigationOptions: {
                headerTitle: 'Products Categories',
            }
        },
        CategoryProducts: {
            screen: CategoryProductsScreen, // Must-have value
            // ... Other screen options (like size, etc)
        },
        ProductDetails: {
            screen: ProductDetailScreen,
        }
    }, {
        defaultNavigationOptions: defaultStackNavigation
    }
);


// Favorites Navigator
const FavoritesNavigator = createStackNavigator({
        Favorites: FavoritesScreen,
        ProductDetail: ProductDetailScreen
    }, {
        defaultNavigationOptions: defaultStackNavigation
    }
);

const bottomNavigatorContent = {
    Products: {
        screen: ProductsNavigator,
        navigationOptions: {
            tabBarIcon: tabInfo => {
                return <Ionicons
                    name="ios-pricetags"
                    size={25}
                    color={tabInfo.tintColor}
                />
            },
            tabBarColor: Colors.companyBlue
        }
    },
    Favorites: {
        screen: FavoritesNavigator,
        navigationOptions: {
            tabBarIcon: tabInfo => {
                return <Ionicons
                    name="ios-star"
                    size={25}
                    color={tabInfo.tintColor}
                />
            },
            tabBarColor: Colors.companyGrey
        }
    }
}


// Bottom Navigator
const ProdFavTabNavigator = Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(
        bottomNavigatorContent,
        {
            activeColor: Colors.companyWhite,
            shifting: true
        })
    : createBottomTabNavigator(bottomNavigatorContent,
        {
            tabBarOptions: {
                activeTintColor: Colors.companyBlue
            }
        });


// This navigator is only there for the header configuration its allow
const FiltersNavigator = createStackNavigator({
    Filters: FiltersScreen
}, {
    defaultNavigationOptions: defaultStackNavigation
});


// Drawer Navigator
const MainNavigator = createDrawerNavigator(
    {
        ProductFavorites: {
            screen: ProdFavTabNavigator,
            navigationOptions: {
                drawerLabel: 'Products'
            }
        },
        Filters: FiltersNavigator,
    },
    {
        contentOptions: {
            activeTintColor: Colors.companyBlue,
            labelStyle: {
                fontFamily: 'montserrat-light',
                fontWeight: '900'
            }
        }
    }
);

export default createAppContainer(MainNavigator);
