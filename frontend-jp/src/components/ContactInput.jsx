import {PropTypes} from "prop-types"
const ContactInput = ({type,placeholder,state,setState,error}) => {

    let className = error.length > 0 ? 'border border-red-600' : 'border-2 border-black/10';
    
    return (
        <div>
            <input 
                type={type} 
                placeholder={placeholder} 
                className={`${className} w-full px-4 py-[16px] md:py-[20px] placeholder-[#000000CC]
                placeholder:text-[16px] md:placeholder:text-[20px] placeholder:font-normal rounded-[8px] text-[16px] md:text-[20px] bg-transparent focus:outline-none`}
                onChange={(e)=>setState(e.target.value)} value={state}
            />
            {error.length > 0 && (<p className="text-red-600">{error}</p>)}
        </div>

    )
}

ContactInput.propTypes = {
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    setState: PropTypes.func.isRequired,
    error: PropTypes.array.isRequired
}

export default ContactInput