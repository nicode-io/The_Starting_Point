import React from "react";
import {FlatList, StyleSheet, Text, View} from "react-native";

import {CATEGORIES} from "../data/CategoryData";
import {PRODUCTS} from "../data/ProductsData";
import ProductTile from "../components/ProductTile";
import ProductsList from "../components/ProductsList";

const CategoryProductsScreen = props => {

    const catId = props.navigation.getParam('categoryId');

    const displayedProducts = PRODUCTS.filter(product => product.categoryId === catId);

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

    //TODO: Create a navigation var up or down the product to
    // go back to products > category > subcategory

    return (
        <ProductsList
            products={displayedProducts}
            renderProduct={renderProduct}
        />
    )
};

//  Setting text/style of header using function
CategoryProductsScreen.navigationOptions = navigationData => {
    const catId = navigationData.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    return {
        headerTitle: selectedCategory.title,
    };
};

export default CategoryProductsScreen
