import VideoCard from "./VideoCard";

const VIDEOS = [{
    image:"som.jpg",
    title:"SOM dropped from NRG!",
    profilePic :"tarik.jpg",
    channelName:"somcs", 
    views:"2M",
    timestamp:"2 days",
}, {
    image:"subroza.jpg",
    title:"Subroza going back to CS2!! | Valorant VS CS2",
    profilePic :"roza.jpg",
    channelName:"TSM subroza", 
    views:"200k",
    timestamp:"4 days",
}, {
    image:"som.jpg",
    title:"SOM dropped from NRG!",
    profilePic :"tarik.jpg",
    channelName:"somcs", 
    views:"2M",
    timestamp:"2 days",
}, {
    image:"subroza.jpg",
    title:"Subroza going back to CS2!! | Valorant VS CS2",
    profilePic :"roza.jpg",
    channelName:"TSM subroza", 
    views:"200k",
    timestamp:"4 days",
}, {
    image:"som.jpg",
    title:"SOM dropped from NRG!",
    profilePic :"tarik.jpg",
    channelName:"somcs", 
    views:"2M",
    timestamp:"2 days",
}, {
    image:"subroza.jpg",
    title:"Subroza going back to CS2!! | Valorant VS CS2",
    profilePic :"roza.jpg",
    channelName:"TSM subroza", 
    views:"200k",
    timestamp:"4 days",
}, {
    image:"som.jpg",
    title:"SOM dropped from NRG!",
    profilePic :"tarik.jpg",
    channelName:"somcs", 
    views:"2M",
    timestamp:"2 days",
}, {
    image:"subroza.jpg",
    title:"Subroza going back to CS2!! | Valorant VS CS2",
    profilePic :"roza.jpg",
    channelName:"TSM subroza", 
    views:"200k",
    timestamp:"4 days",
}   ]

const VideoGrid=()=>{
    return <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    
        {VIDEOS.map((v)=>{
        return  <div className="sm:p-1">
            <VideoCard
                    title={v.title}
                    image={v.image} 
                    profilePic={v.profilePic} 
                    channelName={v.channelName}
                    views={v.views}
                    timestamp={v.timestamp}
                    />
        </div>
        })}
        
    </div>
}

export default VideoGrid; 