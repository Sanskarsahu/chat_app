import React from 'react';
import useProfile from '../store/useProfile';
import { useSocket } from '../context/SocketContext';
const Profiles = (profile) => {
    const {selectedprofile,setSelectedprofile}= useProfile();
    const {online}= useSocket();
    const isOnline= online.includes(profile.profile._id);
    const ring= isOnline? "ring ring-primary ring-offset-base-100 ring-offset-2": " ";
    const status= isOnline? "active now" : " ";
    const isSelected = selectedprofile?._id === profile.profile._id;
    return (
        <div className={`sm:w-48 w-96 h-16 bg-gray-200 rounded-md flex items-center justify-center drop-shadow-sm cursor-pointer hover:bg-gray-400 ${isSelected? "bg-gray-400" : ""}`} onClick={()=> setSelectedprofile(profile.profile)}>
            <div className="avatar absolute left-3">
                <div className={`w-8  rounded-full ${ring}`}>
                    <img src={profile.profile.profilePic} alt=''/>
                </div>
            </div>
            <div className='flex flex-col relative left-2'>
                <h5 className='text-lg text-blue-950 font-bold'>
                    {profile.profile.fullname}
                </h5>
                <span className='text-sm'>
                    {status}
                </span>

            </div>
        </div>
    );
}

export default Profiles;
