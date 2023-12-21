import { StaticImageData } from 'next/image'
import ovelia from '../assets/ovelia.png'
import rick from '../assets/rick.png'
import roxana from '../assets/roxanna.png'
import emma from '../assets/emma.png'
import santi from '../assets/santi.jpg'

export interface Member {
  id: number
  title: string
  name: string
  desc: string
  image: StaticImageData
}

type MembersArray = Member[]

export const members: MembersArray = [
  {
    id: 1,
    name: 'ovelia',
    title: 'graphic design',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis fugit siculpa doloremque ratione nihil doloribus quas cum obcaecati necessitatibu.',
    image: ovelia,
  },
  {
    id: 2,
    name: 'rick',
    title: 'business',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis fugit siculpa doloremque ratione nihil doloribus quas cum obcaecati necessitatibu.',
    image: rick,
  },
  {
    id: 3,
    name: 'roxana',
    title: 'ux/ui',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis fugit siculpa doloremque ratione nihil doloribus quas cum obcaecati necessitatibu.',
    image: roxana,
  },
  {
    id: 4,
    name: 'emma',
    title: 'motion graphics',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis fugit siculpa doloremque ratione nihil doloribus quas cum obcaecati necessitatibu.',
    image: emma,
  },
  {
    id: 5,
    name: 'santi',
    title: 'Developer',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis fugit siculpa doloremque ratione nihil doloribus quas cum obcaecati necessitatibu.',
    image: santi,
  },
]
