import { ImageSourcePropType } from "react-native";

type HomeCardDataType ={
	title: string;
	description: string;
	buttonText: string;
	imageLink: ImageSourcePropType;
};

const HomeCardData = [
	{
		title: "urgent care",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		buttonText: "chat now",
		imageLink: require("./../assets/images/ambulance-at-night.jpg"),
	},
	{
		title: "ambulance",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		buttonText: "call now",
		imageLink: require("./../assets/images/ambulance-at-night.jpg"),
	},
	{
		title: "Card 3",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		buttonText: "View Details",
		imageLink: require("./../assets/images/ambulance-at-night.jpg"),
	},
];

export {
	HomeCardDataType,
	HomeCardData,
};
