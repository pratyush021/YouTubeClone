
const VideoCard=(props: any)=>{
    return <div className="pb-3">
        <img className="rounded-2xl" src={props.image}/>

        <div className="grid grid-cols-12 pt-2 pl-2">
            <div className="col-span-1">
                <img className={"rounded-full w-15 h-15"} src={props.profilePic} />
            </div>
            
            <div className="col-span-11 pl-2  ">
                <div className="col-span-11" >
                    {props.title} 
                </div>
                <div className="col-span-11 text-gray-400 text-base">
                    {props.channelName}
                </div>
                <div className="col-span-11 text-gray-400 text-base">
                    {props.views} views |  {props.timestamp} ago 
                </div>
            </div>
        </div>
    </div>
}

export default VideoCard; 