import React from 'react'
import Profiles from './profiles'
import useGetProfile from '../hooks/useGetProfile'
import Searchbar from './Searchbar';
import useProfile  from '../store/useProfile';
export default function Sidebar() {

  const {profile}= useGetProfile();
  const {selectedprofile}= useProfile();
    return (
    <div className={` pt-4 w-screen sidebar sm:w-52  overflow-x-hidden md:flex flex-col items-center  gap-3 ${selectedprofile ? "hidden":"flex"}`}>
        <div className="fixed z-10"><Searchbar/></div>
        <div className="flex flex-col items-center  gap-3 relative top-16  overflow-y-scroll scroll-smooth ">
        {profile.map((profile)=>(
          <Profiles key={profile._id}
          profile={profile}/>
       ))}
        </div>
        
    </div>
  )
}
