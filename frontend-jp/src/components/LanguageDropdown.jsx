import{ useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import US from '../../public/images/us-flag.svg'
import JP from '../../public/images/jp-flag.svg'

const LanguageDropdown = () => {
    const { i18n } = useTranslation();
    const [langOpen, setLangOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setLangOpen(!langOpen);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setLangOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        setLangOpen(false);
    };

    return (
        <div className="relative inline-block pe-8 text-left">
            <div ref={dropdownRef}>
                <button onClick={toggleDropdown} className="flex bg-[#FFFFFF] gap-3">
                    <img src={i18n.language === 'en' ? US : JP} alt="" />
                    <p>{i18n.language === 'en' ? 'English' : '日本'}</p>
                </button>

                {langOpen && (
                    <div className="absolute right-[0px] z-10 mt-3 w-[139px] origin-top-right rounded-md bg-white shadow-md ring-1 ring-black ring-opacity-5" role="menu">
                        <div className="p-2 space-y-[6px]">
                            <button onClick={() => changeLanguage('en')} className="flex gap-[10px] w-full px-[19px] py-[11px] rounded-md hover:bg-[#F0F0F0]">
                                <img src={US} alt="" />
                                <p>English</p>
                            </button>
                            <button onClick={() => changeLanguage('jp')} className="flex gap-[10px] w-full px-[19px] py-[11px] rounded-md hover:bg-[#F0F0F0]">
                                <img src={JP} alt="" />
                                <p>日本</p>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default LanguageDropdown;
