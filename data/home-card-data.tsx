import { ImageSourcePropType } from "react-native";

type HomeCardDataType ={
	title: string;
	description: string;
	buttonText: string;
	imageLink: ImageSourcePropType;
};

const HomeCardData:HomeCardDataType[] = [
	{
		title: "urgent care",
		description: "Need to Consult a Doctor but it's night? Contact with a doctor anytime, anywhere.",
		buttonText: "chat now",
		imageLink: require("./../assets/images/home-slider/urgent-care.jpg"),
	},
	{
		title: "ambulance",
		description: "No matter the hour or distance, our ambulance services are available anytime to assist you.",
		buttonText: "call now",
		imageLink: require("./../assets/images/home-slider/ambulance.png"),
	},
	{
		title: "MediChat",
		description: "Your 24/7 AI-powered medical assistant for instant health advice and support.",
		buttonText: "Chat Now",
		imageLink: require("./../assets/images/home-slider/medi-chat.png"),
	},
];

const BloodDonationCardData: HomeCardDataType[] = [
	{
		title: "Critical Timing",
		description: "Reaching a healthcare facility within 30 minutes of a heart attack or stroke can cut mortality by 50%.",
		buttonText: "know more",
		imageLink: require("./../assets/images/home-slider/critical-timing.jpg"),
	},
	{
		title: "Blood Transfusion",
		description: "Timely blood transfusion prevents organ failure and death from severe blood loss.",
		buttonText: "know more",
		imageLink: require("./../assets/images/home-slider/blood-transfusion.jpg"),
	},
	{
		title: "Golden Hour",
		description: "Receiving care within the first 60 minutes greatly boosts survival rates.",
		buttonText: "know more",
		imageLink: require("./../assets/images/home-slider/golden-hour.jpg"),
	},
];

export {
	HomeCardDataType,
	HomeCardData,
	BloodDonationCardData, 
};
