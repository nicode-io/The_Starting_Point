import React from "react";
import ProductsList from "../components/ProductsList";
import {PRODUCTS} from "../data/ProductsData";
import ProductTile from "../components/ProductTile";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";
import CategoriesScreen from "./CategoriesScreen";


const FavoritesScreen = props => {

    //:TODO Modify dummy logic to fetch favorites
    const favoritesProducts = PRODUCTS.filter(product => product.id === '001' || product.id === '002' )

    const renderProduct = productData => {
        return (
            <ProductTile
                data={productData.item}
                onSelectProduct={() => {
                    props.navigation.navigate({
                        routeName: 'ProductDetails',
                        params: {
                            productId: productData.item.id,
                        }
                    })
                }}
            />
        )
    }

    return (
        <ProductsList
            products={favoritesProducts}
            renderProduct={renderProduct}
        />
    )
};

// Header & Drawer configuration
FavoritesScreen.navigationOptions = navigationData => {
    return {
        headerTitle: 'Favorites Products',
        headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item
                    title="Menu"
                    iconName="ios-menu"
                    onPress={() => {
                        navigationData.navigation.toggleDrawer()
                    }}
                />
            </HeaderButtons>
        )
    }
}

export default FavoritesScreen
