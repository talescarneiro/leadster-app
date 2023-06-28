import { buttonOptionsNav, optionsSelect } from "@/app/constants"
import Button from "../Button"
import { useState } from "react";

const NavContent = () => {
    const [isActiveButton, setIsActiveButton] = useState<number | null>(null)

    const handleButtonClick = (index: number) => {
        if (isActiveButton === index) {
            setIsActiveButton(null);
        } else {
            setIsActiveButton(index);
        }
    };

    return (
        <div className="flex gap-5 justify-center xl:justify-between flex-wrap w-full">
            <div className="flex gap-3 overflow-x-auto">
                {buttonOptionsNav.map((button, index) => (
                    <Button key={button.label} label={button.label} onClick={() => handleButtonClick(index)} isActive={isActiveButton === index} />
                ))}
            </div>
            <div className="lg:mt-0 flex items-center gap-3 text-sm">
                <p className='text-[12px] font-semibold'>Ordenar por: </p>
                <select className='rounded-lg border py-1 px-2 text-[12px]'>
                    {optionsSelect.map((select) => (
                        <option key={select.label}>{select.label}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default NavContent