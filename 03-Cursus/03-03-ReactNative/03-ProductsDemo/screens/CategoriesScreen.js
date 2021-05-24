import React from "react";
import {
    Dimensions,
    FlatList,
    Image,
    SafeAreaView,
    StyleSheet,
    View
} from "react-native";

import {CATEGORIES} from "../data/CategoryData";
import CategoryTile from "../components/CategoryTile";
import CustomHeaderButton from "../components/CustomHeaderButton";
import {HeaderButtons, Item} from "react-navigation-header-buttons";

const CategoriesScreen = props => {

    const renderGridItem = itemData => {
        return (
            <CategoryTile
                data={itemData.item}
                onSelect={() => {
                    props.navigation.navigate({
                        routeName: 'CategoryProducts',
                        params: {
                            categoryId: itemData.item.id
                        }
                    })
                }}
            />
        )
    }

    return (
        <
            SafeAreaView>
            < View
                style={styles.imageContainer}>
                < Image
                    fadeDuration={3000}
                    source={
                        {
                            uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.domintell.com%2Fwp-content%2Fuploads%2F2018%2F10%2FDomintell-New-Logo-Baseline.png&f=1&nofb=1'
                        }
                    }
                    style={styles.image}
                    resizeMode="center"
                />
            < /View>
            <View style={styles.grid}>
                <FlatList
                    data={CATEGORIES}
                    numColumns={2}
                    renderItem={renderGridItem}
                />
            </View>
        </SafeAreaView>
    )
};

// Header & Drawer configuration
CategoriesScreen.navigationOptions = navigationData => {
    return {
        headerTitle: 'Products Categories',
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

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    grid: {
        marginTop: Dimensions.get('window').height / 50,
    },
    imageContainer: {
        width: Dimensions.get('window').width / 1.2,
        height: Dimensions.get('window').width / 4,
        marginTop: 30,
        alignSelf: 'center',
        marginBottom: 10,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: '100%',
    },
});

export default CategoriesScreen
