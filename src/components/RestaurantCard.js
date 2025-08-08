const RestaurantCard=(props)=> {
    const {resData}=props 
        return(
            <div className='restaurant-card' style={{ backgroundColor:"#f0f0f0",}}>
                <img className='res-img' src={resData.image}/>
                <h3>{resData.name}</h3>
                <h4>{resData.cuisines.join(",")}</h4>
                <h4>{resData.avgrating} ⭐</h4>
                <h4>{resData.deliveryTime +" Delivery Time"}</h4>
                

            </div>
        )
}
export default RestaurantCard;