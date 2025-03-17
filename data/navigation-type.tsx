type RootStackParam = {
    MainTabs: undefined;
    ProfileStack: undefined;
};

type ProfileStackParam = {
    Profile: undefined;
    AuthStack: undefined;
};

type AuthStackParam = {
    SignIn: undefined;
    SignUp: undefined;
};

type RootStackScreenName = "MainTabs" | "Profile";

type MainTabsParam = {
    Medicine: undefined;
    Home: undefined;
    BloodDonation: undefined;
};

type MainTabsScreenName = "Medicine" | "Home" | "BloodDonation";

export { 
    RootStackParam, 
    RootStackScreenName, 
    MainTabsParam, 
    MainTabsScreenName, 
    ProfileStackParam, 
    AuthStackParam, 
};