import { TouchableOpacity,Text,View } from "react-native";

export const Presser = ({text,onPress}) =>{
    return(
        <TouchableOpacity onPress={()=>onPress()}>
        <View style={{backgroundColor:"purple",width:90,height:40,margin:3,borderRadius:20,justifyContent:"center",alignItems:"center"}}>
            <Text style={{color:"white",fontWeight:"bold"}}>{text}</Text>
        </View>
        </TouchableOpacity>

    );
};