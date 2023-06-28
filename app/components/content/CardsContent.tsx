import Image from "next/image"

interface Card {
    id: string;
    desc: string;
    src: string;
    thumb: string;
    title: string;
    type: string;
}

interface CardsContentProps {
    currentCards: Card[];
}

const CardsContent: React.FC<CardsContentProps> = ({ currentCards }) => {
    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='flex flex-wrap justify-between'>
                {currentCards.map((card: any) => (
                    <div key={card.title} className='flex flex-col shadow-lg rounded-xl w-[300px]'>
                        <div className='object-cover'>
                            <Image className='object-cover' src={card.thumb} alt='Card Thumbnail' width="300" height="300" />
                        </div>
                        <div className='p-5'>
                            <h2 className='font-semibold'>{card.title}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CardsContent