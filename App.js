import React, { useState } from 'react'
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native'

const App = () => {
  const onPressHandler = () => {
    setCounter(counter + 1)
    setSum(sum + 5)
  }
  const [counter,setCounter] = useState(0)
  const [sum,setSum] = useState(0)

  return (
      // <View style = {styles.container}>
      //   <Text>{sum}</Text>
      //   <Button title = "Add" onPress = {onPressHandler}/>
      //   <Text>{counter}</Text>
      // </View>
      <View style = {styles.container}>
        <View style = {{flexDirection:'row',justifyContent:'flex-start',alignItems:'flex-start',}}>
          <View style = {styles.view1}>
              <Text style = {styles.text}>1</Text>
          </View>
          <View style = {styles.view2}>
              <Text style = {styles.text}>2</Text>
          </View>
          <View style = {styles.view3}>
              <Text style = {styles.text}>3</Text>
          </View>
        </View>
        <View style = {styles.container2}>
          <Text style = {styles.text}>4</Text>
        </View>
        <View style = {styles.container3}>
          <Text style = {styles.text}>5</Text>
        </View>
        <View style = {styles.container4}>
          <View style = {styles.container5}>
            <Text style={styles.text}>6</Text>
          </View>
          <View style = {[styles.container5,{backgroundColor:'beige'}]}>
            <Text style={styles.text}>7</Text>
          </View>
        </View>
      </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'lightblue',
  },
  view1:{
    flex:1,
    backgroundColor:'pink',
    justifyContent:'center',
    alignItems:"center",
  },
  view2:{
    flex:2,
    backgroundColor:'blue',
    justifyContent:'center',
    alignItems:"center",
  },
  view3:{
    flex:4,
    backgroundColor:'red',
    justifyContent:'center',
    alignItems:"center",
  },
  container2:{
    backgroundColor:'orange',
    flex:1,
    alignItems:'center',
    justifyContent:'center',

  },
  
  container3:{
    backgroundColor:'purple',
    flex:1,
    // flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',

  },
  container4:{
    backgroundColor:'beige',
    flex:4,
    flexDirection:'row',
    
    justifyContent:'center',

  },
  container5:{
    backgroundColor:'white',
    alignItems:'center',
    flex:1,
    justifyContent:'center',
    flexDirection:'row',
      },
  text:{
    fontSize:30,
    fontWeight:'bold'
  }
})
 