import { useState } from "react";
import CareerCard from "../../components/CareerCard"
import { Link, useParams } from "react-router-dom";

const CareerDetail = () => {
    let {id} = useParams();
    let [news,setNews] = useState('');
    let [latest,setLatest] = useState([]);
    let [error,setError] = useState(false)

    let url= 'https://demo-site.next-innovations.ltd/ni-backend/public/api/news/'+id
    fetch(url)
    .then(res => res.json())
    .then(data => {
        if (data.data) {
            setNews(data.data);
            setLatest(data.latest);
            setError(false)
        }else {
            setError(true)
        }
    })
    .catch(err => {
        console.log(err.message);
        setError(true)
    })

    
    return (
        <>
            <style>
                {`
                    .description img {
                        display: block;
                        margin: 0 auto;
                    }
                    .description {
                        font-size: 20px;
                        line-height: 160%;
                    }
                `}
            </style>

            {!!error && (
                <div className="bg-gray-200 h-[70vh] flex justify-center items-center">
                    <h1 className="text-[40px] font-medium">Data not Found</h1>
                </div>
            )}

            {!!news && (
                <>
                    <div className="max-w-[840px] mx-auto mt-[74px] px-[24px] lg:px-0">
                        <div className="flex gap-[16px] items-center text-[18px] text-[#121212] font-semibold leading-[120%] tracking-[0.09px]">
                            <p>{news.created_at}</p>
                            <p className="opacity-[0.5]">{news.category}</p>
                        </div>
                        <h1 className="text-[35px] md:text-[35px] lg:text-[40px] text-[#000000] font-light leading-[145%] tracking-[-0.64px] mt-[16px]">{news.title}</h1>
                        <img src={news.feature} className="mt-[70px] mb-[50px] mx-auto w-[60%]" alt="" />

                        <div className="description" dangerouslySetInnerHTML={{ __html: news.description }} />
                    </div>
                    
                    <div className="max-w-[1240px] mx-auto px-[24px] xl:px-0 mt-[160px]">
                        <div className="flex justify-between text-[#121212] mb-[48px]">
                            <h3 className="text-[32px] font-semibold leading-[109%] uppercase">related BLOGS</h3>
                            <Link to="/news" className="flex gap-[12px] items-center text-[16px] font-semibold leading-[125%] uppercase">
                                <p className="text-nowrap">VIEW MORE</p>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="6"
                                    viewBox="0 0 16 6"
                                    fill="none"
                                >
                                    <path d="M0 5H14L11.2 1" stroke="#121212" strokeWidth="1.5" />
                                </svg>
                            </Link>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-[20px] gap-y-[64px] text-[#999] mb-[100px]">
                            {latest.map(blog => (
                                <Link to={`/news/${blog.id}`} key={blog.id}>
                                    <CareerCard title={blog.title} image={blog.feature} category={blog.category} date={blog.created_at} />
                                </Link>
                            ))}
                        </div>
                        {/* <div className="flex gap-[48px] items-center justify-center mt-[40px] mb-[148px]">
                            <div className="w-full bg-[#D6D6D6] h-[4px]">
                                <div className="bg-[#000] h-[4px] w-[75%]"></div>
                            </div>
                            <div className="flex gap-[8px]">
                                <button className="bg-[#F5F5F5] w-[40px] h-[40px] flex items-center justify-center rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="7" height="9" viewBox="0 0 7 9" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M6.82031 0L2.96317 4.5L6.82031 9H3.85689L0.627293 5.23214L-0.000256062 4.5L0.627293 3.76786L3.85689 0H6.82031Z" fill="black"/>
                                    </svg>
                                </button>
                                <button className="bg-[#F5F5F5] w-[80px] h-[40px] flex items-center justify-center rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="7" height="9" viewBox="0 0 7 9" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M5.95678e-05 0L3.8572 4.5L0 9.00007H2.96342L6.19308 5.23214L6.82063 4.5L6.19308 3.76786L2.96348 0H5.95678e-05Z" fill="black"/>
                                    </svg>
                                </button>
                            </div>
                        </div> */}
                    </div>
                </>
            )}
            
        </>
        
    )
}

export default CareerDetail