import Image from "next/image"

const HeroFooter = () => {
  return (
    <section className='bg-primary w-screen lg:h-[600px] h-[800px] mt-[80px] mb-[50px] flex items-center justify-center'>
      <div className="lg:w-80-screen px-12 flex lg:flex-row flex-col items-center justify-center">
        <div className="lg:w-50-screen">
          <Image 
            src="/assets/images/comparativo_img_CTA.png"
            alt="Comparativo CTA"
            width="500"
            height="500"
            className="max-w-full h-auto"
          />
        </div>

        <div className="lg:w-50-screen flex flex-col justify-center">
          <div className="flex flex-col items-start lg:w-50-screen gap-2">
            <h2 className="lg:text-xl">Pronto para triplicar sua <span className="font-semibold">Geração de Leads?</span></h2>
            <p>Criação e ativação em <span className="font-semibold">4 minutos.</span></p>
          </div>
          <div className='border my-3 w-full' />
          <div className="flex flex-col lg:flex-row gap-2 items-center">
            <button className="text-[11px] text-white font-medium border hover:bg-white whitespace-nowrap hover:text-blueprimary hover:border-blueprimary transition bg-blueprimary rounded-full px-4 py-3">VER DEMONSTRAÇÃO</button>
            <Image 
              src="/assets/images/selo_RD.png"
              alt="Selo RD"
              width="130"
              height="130"
            />
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-2 text-xs">
            <p><span className="font-semibold">Não</span> é necessário Cartão de Crédito </p>
            <p className="xl:block lg:block md: block sm:hidden xs:hidden">|</p>
            <div className="flex h-full mx-1 gap-1">
              <div className="flex items-center">
                <Image 
                  src="/assets/images/rating.webp"
                  alt="Rating Image"
                  width={70}
                  height={50}
                />
              </div>
              <div>
                <p><span className="font-semibold">4.9/</span>5 média de satisfação</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroFooter