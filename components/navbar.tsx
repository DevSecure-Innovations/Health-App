import React from "react";
import { 
	Link,
    RelativePathString,
} from "expo-router";
import { 
	View, 
	Image,
	StyleSheet,
} from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Color from "./../constants/color";

type links = {
	linkMedicine: "/" | RelativePathString,
	linkHome: "/" | RelativePathString,
	linkBlood: "/" | RelativePathString,
}

const NavBar = (props:links) => {
	return(
		<View style={styles.mainContainer}>
			<Link 
				style={styles.navButton} 
				href={props.linkMedicine}
			>
				<MaterialIcons name="medical-services" style={styles.navIcon}/>
			</Link>
			<Link
				style={styles.navButton} 
				href={props.linkHome}
			>
				<MaterialIcons name="home-filled" style={styles.navIcon}/>
			</Link>
			<Link
				style={styles.navButton} 
				href={props.linkBlood}
			>
				<MaterialIcons name="bloodtype" style={styles.navIcon}/>
			</Link>
		</View>
	);
};

const styles = StyleSheet.create({
	mainContainer:{
		height: 70,
		width: "100%",
		backgroundColor: Color.baseGreen,
		borderTopRightRadius: 20,
		borderTopLeftRadius: 20,
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
		position: "absolute",
		bottom: 0,
		zIndex: 9,
	},
	navButton: {
		height: 50,
		width: 50,
		justifyContent: 'center',
		alignItems: "center",
		overflow: 'hidden',
	},
	navIcon:{
		width: "100%",
		height: "100%",
		color: Color.baseBlack,
		fontSize: 50
	},
});

export default NavBar;
