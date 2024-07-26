import React from "react";
import { View,Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Presser } from "./Presser";
import { setAuthor } from "./Slice";

export const Bar=() =>{

    const dispatch =useDispatch();
    const author = useSelector((state) => state.counter);

    React.useEffect(() => {
        console.log(author);    
    }, []);

return( 
    <View style={{ justifyContent:"center",alignItems:"center" }}>
    <Text style={{fontSize:20}}>Name: {author.author.name}</Text>
    <Text style={{fontSize:20}}>Surname: {author.author.surname}</Text>

    <Presser text={"Change"} onPress={() => { 
        dispatch(
            setAuthor({
            name:"Halit",
            surname:"X",
        })
    );
    }} 
    />
    </View>
);
};
