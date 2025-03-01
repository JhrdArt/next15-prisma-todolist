import { Navigation } from '@/components/navigation-menu'
import Image from 'next/image'

export default function Home ({}) {
  return (
    <div className='container min-h-screen'>
      <Image
        src='https://53.fs1.hubspotusercontent-na1.net/hubfs/53/To_Do_List.png'
        alt='imagen todo list'
        width={6012 / 10}
        height={4080 / 10}
        style={{ objectFit: 'contain', width: '100%', height: '100%' }}
        loading='lazy'
      />
    </div>
  )
}
