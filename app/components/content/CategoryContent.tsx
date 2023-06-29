import { categoryOptions, optionsSelect } from "@/app/constants"
import Button from "../Button"
import { useState } from "react";

interface CategoryContentProps {
    onSelectCategory: (category: string | null) => void;
}

const CategoryContent: React.FC<CategoryContentProps> = ({ onSelectCategory}) => {
    const [isActiveButton, setIsActiveButton] = useState<number | null>(null)

    const handleButtonClick = (index: number) => {
        if (isActiveButton === index) {
            setIsActiveButton(null);
            onSelectCategory(null)
        } else {
            setIsActiveButton(index);
            onSelectCategory(categoryOptions[index].value)
        }
    };

    return (
        <div className="flex gap-5 justify-center xl:justify-between flex-wrap w-full">
            <div className="flex gap-3 overflow-x-auto">
                {categoryOptions.map((category, index) => (
                    <Button key={category.label} label={category.label} onClick={() => handleButtonClick(index)} isActive={isActiveButton === index} />
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

export default CategoryContent