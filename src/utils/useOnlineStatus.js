import { useEffect,useState } from "react";

const useOnlineStatus = () => {
/// Custom hook to check online status
const[isOnline, setIsOnline] = useState(true);

useEffect (()=>{
    // Check if the user is offline
    window.addEventListener("offline", () => {
        setIsOnline(false);
        
});
    // Check if the user is online
    window.addEventListener("online", () => {
        setIsOnline(true);
    });

},[])

   return isOnline;
}
 


export default useOnlineStatus;