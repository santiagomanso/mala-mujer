import React from 'react'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <nav className='flex justify-between'>
      <a href='#home' className='text-2xl font-aleoLight'>
        Est. 2023
      </a>
      <div className='flex gap-2 text-2xl font-aleoLight'>
        <p>english //</p>
        <p>español //</p>
        <p>deutsch</p>
      </div>
    </nav>
  )
}

export default Navbar
