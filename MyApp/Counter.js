import React from "react";
import { View, Text } from "react-native";
import { useSelector ,useDispatch } from "react-redux";
import { decrease, increase, refresh } from "./Slice";
import { Presser } from "./Presser";

export const Counter = () => {
  const dispatch= useDispatch();
  const counter = useSelector((state) => state.counter);

  React.useEffect(() => {
    console.log('Counter state:', counter);
  }, [counter]);

  return (
    <View style={{ backgroundColor: "#eaeaea", borderRadius: 30, width: 300, height: 300, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontWeight: "bold", fontSize: 45 }}>{counter.count}</Text>

      <Presser text={"Increase"} onPress={() => dispatch(increase())}/>
      <Presser text={"Decrease"} onPress={() => dispatch(decrease())}/>
      <Presser text={"Refresh"} onPress={() => dispatch(refresh())}/>
    </View>
  );
};

