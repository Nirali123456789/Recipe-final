import { StyleSheet } from "react-native";

export default StyleSheet.create(
    {
        container:
        {
            padding: 20,
            backgroundColor : "#ffffff"
        },
        title :{
            fontSize :20,
            fontWeight : 'bold',
            color : 'black'
        },
        description:
        {
            fontSize : 17,
            color : '#777777',
            marginBottom : 10,
            color : 'black'
        },
        options:
        {
            container:
            {
                flexDirection: 'row',
                alignItems : 'center',
                marginTop : 10
            },
            label :
            {
                marginLeft : 10,
                fontSize : 17,
                color : 'black'
            }
        },
        logs :
        {
            container:
            {
               
                marginTop : 30
            },
            title:
            {
               
                fontSize : 15,
                fontWeight : 'bold',
                color : 'black'

            },
            text :
            {
                fontSize : 12,
                color : 'black',
                marginTop : 5
                
            }
        }
    }
)