"use client";

import React, { useState } from 'react'
import Select from 'react-select'
import { optionsSelect, buttonOptionsNav } from '../constants'
import Button from './Button';


const Content = () => {
  const [isActiveButton, setIsActiveButton] = useState<number | null>(null)

  const handleButtonClick = (index: number) => {
    if (isActiveButton === index) {
      setIsActiveButton(null);
    } else {
      setIsActiveButton(index);
    }
  };


  return (
    <main className='flex justify-center m-9'>
        <div className="flex justify-evenly flex-wrap lg:flex-no-wrap lg:gap-[100px] md:gap-8 sm:gap-7 xs:gap-5">
            <div className="flex flex-wrap lg:flex-no-wrap gap-3">
                {buttonOptionsNav.map((button, index) => (
                    <Button key={button.label} label={button.label} onClick={() => handleButtonClick(index)} isActive={isActiveButton === index} />
                ))}
            </div>
            <div className="lg:mt-0 flex items-center gap-3 text-sm">
                <p className='text-[12px] font-semibold'>Ordenar por: </p>
                <select className='rounded-lg border py-1 px-2 text-[12px]'>
                    {optionsSelect.map((select) => (
                        <option>{select.label}</option>
                    ))}
                </select>
                {/* <Select options={optionsSelect} defaultValue={optionsSelect[0]} className='rounded-full' /> */}
            </div>
        </div>
    </main>
  )
}

export default Content