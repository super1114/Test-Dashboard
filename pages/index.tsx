import Image from 'next/image'
import Navbar from '@/components/Navbar/Navbar'
import RightBar from '@/components/RightBar/RightBar'

export default function Home() {
  return (
    <div className='h-screen grid sm:grid-cols-navbar'>
      <Navbar />
      <div>
        <RightBar />
      </div>
    </div>
  )
}