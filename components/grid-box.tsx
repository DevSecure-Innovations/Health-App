import React from 'react';
import { 
	View, 
	Dimensions,
    StyleSheet
} from 'react-native';

import ButtonCard from './button-card';
import Color from '@/constants/color';

const {width} = Dimensions.get("screen");

const GridBox = () => {
	return (
		<View style={styles.mainContainer}>
			<ButtonCard
				title="First Aid"
				image={require("./../assets/images/grid-box/first-aid-kit.png")}
				style={styles.childContainer}
			/>
			<ButtonCard
				title="Oral Hygiene"
				image={require("./../assets/images/grid-box/dental-hygiene.jpg")}
				style={styles.childContainer}
			/>
			<ButtonCard
				title="Skin Care"
				image={require("./../assets/images/grid-box/skin-care.jpeg")}
				style={styles.childContainer}
			/>
			<ButtonCard
				title="Health Drinks"
				image={require("./../assets/images/grid-box/health-drinks.jpg")}
				style={styles.childContainer}
			/>
		</View> 
	);
};

const styles = StyleSheet.create({
	mainContainer: {
		height: width-20,
		padding: 10,
		flexDirection: "row",
		flexWrap: "wrap",
		gap: 10,
		borderRadius: 30,
		shadowColor: "#000000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.8,
		shadowRadius: 2,
		elevation: 5,
		backgroundColor: Color.baseWhite10Tint
	},
	childContainer: {
		height: (width-50)/2,
		width: (width-50)/2,
	},
});

export default GridBox;
