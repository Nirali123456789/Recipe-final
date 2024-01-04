import { View } from "react-native";
import PushNotification from "../pushNotification";


export default function Settings() {
    return (<View style={{ backgroundColor: "#ffffff", flex: 1 }}>

        <PushNotification />
    </View>
    );
}