import React, {useCallback, useEffect, useState} from "react";
import {Platform, StyleSheet, Switch, Text, View} from "react-native";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";
import Colors from "../constants/Colors";


const FiltersScreen = props => {

    // Destructure navigation props
    const {navigation} = props

    // States
    const [isNew, setIsNew] = useState(false);

    //TODO: Grab more information about params passed
    // with useEffect and navigationData inside the same component
    const saveFilters = useCallback(() => {
        const appliedFilters = {
            isNew: isNew,
            // More filters
        }
        console.log(appliedFilters)
    }, [isNew]);

    useEffect(() => {
        navigation.setParams({
            save: saveFilters
        });
    }, [saveFilters]);

    return (
        <View style={styles.screen}>
            <Text>Available filters</Text>
            <FilterSwitch
                label="New Products"
                value={isNew}
                onChange={newValue => setIsNew(newValue)}
            />
            <FilterSwitch
                label="Another filter"
                value={true}
                // onChange={newValue => newValue !== true}
            />
            <FilterSwitch
                label="Another filter"
                value={false}
                // onChange={newValue => newValue !== true}
            />
        </View>
    )
    //TODO: add multiple filters for example for spare parts
    // advanced filtering category / price
};

const FilterSwitch = props => {

    return (
        <View style={styles.filterContainer}>
            <Text style={styles.title}>{props.label}</Text>
            <Switch
                value={props.value}
                onValueChange={props.onChange}
                trackColor={{
                    true: Colors.companyBlue
                }}
                thumbColor={Platform.OS === 'android' ? Colors.companyBlue : ''}
            />
        </View>
    )
}

// Header & Drawer configuration
FiltersScreen.navigationOptions = navigationData => {
    return {
        headerTitle: 'Filters Products',
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
        ),
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item
                    title="SAVE"
                    onPress={
                        // Grab useEffect returned params (see above)
                        navigationData.navigation.getParam('save')
                    }
                />
            </HeaderButtons>
        )
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
    },
    filterContainer: {
        width: '80%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        margin: 20,
        fontFamily: 'montserrat-light',
        fontWeight: '900',
        fontSize: 24,
        textAlign: 'center',
    }
});

export default FiltersScreen
