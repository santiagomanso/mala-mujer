import React from 'react'

type Props = {
  children: React.ReactNode
  width?: 'fit-content' | '100%'
}

const Reveal = ({ children, width = 'fit-content' }: Props) => {
  return <div>Reveal</div>
}

export default Reveal
