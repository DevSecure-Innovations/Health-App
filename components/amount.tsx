import React, {useState} from "react";
import { 
	Text, 
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import Color from "./../constants/color";

type AmountProps ={
	quantity?: string;
	price?: number;
	onPress?: () => void;
};

const Amount = (props:AmountProps) =>{
	return(
		<TouchableOpacity style={amountStyle.button} onPress={props.onPress}>
			<Text style={amountStyle.quantity}>{props.quantity}</Text>
			<Text style={amountStyle.price}>₹{props.price}</Text>
		</TouchableOpacity>
	);
};

const amountStyle = StyleSheet.create({
	button: {
		alignItems: "center",
		justifyContent: "space-evenly",
		width: 100,
		height: 45,
		borderRadius: 10,
		backgroundColor: Color.olivine40LTint,
		paddingHorizontal: 10,
		marginVertical: 10,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
		borderWidth: 1,
		borderColor: Color.olivine,
	},
	quantity: {
		fontSize: 12,
		fontWeight: 600,
		textTransform: "capitalize",
		color: Color.graniteGrey
	},
	price: {
		fontSize: 18,
		fontWeight: 600,
		color: Color.seaweed20LTint
	},
});

export default Amount;