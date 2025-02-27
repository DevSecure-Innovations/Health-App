import React from "react";
import { 
	View, 
	TextInput,
	StyleSheet,
} from "react-native";
import { 
	Link, 
	RelativePathString, 
} from "expo-router";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Color from "./../constants/color";

type SearchBarData = {
	linkProfile: "/" | RelativePathString,
};

const SearchBar = (props : SearchBarData) => {
	return(
		<View style={styles.mainContainer}>
			<View style={styles.srcBar}>
				<FontAwesome5 name="search" style={styles.srcBarIcon}/>
				<TextInput 
					style={styles.srcBarInput} 
					placeholder="Search..."
					placeholderTextColor={Color.searchbarBorder}
				/>
				<FontAwesome5 name="microphone" style={styles.srcBarIcon}/>
			</View>
			<Link href={props.linkProfile} style={styles.profile}>
				<FontAwesome5 name="user-circle" style={styles.profileImg}/>
			</Link>
		</View>
	);
};

const styles = StyleSheet.create({
	mainContainer: {
		width: "100%",
		height: 70,
		padding: 10,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		gap: 10,
		position: "absolute",
		zIndex: 9,
	},
	srcBar: {
		flex: 1,
		height: "100%",
		backgroundColor: Color.searchbarBase,
		borderColor: Color.searchbarBorder,
		borderWidth: 2,
		borderRadius: 30,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	srcBarIcon: {
		height: "100%",
		width: "15%",
		borderRadius: 30,
		textAlign: "center",
		textAlignVertical: "center",
		color: Color.baseBlack,
		fontSize: 24,
	},
	srcBarInput: {
		flex: 1,
		fontSize: 18,
		color: Color.baseBlack,
	},
	profile: {
		width: 50,
		height: 50,
		backgroundColor: Color.searchbarBase,
		borderRadius: 30,
		overflow: "hidden",
	},
	profileImg: {
		width: "100%",
		height: "100%",
		color: Color.baseBlack,
		fontSize: 50,
		textAlign: "center",
		textAlignVertical: "center"
	},
});

export default SearchBar;
