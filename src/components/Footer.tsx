import Link from 'next/link'
import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className='bg-green-800 py-10 flex justify-between px-32 text-green-300 font-aleoLight'>
      <div className='flex gap-1'>
        <a target='_blank' href='https://www.instagram.com/ovebecker/'>
          instagram
        </a>{' '}
        {/* eslint-disable-next-line */}
        <p>//</p>{' '}
        <a href='https://www.linkedin.com/in/ovelia-becker/' target='_blank'>
          linkedin
        </a>{' '}
        // <Link href='/contact'>contact</Link> //{' '}
        <Link href='/jobs'>jobs</Link>
      </div>
      <p>&#169; mala mujer design</p>
    </footer>
  )
}

export default Footer
