import { View, Text, Switch, Pressable, Platform } from "react-native";
import * as Notifications from 'expo-notifications';
import { useState, useEffect } from "react";
import style from "./style";
import { addToken, removeToken } from "../../database/write";

export default function PushNotification() {
    const [reminder, setReminder] = useState(false);
    const [schedule, setSchedule] = useState([]);
    const [docId, setDocId] = useState(null);


    const handleReminderPress = async () => {
        console.log("reminder::" + reminder)
        if (!reminder) {
            const scheduled = await ScheduleReminder()
            if (scheduled) {
                setReminder(true)
                setSchedule(await getScedule())
            }
        } else {
            const cancelled = await cancelReminder();
            console.log("cancel::>>" + cancelled)
            if (cancelled) {

                setReminder(false);
            }

        }

    }

    useEffect(() => {

        (async () => {

            const previouslyChanged = await getScedule();
            console.log('previous', previouslyChanged)

            setSchedule(previouslyChanged);

        })();
    }, []);

    const handleReceivePress = async () => {
        if (!docId) {
            const id = await enablePushNotification();
            if (id) {
                setDocId(id);
            }

        } else {
            const removed = await removeToken(docId)
            if (removed) {
                setDocId(null);
            }

        }
    }
    return (
        <View style={style.container} >
            <Text style={style.title}>Notification:</Text>
            <Text style={style.description}>
                Hey!! Would you like try some Desert??
            </Text>
            <View style={style.options.container}>
                <Text >{reminder}</Text>
                <Switch value={reminder}
                    onValueChange={handleReminderPress} />

                <Pressable onPress={handleReminderPress}>
                    <Text style={style.options.label}> Set Daily Reminder</Text>

                </Pressable>
            </View>

        </View>
    );
}

async function enablePushNotification() {
    const permission = await Notifications.getPermissionsAsync();
    if (!permission.granted) {
        const request = await Notifications.getPermissionsAsync(
            {
                ios: {
                    allowAlert: true,
                    allowSound: true,
                    allowBadge: true

                },
            }
        );
        if (!request.granted) {
            return null;
        }
    }

    const token = await Notifications.getExpoPushTokenAsync();
    console.log("Expo Token  : " + JSON.stringify(token))
    const docId = addToken(token);
    return docId

}


async function ScheduleReminder() {

    // try {



    //check for permission.
    const permissions = await Notifications.getPermissionsAsync();
    console.log('Permissions:', permissions);
    if (!permissions.granted) {
        const request = await Notifications.requestPermissionsAsync(
            {
                ios: {
                    allowAlert: true,
                    allowSound: true,
                    allowBadge: true
                }
            }
        );
        console.log('- Request :', request);
        if (!request.granted) {
            return false;
        }

    }
    //Scedule Notification
    const id = await Notifications.scheduleNotificationAsync(
        {
            content: {
                title: 'Try something New?',
                body: 'Hey!! Would you like try some Desert??',
                sound: true,
                subtitle: 'Explore Receipe',
                color: '#FF0000',
                priority: Notifications.AndroidNotificationPriority.HIGH,
                badge: 3,
                data:
                {
                    userId: 123,
                    userName: 'John',
                    type: 'reminder'
                }

            },

            trigger: {
                seconds: 6,
                repeats: true
            }
        }
    );
    console.log('Sceduled Id', id)
    if (!id) {
        return false
    } else {
        return true;
    }

    return true;


}


async function cancelReminder() {
    console.log('cancel for :', Platform.OS)
    let cancelled = false;
    const scedule = await getScedule();
    console.log('Current schedule:', scedule);
    for (const item of scedule) {
        if (item.type === 'reminder') {
            try {
                await Notifications.cancelScheduledNotificationAsync(item.id);
                console.log('cancelled :', item.id)
                cancelled = true
            } catch (error) {
                console.error('Error cancelling notification:', error);
                cancelled = false;
            }
        }
    }

    console.log("cancelledd" + cancelled)
    return cancelled;
}

async function getScedule() {
    try {
        const sceduleNotification = await Notifications.getAllScheduledNotificationsAsync();
        // console.log('Scheduled notifications:', sceduleNotification);

        const schedule = [];
        sceduleNotification.forEach((sceduleNotification) => {
            schedule.push(
                {
                    id: sceduleNotification.identifier,
                    type: sceduleNotification.content.data.type
                }
            );
        });





        return schedule;
    } catch (error) {
        console.error('Error getting schedule:', error);
        return [];
    }
}