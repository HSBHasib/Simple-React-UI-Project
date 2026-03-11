import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = () => {
  return (
    <div className='h-[86vh] w-full px-8 flex gap-8 items-center'>
      <LeftContent />
      <RightContent />
    </div>
  )
}

export default Page1Content
