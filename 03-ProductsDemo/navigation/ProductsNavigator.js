import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryProductsScreen from "../screens/CategoryProductsScreen";
import ProductDetailScreen from "../screens/ProductDetailScreen";
import {Platform} from "react-native";
import Colors from "../constants/Colors";

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
    },
    {
        // mode: 'modal', // Set behaviour of transitions
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? Colors.companyBlue : Colors.companyWhite
            },
            headerTintColor: Platform.OS === 'android' ? 'white' : Colors.companyBlue
        }
    });

export default createAppContainer(ProductsNavigator);
