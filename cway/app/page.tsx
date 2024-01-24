import Image from 'next/image'

export default function Home() {
  return (
    <div className='flex flex-col h-screen'>
      <div className='flex justify-center items-center'>
        <h1 className='text-4xl text-blue-400'> C-Way</h1>
      </div>
      <div className='flex flex-col items-center justify-center border border-gray-800 w-3/4 h-3/4'>

        <div>
          <img
            src="/logo.svg" // Specify the path relative to the 'public' folder
            alt="Example Image"
            className="rounded-lg w-3/4 h-3/4" // Adjusted Tailwind CSS classes
          />
        </div>

        <div>
          <button className='bg-red-300 text-white'>
            Buy Now
          </button>
        </div>

        <div>
          <a href="/cryptopay"><button className='bg-red-300 text-white'>
            Pay Via Crypto
          </button> </a>
        </div>

      </div>
    </div>
  )
}
