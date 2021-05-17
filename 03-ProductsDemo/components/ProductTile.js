import React from "react";
import {Dimensions, ImageBackground, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Colors from "../constants/Colors";

const ProductTile = props => {
    return (
        <View style={styles.productContainer}>
            <View style={styles.productItem}>
                <TouchableOpacity onPress={props.onSelectProduct}>
                    <View>
                        <View style={{...styles.productRow, ...styles.productHeader}}>
                            <ImageBackground
                                source={{uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fphitem.univ-grenoble-alpes.fr%2Fmedias%2Fphoto%2Felectronique-energie-electrique-automatique_1490000043045-jpg%3FID_FICHE%3D107342&f=1&nofb=1'}}
                                style={styles.bgImage}
                                resizeMode="stretch"
                            >
                                <View style={styles.titleContainer}>
                                    <Text
                                        style={styles.title}
                                        numberOfLines={1}
                                    >
                                        {props.data.title}
                                    </Text>
                                </View>
                            </ImageBackground>
                        </View>
                        <View style={{...styles.productRow, ...styles.productDetail}}>
                            <Text style={styles.productText}>{props.data.color.toUpperCase()}</Text>
                            <Text style={styles.productText}>{props.data.subCategory.toUpperCase()}</Text>
                            <Text style={styles.productText}>{props.data.price}€</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    productContainer: {
        shadowColor: Colors.companyGrey,
        shadowOpacity: 0.9,
        shadowOffset: {width: 1, height: 2},
        shadowRadius: 5,
        elevation: 6,
    },
    productItem: {
        height: Dimensions.get('window').height / 4,
        width: Dimensions.get('window').width / 1.2,
        marginVertical: Dimensions.get('window').height / 90,
        overflow: 'hidden',
        borderRadius: 5,
    },
    bgImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        overflow: 'hidden',
    },
    productRow: {
        flexDirection: 'row',
    },
    productHeader: {
        height: '85%',
    },
    productDetail: {
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: Colors.companyBlue,
        height: '15%',
    },
    titleContainer: {
        width: '100%',
        height: '20%',

    },
    title: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingLeft: 10,
        paddingTop: 3,
        fontFamily: 'open-sans',
        fontSize: 18,
        color: Colors.companyWhite,
    },
    productText: {
        fontFamily: 'montserrat-light',
        color: Colors.companyWhite
    },
});

export default ProductTile;
