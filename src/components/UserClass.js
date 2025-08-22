import React  from "react"

class UserClass extends React.Component{
   constructor(props){
    console.log("This is child constructor")
    super(props);
     this.state={
      userInfo:{
        name:"dummy data",
        contact:"default",
        avatarUrl:"dummy url "

      }
    }
   }
   async componentDidMount(){
    // console.log("Parent Component Did Mount")
    const data=await fetch("https://api.github.com/users/thealeahmad")
    const res=await data.json();
    this.setState({
      userInfo:res
    })

    console.log(res)
  }
    render(){
        console.log("This is child component")
     return(
        <div className="user-card">
            <h2>name:{this.state.userInfo.login}</h2>
            <img src="https://avatars.githubusercontent.com/u/128467765?v=4" style={{height:"100px"}}></img>
            <h3>Contact:@{this.state.userInfo.login}</h3>
        </div>
    )
   }  
}
export default UserClass


