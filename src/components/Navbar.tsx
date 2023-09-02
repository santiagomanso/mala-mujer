import React from 'react'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <nav className='flex justify-between relative'>
      <a href='#home' className='text-2xl font-aleoLight'>
        Est. 2023
      </a>
      <div className='flex gap-2 text-2xl font-aleoLight relative'>
        <p>english //</p>
        <p>español //</p>
        <div className='flex flex-col items-end gap-2'>
          <p>deutsch</p>
          <button className='translate-x-1 w-12 flex items-center justify-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke-width='1.5'
              stroke='currentColor'
              className='h-10'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M3.75 9h16.5m-16.5 6.75h16.5'
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
