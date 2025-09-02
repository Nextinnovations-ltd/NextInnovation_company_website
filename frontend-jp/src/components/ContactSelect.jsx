import {PropTypes} from "prop-types"
const ContactSelect = ({children,state,setState,error}) => {
    let className = error.length > 0 ? 'border border-red-600' : 'border-2 border-black/10'
    return (
        <>
            <select
                value={state} onChange={(e)=>setState(e.target.value)}
                className={`${className} w-full px-4 py-[16px] md:py-[20px]  placeholder-[#000000CC]
                text-[16px] md:text-[20px] font-normal rounded-[8px] bg-transparent focus:outline-none appearance-none pr-10`}
            >
            {children}
            </select>
            {error.length > 0 && (<p className="text-red-600">{error}</p>)}
            <svg
                className="absolute right-[16px] top-1/2 transform -translate-y-1/2 pointer-events-none"
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="12"
                viewBox="0 0 10 12"
                fill="none"
            >
                <path
                d="M9 4.5L4 9.5L4 -2.18557e-07"
                stroke="black"
                strokeWidth="1.5"
                />
            </svg>
        </>
    )
}
ContactSelect.propTypes = {
    children: PropTypes.node,
    state: PropTypes.string.isRequired,
    setState: PropTypes.func.isRequired,
    error: PropTypes.array.isRequired
}

export default ContactSelect