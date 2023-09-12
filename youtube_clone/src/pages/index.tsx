import Image from 'next/image'
import { Inter } from 'next/font/google'
import VideoCard from '@/components/VideoCard'


const inter = Inter({ subsets: ['latin'] })

interface Video {
  title: string, 
  channelName: string, 
  views: string, 
  timestamp: string, 
  thumbnail: string 
}

export default function Home({title, channelName, views, timestamp, thumbnail}) {
  

  return (
   <div>
    <VideoCard image="som.jpg" title={"SOM dropped from NRG!"} profilePic ="tarik.jpg" channelName="somcs" views="2M" timestamp="4 days"/>
    <VideoCard image="subroza.jpg" title={"Art of roza ult!"} profilePic ="sukuna.jpg" channelName="subroza"views="100K" timestamp="2 hours"/>
      
   </div>
  )
}
//39