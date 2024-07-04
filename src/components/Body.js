import Login from "./Login"
import Browse from "./Browse"
import {createBrowserRouter,RouterProvider} from "react-router-dom";




const Body = () => {
    const browseRouter = createBrowserRouter([
        {
            path : "/",
            element : <Login/>
        },
        {
            path : "/browse",
            element : <Browse/>
        }
    ]);

    // useEffect(()=>{
    //   onAuthStateChanged(auth, (user) => {
    //     if (user) {
    //       const {uid,email,displayName} = user;
    //       dispatch(addUser({uid : uid, email : email, displayName : displayName}));
    //     } else {
    //       dispatch(removeUser);
    //     }
    //   });
      
    // },[])
  return (
    <div>
      <RouterProvider router={browseRouter}/>
    </div>
  )
}

export default Body
