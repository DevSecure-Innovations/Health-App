import React from 'react';
import {
	View, 
	Text, 
	StyleSheet
} from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Color from './../constants/color';

const Card = ()=>{
	return(
		<View style={styles.card}>
			<View style={styles.context}>
				<View style={styles.contextInfo}>
					<Text style={{fontSize:16, color: "#1B370B", fontWeight: 700 }} >Medicine 1</Text>
					<Text
						style={{
							fontSize: 13,
							color: "#2D2D2D",
						}}
					>
						Dosage: 300mg{"\n"}
						Form Factor: Tablet{"\n"}
						Age restriction: 13+
					</Text>
					<Text style={{fontSize: 16, color: "#1B370B", fontWeight: 700 }}>$100</Text>
				</View>
				<View style={styles.contextButton}>
					<View style={styles.seeMore}>
						<Text style={{color: Color.baseWhite, fontWeight: 700}}>SEE DETAILS</Text>
					</View>
					<View style={styles.addToCart}>
						<MaterialIcons name="shopping-cart" size={24} color={Color.baseWhite} />
					</View>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	card:{
		height: 250,
		width: 200,
		backgroundColor: "#D0D0D0",
		resizeMode: 'contain',
		borderRadius: 20,
		shadowColor: "#000",
		shadowOffset: {width: 0, height: 2},
		padding: 5,
		display: "flex",
	},
	context:{
		height: "60%",
		backgroundColor: "#96BA8D",
		borderRadius: 15,
		paddingVertical: 5,
		paddingHorizontal: 10,
		marginTop: "auto",
	},
	contextInfo:{
		flex: 1,
	},
	contextButton:{
		height: "25%",
		//backgroundColor: Color.baseBlack,
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		flexDirection: "row",
		borderRadius: 10,
	},
	seeMore:{
		height: "100%",
		width: "65%",
		backgroundColor: "#1B370B",
		borderRadius: 20,
		justifyContent: "center",
		alignItems: "center",
	},
	addToCart:{
		height: "100%",
		width: "30%",
		backgroundColor: "#1B370B",
		borderRadius: 20,
		justifyContent: "center",
		alignItems: "center",
	},
})

export default Card;
