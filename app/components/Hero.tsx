import Image from "next/image"

const Hero = () => {
  return (
    <section className='bg-primary w-screen h-[400px] flex flex-col gap-3 items-center justify-center'>
        <p className='border-2 border-secondary px-4 py-1 rounded-full rounded-bl-md text-secondary text-[11px] font-bold'>WEBINARS EXCLUSIVOS</p>
        <p className='text-base xs:text-2xl sm:text-3xl md:text-4xl lg:text-4xl text-black'>Menos Conversinha,</p>
        <div className="flex h-[55px] relative px-3 items-center">
        <p className='text-base xs:text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold text-gradient bg-gradient-to-r from-blueprimary to-bluesecondary bg-clip-text text-transparent'>Mais Conversão</p>
            <Image 
                src="/assets/images/asset-hero.png"
                alt="Asset Hero"
                width="30"
                height="30"
                className="absolute block xs:w-[23px] sm:w-[23px] md:w-[30px] lg:w-[30px] xs:top-2 sm:top-2 md:top-0 lg:top-0 xs:right-1 sm:right-1 md:right-0 lg:right-0"
            />
        </div>
        <div className="w-2/6 xs:w-5/6 sm:w-3/6 md:w-4/6 lg:w-2/6 h-px bg-gray" />
        <p className="px-5 xs:text-[10px] sm:text-[10px] md:text-[11px] lg:text-[13px]">Conheça as estratégias que <span className="font-semibold">mudaram o jogo</span> e como aplicá-las no seu negócio</p>
    </section>
  )
}

export default Hero