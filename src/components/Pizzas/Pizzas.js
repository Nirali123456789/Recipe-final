import React, { useEffect } from "react";
import { View, Text, Image } from 'react-native';
import Pizza from '../../components/Pizzas/pizza/Pizza'
import styles_ts from "./ styles_ts";
import { ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { addTasks } from "../../redux/preferenceSlice";
import { loadItems } from "../../database";

export default function Pizzas() {
    const dispatch = useDispatch();
    const items = useSelector((state) => state.preference.itemsTasks);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await loadItems();
                dispatch(addTasks(data));
            } catch (error) {
                console.log("Error in Loading: ", error)
            }
        };
        fetchData();
    }, [dispatch])

    useEffect(() => {
        console.log("Updated Items: ", JSON.stringify(items));
    }, [items]);
    return (



        <View style={styles_ts.container}>
            <ScrollView>

                {items.map(
                    (task, index) => (

                        <Pizza key={index} task={task} />

                    )
                )}
            </ScrollView>
        </View>


    );
}