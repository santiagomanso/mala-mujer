import { StaticImageData } from 'next/image'
import santi from '../assets/santi.jpg'

interface member {
  id: number
  title: string
  name: string
  desc: string
  image: StaticImageData
}

type membersArray = member[]

export const members: membersArray = [
  {
    id: 1,
    name: 'ovelia',
    title: 'graphic design',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis fugit siculpa doloremque ratione nihil doloribus quas cum obcaecati necessitatibu.',
    image: santi,
  },
  {
    id: 2,
    name: 'rick',
    title: 'business',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis fugit siculpa doloremque ratione nihil doloribus quas cum obcaecati necessitatibu.',
    image: santi,
  },
  {
    id: 3,
    name: 'emma',
    title: 'ux/ui',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis fugit siculpa doloremque ratione nihil doloribus quas cum obcaecati necessitatibu.',
    image: santi,
  },
  {
    id: 4,
    name: 'roxanna',
    title: 'motion graphics',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis fugit siculpa doloremque ratione nihil doloribus quas cum obcaecati necessitatibu.',
    image: santi,
  },
  {
    id: 5,
    name: 'santi',
    title: 'Developer',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis fugit siculpa doloremque ratione nihil doloribus quas cum obcaecati necessitatibu.',
    image: santi,
  },
]
