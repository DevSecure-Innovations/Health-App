type RootStackParam = {
    MainTabs: undefined;
    Profile: undefined;
};

type RootStackScreenName = "MainTabs" | "Profile";

type MainTabsParam = {
    Medicine: undefined;
    Home: undefined;
    BloodDonation: undefined;
};

type MainTabsScreenName = "Medicine" | "Home" | "BloodDonation";

export { RootStackParam, RootStackScreenName, MainTabsParam, MainTabsScreenName };