const Button = ({label, iconURL, backgroundColor, borderColor, textColor, fullwidth}) => {
    return (
        <button className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none duration-150  active:scale-95 ${backgroundColor
            ? `${backgroundColor} ${textColor} ${borderColor} hover:bg-black hover:border-black hover:text-white `
            : 'bg-coral-red text-white border-coral-red hover:bg-slate-600 hover:border-slate-600'} 
            ${fullwidth && 'w-full'}
            rounded-full `}>
            {label}
            {
                iconURL && <img src={iconURL} alt="arrow"
            className="ml-2 rounded-full w-5 h-5 "
            />
            }
        </button>
    )
}

export default Button