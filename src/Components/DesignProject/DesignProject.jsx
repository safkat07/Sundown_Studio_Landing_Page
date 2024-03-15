import { useState } from 'react';
import './DesignProject.css'
import img1 from '../../assets/img1.webp'
import img2 from '../../assets/img2.webp'
import img3 from '../../assets/img3.webp'



const DesignProject = () => {
    const designList = [
        {
            "id": 1,
            "listTitle": "Design",
            "listDescription": "Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings.",
            "img": img1
        },
        {
            "id": 2,
            "listTitle": "Project",
            "listDescription": "Once we have a design, our production team takes the lead in bringing it to life. We manage all stages of the project, from build specifications and technical drawings to site surveys, vendor management, and 2D & 3D production. We have an extensive network of partners to meet each unique design and project need.",
            "img": img2
        },
        {
            "id": 3,
            "listTitle": "Execution",
            "listDescription": "We’re with you every step of the way, from the project initiation to launch day. Our production and design teams are onsite to direct and guide the process down to the last point of completion, ensuring success across the built space and experience.",
            "img": img3
        },

    ]

    const [listImg, setListImg] = useState(img1)
    const [ListTitle, setListTitle] = useState("Design")
    const [activeItemId, setActiveItemId] = useState(1);
    const [ListDesc, setListDesc] = useState("Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings.")
    return (
        <div className='p-10 '>
            <div id='dCon' className='rounded-2xl  mx-auto flex items-center justify-between' >
                <div className='leading-none w-1/2 pl-[10vw] text-gray-400 cursor-pointer text-left  '>
                    {
                        designList.map(data => <p
                            className={activeItemId === data.id ? 'text-white' : ''}
                            key={data.id}
                            onClick={() => {
                                setListImg(
                                    data.id === 1 ? img1 :
                                        data.id === 2 ? img2 :
                                            img3
                                )
                                setListDesc(data.listDescription)
                                setListTitle(data.listTitle)
                                setActiveItemId(data.id);
                            }}

                        >
                            {data.listTitle}

                        </p>)
                    }
                    <p className='text-[1vw] mt-4 cursor-text text-white leading-normal w-2/3'>{ListDesc}</p>

                </div>
                <div className='w-1/2'>
                    <img className=' ' src={listImg} alt="" />
                </div>

            </div>
        </div >
    );
};

export default DesignProject;