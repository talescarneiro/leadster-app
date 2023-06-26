import Image from "next/image"

const Header = () => {
  return (
    <header className='flex items-center justify-center w-100vh h-[100px]'>
            <Image 
                src="/assets/images/logo.png"
                alt="Leadster Logo"
                width="150"
                height="150"
            />
    </header>
  )
}

export default Header