import React from "react";
import { useEffect } from "react";
import {signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from "../utils/constant";
import {toggleGptSearchView} from "../utils/gptSlice";


const Header = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const handleSignout = () => {
    signOut(auth).then(() => {
      navigate('/');
    }).catch((error) => {
      // An error happened.
    });
  }
  useEffect(()=>{
     const usSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid,email,displayName} = user;
        dispatch(addUser({uid : uid, email : email, displayName : displayName}));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => usSubscribe();
  },[])
  const handleGPTSearchClick = () => {
    dispatch(toggleGptSearchView());
  }
  return (
    <div className="absolute w-screen py-8 px-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-24"
        src={LOGO}
        alt="Logo"
      />
      {user && <div className="flex items-center px-4">
        <button className="bg-red-500 m-2 p-2 rounded-lg text-white font-bold" onClick={handleGPTSearchClick}>{showGptSearch ? "HomePage" : "GPT Search"}</button>
        <img className="w-12 h-12 pr-2"
          src="https://occ-0-3663-1009.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"
          alt="User Profile"
        />
        <button className="font-bold text-white" onClick={handleSignout}>Sign Out</button>
      </div>}
      </div>
  );
};

export default Header;
