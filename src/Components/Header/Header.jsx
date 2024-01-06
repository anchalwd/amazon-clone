import React from 'react'

function Header() {
  return (
    <>
    <header>
      <div className='bg-black p-2 items-center flex'>
        <div className='flex items-center h-10 justify-center'>
          <img src="https://raw.githubusercontent.com/myaduvanshi/amazon-prime/main/src/Components/Images/amazonLogo.svg" alt="" />
          <span className='text-white -mt-2'>.in</span>
        </div>
        <div className='border border-white item-center ml-6'>
        <img className='w-4' src="https://raw.githubusercontent.com/myaduvanshi/amazon-prime/main/src/Components/Images/location.svg" alt="" />
       <span className='text-white text-1xl'>Delivering to Delhi 110042</span><br/>
       <span className='text-white text-1xl'>Update location</span>
        </div>
      </div>
    </header>
    </>
  )
}

export default Header