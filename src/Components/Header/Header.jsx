import React from 'react'
// import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
      <header>
        <div className='bg-black p-2 items-center flex'>
          <div className='flex items-center h-10 justify-center'>
            <img src="https://raw.githubusercontent.com/myaduvanshi/amazon-prime/main/src/Components/Images/amazonLogo.svg" alt="" />
            <span className='text-white -mt-2'>.in</span>
          </div>
          <div className='ml-6 mt-4'>
            <img className='w-4 -mb-10' src="https://raw.githubusercontent.com/myaduvanshi/amazon-prime/main/src/Components/Images/location.svg" alt="" />
            <span className='text-gray-200 text-1xl ml-4 -pt-8'>Delivering to Delhi 110002</span><br />
            <span className='text-white text-1xl ml-4 font-bold'>Update location</span>
          </div>
          <div className='w-[48rem]  h-10 flex -mt-2 ml-4 rounded-l-md rounded-r-md'>
            <div className='w-14 h-full '>
              <select className='w-full h-full text-black border-none rounded-l-md bg-gray-100 px-2' name="category" id="category">
                <option value="all">All Categorise</option>
                <option value="alexaSkills">Alexa Skills</option>
                <option value="amazonDevices">Amazon Devices</option>
                <option value="amazonFashion">Amazon Fashion</option>
                <option value="amazonFresh">Amazon Fresh</option>
                <option value="amazonPharmacy">Amazon Pharmacy</option>
                <option value="appliances">Appliances</option>
                <option value="apps&Games">Apps & Games</option>
                <option value="AudibleAudiobooks">Audible Audiobooks</option>
                <option value="baby">Baby</option>
                <option value="beauty">Beauty</option>
                <option value="books">Books</option>
                <option value="car&Motorbike">Car & Motorbike</option>
                <option value="clothing&Accesseries">Clothing & Accesseries</option>
                <option value="collectibles">Collectibles</option>
                <option value="computer&Accesseries">Computer & Accesseries</option>
                <option value="electronics">Electronics</option>
                <option value="furniture">Furniture</option>
                <option value="garden&Outdoors">Garden & Outdoors</option>
                <option value="giftCards">Gift Cards</option>
                <option value="grocery&Gourmetfoods">Grocery & Gourmet Foods</option>
              </select>
            </div>
        <input type="text" className='pl-2 w-[45rem] bg-gray-100 ml-0 ' placeholder = 'Search Amazon.in' />
        <div className='bg-orange-300 w-12 rounded-r-md'> 
        </div>
        <div className='item-left -ml-12 flex w-14'>
         <div className='w-full'>
          <img className='w-8 h-4 ml-16' src="https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_India.svg" alt="" />
         <div className='w-96 hidden'>
           {/* <li><link rel="stylesheet" href="" /><input type="radio" name='locallang' id='locallang' checked />Englis-EN</li>
           <li><link rel="stylesheet" href="" /><input type="radio" name='locallang' id='locallang' />हिन्दी - Hi</li>
           <li><link rel="stylesheet" href="" /><input type="radio" name='locallang' id='locallang' />தமிழ் - TA</li>
           <li><link rel="stylesheet" href="" /><input type="radio" name='locallang' id='locallang' />తెలుగు - TE</li>
           <li><link rel="stylesheet" href="" /><input type="radio" name='locallang' id='locallang' />ಕನ್ನಡ - KN</li>
           <li><link rel="stylesheet" href="" /><input type="radio" name='locallang' id='locallang' />മലയാളം - ML</li>
           <li><link rel="stylesheet" href="" /><input type="radio" name='locallang' id='locallang' />বাংলা - BN</li>
          <li><link rel="stylesheet" href="" /><input type="radio" name='locallang' id='locallang' />मराठी - MR</li> */}
         </div>
         </div>
        </div>
        {/* <div className="relative inline-block text-left"> */}


    
  
  <div class="dropdown">
          <img className='w-10 h-10 p-2' src="https://raw.githubusercontent.com/myaduvanshi/amazon-prime/main/src/Components/Images/seacrh.svg" alt="" />
          <span className='text-white ml-16'>EN</span>
  {/* <span>Mouse over me</span> */}
  <div class="dropdown-content">
  <li><link rel="stylesheet" href="" /><input type="radio" name='locallang' id='locallang' checked />Englis-EN</li>
           <li><link rel="stylesheet" href="" /><input type="radio" name='locallang' id='locallang' />हिन्दी - Hi</li>
           <li><link rel="stylesheet" href="" /><input type="radio" name='locallang' id='locallang' />தமிழ் - TA</li>
           <li><link rel="stylesheet" href="" /><input type="radio" name='locallang' id='locallang' />తెలుగు - TE</li>
           <li><link rel="stylesheet" href="" /><input type="radio" name='locallang' id='locallang' />ಕನ್ನಡ - KN</li>
           <li><link rel="stylesheet" href="" /><input type="radio" name='locallang' id='locallang' />മലയാളം - ML</li>
           <li><link rel="stylesheet" href="" /><input type="radio" name='locallang' id='locallang' />বাংলা - BN</li>
           <li><link rel="stylesheet" href="" /><input type="radio" name='locallang' id='locallang' />मराठी - MR</li>
  </div>
</div>
</div>
         {/* <div className='text-white bg-green-500 ml-100 flex'>
          <span>Hello, sign in</span>
          <span>Accounts & Lists</span>
         </div> */}
        {/* <div className='bg-black -ml-100'>
          <span className='text-white'>Return</span><br />
          <span className='text-white font-bold'>&Orders</span>
        </div> */}
          </div>
        {/* </div> */}
        <div className='flex p-2 space-x-4 text-base bg-[#232f3e] text-white'>
          <div className=''>All</div>
          <div className=''>Fresh</div>
          <div className=''>Amazon miniTV</div>
          <div className=''>Sell</div>
          <div className=''>Best Sellers</div>
          <div className=''>Today's Deals</div>
          <div className=''>Mobiles</div>
          <div className=''>Electronics</div>
          <div className=''>Customer Service</div>
          <div className=''>Prime</div>
          <div className=''>New Releases</div>
          <div className=''>Gift Ideas</div>
          <div className=''>Home & Kitchen</div>
          <div className=''>Fashion</div>
          <div className=''>Amazon Pay</div>
          <div className=''>Computers</div>
          <div className=''>books</div>
        </div>
        
      </header>
    </>
  )
}

export default Header