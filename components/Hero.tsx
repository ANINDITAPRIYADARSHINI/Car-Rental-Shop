import React from 'react'

export default function Hero() {
  return (
    <div className= "flex xl:flex-row flex-col gap-5 relative z-0 max-w-[1440px] mx-auto">
        <div className="flex-1 pt-36 sm:px-16 px-6">
            <h1 className="xl:text-[45px] sm:text-[64px] text-[50px] font-extrabold">
                Find, book, or rent a car - quickly and easily!
            </h1>

            <p className="text-[27px] text-black font-light mt-5">
                Streamline your car rental experience with our effortless booking process.
            </p>
        </div>
    </div>
  )
}

