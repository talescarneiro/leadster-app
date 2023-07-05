import { categoryOptions, optionsSelect } from "@/app/constants"
import Button from "../Button"

interface CategoryContentProps {
    handleButtonCategoryClick: (index: number, category: string) => void;
    isActiveButtonCategory: number | null;
    selectedSortOption: string;
    handleSortOptionChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const CategoryContent: React.FC<CategoryContentProps> = ({ handleButtonCategoryClick, isActiveButtonCategory, selectedSortOption, handleSortOptionChange }) => {
    return (
        <div className="flex gap-5 justify-center xl:justify-between flex-wrap w-full">
            <div className="flex gap-3 overflow-x-auto">
                {categoryOptions.map((category, index) => (
                    <Button key={category.label} label={category.label} onClick={() => handleButtonCategoryClick(index, category.value)} isActive={isActiveButtonCategory === index} />
                ))}
            </div>
            <div className="lg:mt-0 flex items-center gap-3 text-sm">
                <p className='text-[12px] font-semibold'>Ordenar por: </p>
                <select className='rounded-lg border py-1 px-2 text-[12px]' value={selectedSortOption} onChange={handleSortOptionChange}>
                    {optionsSelect.map((select) => (
                        <option key={select.label} value={select.value}>{select.label}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default CategoryContent