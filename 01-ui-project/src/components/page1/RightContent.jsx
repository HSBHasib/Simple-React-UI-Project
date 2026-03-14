import React from 'react'

const RightContent = () => {
  return (
    <div className='h-full relative w-3/4 p-2'>
        <img className='h-full w-auto object-cover' src="https://images.unsplash.com/photo-1772289238955-4a4090a0cdb6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

        <div className='absolute top-0 left-0 h-full w-full  '>
        <h1>1</h1>
          <div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit quasi aspernatur quos. Facere, nostrum id!</p>
            <div>
              <button>Satisfied</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default RightContent
