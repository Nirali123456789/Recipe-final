import React, { useEffect } from "react";
import { View, Text } from 'react-native';
import Task from "./Task/Task";
import styles_ts from "./ styles_ts";
import { ScrollView, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { load } from "../../database";
import { loadItems } from "../../database/read";
import { setTasks, addTasks } from "../../redux/preferenceSlice";
import { useNavigation } from '@react-navigation/native';

export default function Tasks() {
    const dispatch = useDispatch();
    const tasks = useSelector((state) => state.preference.tasks);
    const navigation = useNavigation();


    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await load();
                dispatch(setTasks(data));


            } catch (error) {
                console.log("Error in Loading: ", error)
            }
        };
        fetchData();
    }, [dispatch])



    return (
        <View style={styles_ts.container}>
            <ScrollView style={styles_ts.container}>
                {tasks.map(
                    (task, index) => (

                        <Task key={index} task={task} />

                    )
                )}
            </ScrollView>

        </View>
    );
}