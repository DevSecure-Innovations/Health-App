import React, {useState} from "react";
import { 
	Text, 
    View,
    StyleSheet,
    TouchableOpacity,
    ImageBackground,
    ImageSourcePropType,
    FlatList,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import MetarialIcons from "@expo/vector-icons/MaterialIcons";

import Color from "../constants/color";
import Amount from "./amount";
import { AmountDataType, CardDataType } from "./../data/med-info";

type MedicineCardFullProps = {
	content: CardDataType;
	closeOnPress?: () => void;
	cartOnPress?: () => void;
};

const defaultProps:MedicineCardFullProps = {
	content: {
		title: "paracetamol",
		dosage: "300mg",
		formFac: "tablet",
		ageRes: "13+",
		amount: [
			{quantity: "5 tablets", price: 20},
			{quantity: "10 tablets", price: 40},
			{quantity: "15 tablets", price: 60},
		],
		image: require("./../assets/images/tablets.jpg"),
	},
};

const MedicineCardFull = (props:MedicineCardFullProps) => {
    let {content} = {...defaultProps, ...props};
	const [quantity, setQuantity] = useState<string>(content.amount[0].quantity);
	const [price, setPrice] = useState<number>(content.amount[0].price);
	const amountOnPressHandler = ({quantity, price} : AmountDataType) => {
		setQuantity(quantity);
		setPrice(price);
	};

    return (
        <View style={styles.mainCont}>
            <ImageBackground imageStyle={styles.image} style={{flex:1}} source={content.image}>
                <LinearGradient 
					colors={[ "transparent", Color.baseWhite10Tint ]} 
					locations={[0.45, 0.6]}
					style={styles.gradient}
				>
                    <View style={styles.closeCont}>
                        <TouchableOpacity style={styles.closeBtn} onPress={props.closeOnPress}>
                            <MetarialIcons name="keyboard-arrow-down" style={styles.closeIcon}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.contextCont}>
                        <Text style={styles.titleText}>{content.title}</Text>
                        <Text style={styles.desc}>
							dosage: {content.dosage}{'\n'}
							form factor: {content.formFac}{'\n'}
							age restriction: {content.ageRes}
						</Text>
						<View style={styles.amountTab}>
							<Amount
								amount={content.amount[0]}
								onPress={() => amountOnPressHandler(content.amount[0])}
							/>
							<Amount
								amount={content.amount[1]}
								onPress={() => amountOnPressHandler(content.amount[1])}
							/>
							<Amount
								amount={content.amount[2]}
								onPress={() => amountOnPressHandler(content.amount[2])}
							/>
						</View>
                        <View style={styles.amountCont}>
                            <View style={styles.amount}>
                                <Text style={styles.quantity}>{quantity}</Text>
                                <Text style={styles.price}>₹{price}</Text>
                            </View>
                            <TouchableOpacity style={styles.cartBtn} onPress={props.cartOnPress}>
								<Text style={styles.cartText}>add to cart</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </LinearGradient>
            </ImageBackground>            
        </View>
    );
};

const styles = StyleSheet.create({
    mainCont: {
        width: "100%",
        height: "70%",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        overflow: "hidden",
        backgroundColor: Color.baseWhite10Tint,
    },
	image: {
		resizeMode: "contain",
		position: "absolute",
		top: 10,
		bottom: 300,
	},
	gradient: {
		flex: 1,
	},
	closeCont: {
		height: "50%",
	},
	closeBtn: {
		height: 45,
		width: 45,
		margin: 10,
		borderRadius: "100%",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "rgba(255, 255, 255, 0.6)",
	},
	closeIcon: {
		fontSize: 30
	},
    contextCont: {
		flex: 1,
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		padding: 10,
		paddingHorizontal: 20,
		marginHorizontal: 10,
		backgroundColor: Color.baseWhite,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 12,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
	},
	titleText: {
		fontSize: 24,
		fontWeight: 800,
		textTransform: "capitalize"
	},
	desc: {
		fontSize: 16,
		fontWeight: 400,
		textTransform: "capitalize"
	},
	amountTab: {
		width: "100%",
		height: 100,
		flexDirection: "row",
		justifyContent: "space-evenly",
		alignItems: "center",
	},
	amountCont: {
		height: 50,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		position: "absolute",
		inset: 10,
		top: "auto"
	},
	amount: {
		width: "30%",
	},
	quantity: {
		fontSize: 14,
		fontWeight: 600,
		textTransform: "capitalize",
		color: Color.graniteGrey
	},
	price: {
		fontSize: 24,
		fontWeight: 600,
		color: Color.seaweed
	},
	cartBtn: {
		height: "100%",
		width: "45%",
		borderRadius: 30,
		backgroundColor: Color.seaweed20LTint,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 6,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
	},
	cartText: {
		height: "100%",
		width: "100%",
		textAlign: "center",
		textAlignVertical: "center",
		fontSize: 24,
		fontWeight: 700,
		textTransform: "capitalize",
		color: "#FFFFFF"
	}
});

export default MedicineCardFull;
