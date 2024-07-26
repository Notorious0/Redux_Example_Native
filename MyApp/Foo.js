import { Text,View } from "react-native";
import { useSelector } from "react-redux";

export const Foo = ()=>{
    const counter= useSelector(state=>state.counter);
return(
    <View>
        <Text style={{fontWeight:"bold",fontSize:60,color:"blue"}}>{counter.count}</Text>
    </View>
);
};