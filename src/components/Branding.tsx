import React from 'react'

type Props = {}

const Branding = (props: Props) => {
  return (
    <section className='h-screen w-full flex flex-col items-center justify-center'>
      <div className='py-10 bg-green-400 w-4/6 text-3xl flex items-center pl-10'>
        <h2>services//</h2>
      </div>

      <h2 className='text-[110px] font-gwenTrialBlack'>branding</h2>
      <h2 className='text-[110px] font-aleoLight'>ux/ui</h2>
      <h2 className='text-[110px] font-gwenTrialBlack'>motion graphics</h2>
      <h2 className='text-[110px] font-black'>3D</h2>
    </section>
  )
}

export default Branding
