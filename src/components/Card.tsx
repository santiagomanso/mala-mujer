import { Member } from '@/data/members'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'

interface Props {
  item: Member
}

export default function Card({ item }: Props) {
  const [isActive, setIsActive] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const controls = useAnimation()

  const handleClick = () => {
    setIsActive(!isActive)
    if (!isActive) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { type: 'spring', stiffness: 300 },
      })
    } else {
      controls.start({
        opacity: 0,
        y: -20,
        transition: { duration: 0.3 },
      })
    }
  }

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        cardRef.current &&
        !cardRef.current.contains(event.target as Node) &&
        isActive
      ) {
        setIsActive(false)
        controls.start({
          opacity: 0,
          y: -20,
          transition: { duration: 0.3 },
        })
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [isActive])

  return (
    <article
      key={item.id}
      ref={cardRef}
      onClick={handleClick}
      className='relative flex flex-col w-full group'
    >
      <Image
        alt={item.name}
        src={item.image}
        className={`rounded-2xl w-full h-[250px] object-top object-cover group-hover:outline-8 group-hover:outline group-hover:outline-pink-300 group-hover:cursor-pointer  ${
          isActive ? 'outline outline-8 outline-pink-300' : ''
        }`}
      />
      <div className='overflow-hidden'>
        <h3 className='text-lg mt-2 capitalize'>{item.name}</h3>
        <h2 className='text-2xl font-black mb-3 capitalize'>{item.title}</h2>
        <motion.div initial={{ opacity: 0, y: -20 }} animate={controls}>
          <p className='text-sm'>{item.desc}</p>
        </motion.div>
      </div>
    </article>
  )
}
