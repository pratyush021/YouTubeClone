import Image from 'next/image'
import { Inter } from 'next/font/google'
import VideoCard from '@/components/VideoCard'
import VideoGrid from '@/components/VideoGrid'
import AppBar from '@/components/Appbar'


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
      <AppBar/>
      <VideoGrid />
   </div>
  )
}
//39

//change the searchbar for mobile users 
