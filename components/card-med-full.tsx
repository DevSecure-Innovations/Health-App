import React, {useState} from "react";
import { 
	Text, 
    View,
    StyleSheet,
    TouchableOpacity,
    ImageBackground,
    ImageSourcePropType,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import MetarialIcons from "@expo/vector-icons/MaterialIcons";
import Color from "./../constants/color";
import Amount from "./amount";

type CardMedFullProps = {
	title?: string;
	info0?: string;
	info1?: string;
	info2?: string;
	amount0: {quantity: string; price: number;};
	amount1: {quantity: string; price: number;};
	amount2: { quantity: string; price: number;};
	imageLink?: ImageSourcePropType;
	closeOnPress?: () => void;
	cartOnPress?: () => void;
};

const defaultProps:CardMedFullProps = {
	title: "paracetamol",
	info0: "300mg",
	info1: "tablet",
	info2: "13+",
	amount0:{quantity: "5 tablets", price: 20},
	amount1:{quantity: "10 tablets", price: 40},
	amount2:{quantity: "15 tablets", price: 60},
	imageLink: require("./../assets/images/tablets.jpg"),
};

const CardMedFull = (props:CardMedFullProps) => {
    let CardProps = {...defaultProps, ...props};
	const [quantity, setQuantity] = useState<string>(CardProps.amount0.quantity);
	const [price, setPrice] = useState<number>(CardProps.amount0.price);

    return (
        <View style={styles.mainCont}>
            <ImageBackground imageStyle={styles.image} style={{flex:1}} source={CardProps.imageLink}>
                <LinearGradient 
					colors={[ "transparent", Color.baseWhite10Tint ]} 
					locations={[0.45, 0.6]}
					style={styles.gradient}
				>
                    <View style={styles.closeCont}>
                        <TouchableOpacity style={styles.closeBtn} onPress={CardProps.closeOnPress}>
                            <MetarialIcons name="keyboard-arrow-down" style={styles.closeIcon}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.contextCont}>
                        <Text style={styles.titleText}>{CardProps.title}</Text>
                        <Text style={styles.desc}>
							dosage: {CardProps.info0}{'\n'}
							form factor: {CardProps.info1}{'\n'}
							age restriction: {CardProps.info2}
						</Text>
						<View style={styles.amountTab}>
							<Amount
								quantity={CardProps.amount0.quantity}
								price={CardProps.amount0.price}
								onPress={() => { 
									setQuantity(CardProps.amount0.quantity)
									setPrice(CardProps.amount0.price)
								}}
							/>
							<Amount
								quantity={CardProps.amount1.quantity}
								price={CardProps.amount1.price}
								onPress={() => { 
									setQuantity(CardProps.amount1.quantity)
									setPrice(CardProps.amount1.price)
								}}
							/>
							<Amount
								quantity={CardProps.amount2.quantity}
								price={CardProps.amount2.price}
								onPress={() => { 
									setQuantity(CardProps.amount2.quantity)
									setPrice(CardProps.amount2.price)
								}}
							/>
						</View>
                        <View style={styles.amountCont}>
                            <View style={styles.amount}>
                                <Text style={styles.quantity}>{quantity}</Text>
                                <Text style={styles.price}>₹{price}</Text>
                            </View>
                            <TouchableOpacity style={styles.cartBtn} onPress={CardProps.cartOnPress}>
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
		resizeMode: "cover",
		position: "absolute",
		bottom: 100,
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

export default CardMedFull;