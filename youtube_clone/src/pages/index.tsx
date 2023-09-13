import Image from 'next/image'
import { Inter } from 'next/font/google'
import VideoCard from '@/components/VideoCard'
import VideoGrid from '@/components/VideoGrid'


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
    {/* <VideoCard 
      image="som.jpg" 
      title={"SOM dropped from NRG!"} 
      profilePic ="tarik.jpg" 
      channelName="somcs" 
      views="2M" 
      timestamp="4 days"
      /> */}
    <VideoGrid />
   </div>
  )
}
//39