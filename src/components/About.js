import User from "./User";
import UserClass from "./UserClass";
import React  from "react";

class About extends React.Component{
  constructor(props){
    console.log("Parent Constructor")
    super(props)
   
  }
 
render(){
  console.log("Parent Render")
   return (
    <div>

      <h1>About using Class Component</h1>
      {/* <User /> */}
      <UserClass name={"Ali Ahmad"} Contact={"@thealeahmad"}/>
      <UserClass name={"Ali Ahmad"} Contact={"@thealeahmad"}/>
       
      
    </div>
   )
};
}

export default About;

