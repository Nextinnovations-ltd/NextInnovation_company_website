import { useEffect, useState } from "react"
import SuccessfulWorkCard from "./SuccessfulWorkCard"
import SuccessfulWorkNav from "./SuccessfulWorkNav"
import {PropTypes} from "prop-types"

const SuccessfulWorkWebsite = ({category,url}) => {
    let [works,setWorks] = useState()
    
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setWorks(data.data.slice(0, 2));
        })
    }, [url]);

    return (
        <div className="successful-work mb-[172px]">
            <SuccessfulWorkNav category={category}/>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
                {!!works && works.map(work => (
                    <a href={work.link} key={work.id} target="__blank">
                        <SuccessfulWorkCard image={work.image} category={work.category} title ={work.title} language={work.language} />
                    </a>
                ))}
            </div>
        </div>
    )
}

SuccessfulWorkWebsite.propTypes = {
    category : PropTypes.string.isRequired,
    url : PropTypes.string.isRequired
}

export default SuccessfulWorkWebsite