"use client";

interface ButtonProps {
    label: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    isActive?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    label,
    onClick,
    isActive,
}) => {
  return (
    <button
        onClick={onClick}
        className={`
            disabled:opacity-70
            disabled:cursor-not-allowed
            rounded-full
            border
            transition
            px-4
            py-2
            text-[12px]
            font-semibold
            hover:border-blueprimary
            ${!isActive && 'hover:text-blueprimary'}
            ${isActive ? 'bg-blueprimary' : 'bg-white'}
            ${isActive ? 'text-white' : 'text-black'}
        `}
    >
        {label}
    </button>
  )
}

export default Button