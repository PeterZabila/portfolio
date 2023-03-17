import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg"
import IMG2 from "../../assets/portfolio2.jpg"
import IMG3 from "../../assets/portfolio3.jpg"
import IMG4 from "../../assets/portfolio4.jpg"
import IMG5 from "../../assets/portfolio5.png"
import IMG6 from "../../assets/portfolio6.jpg"

import {Pagination, Navigation, Scrollbar} from 'swiper';
import {Swiper, SwiperSlide } from 'swiper/react';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const data = [
    {
        id: 1,
        image: IMG1,
        title: "IceCream-Galaxy",
        github: "https://github.com/PeterZabila/IceCream-Galaxy",
        demo: "https://isiayer.github.io/icecream-galaxy/"
    },
    {
        id: 2,
        image: IMG2,
        title: "Filmoteka",
        github: "https://github.com/PeterZabila/filmoteka",
        demo: "https://peterzabila.github.io/filmoteka/"
    },
    {
        id: 3,
        image: IMG3,
        title: "PETLY",
        github: "https://github.com/PeterZabila/petly-team-project",
        demo: "https://blackinhub.github.io/petly-team-project-client/"
    },
    {
        id: 4,
        image: IMG4,
        title: "Portfolio",
        github: "https://github.com/PeterZabila/portfolio",
        demo: "https://peterzabila.github.io/portfolio/"
    },
    {
        id: 5,
        image: IMG5,
        title: "Title",
        github: "https://github.com",
        demo: "https://github.com"
    },
]

const Portfolio =() => {
    return (
        <section id="portfolio"> 
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>

            <Swiper className="container portfolio__container"
                modules={[Pagination, Navigation, Scrollbar]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {
                    data.map(({id, image, title, github, demo}) => {
                        return (
                            <SwiperSlide className="portfolio__item" key={id}>
                                <div className="portfolio__item-image">
                                    <img src={image} alt="" />
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio__item-cta">
                                    <a href={github} className="btn" target="_blank" rel="noreferrer noopener">Github</a>
                                    <a href={demo} className="btn btn-primary" target="_blank" rel="noreferrer noopener">Live Demo</a>
                                </div>
                    
                </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    )
}

export default Portfolio;

// import "./portfolio.css";
// import IMG1 from "../../assets/portfolio1.jpg"
// import IMG2 from "../../assets/portfolio2.jpg"
// import IMG3 from "../../assets/portfolio3.jpg"
// import IMG4 from "../../assets/portfolio4.jpg"
// import IMG5 from "../../assets/portfolio5.png"
// import IMG6 from "../../assets/portfolio6.jpg"

// const data = [
//     {
//         id: 1,
//         image: IMG1,
//         title: "Title",
//         github: "https://github.com",
//         demo: "https://github.com"
//     },
//     {
//         id: 2,
//         image: IMG2,
//         title: "Title",
//         github: "https://github.com",
//         demo: "https://github.com"
//     },
//     {
//         id: 3,
//         image: IMG3,
//         title: "Title",
//         github: "https://github.com",
//         demo: "https://github.com"
//     },
//     {
//         id: 4,
//         image: IMG4,
//         title: "Title",
//         github: "https://github.com",
//         demo: "https://github.com"
//     },
//     {
//         id: 5,
//         image: IMG5,
//         title: "Title",
//         github: "https://github.com",
//         demo: "https://github.com"
//     },
//     {
//         id: 6,
//         image: IMG6,
//         title: "Title",
//         github: "https://github.com",
//         demo: "https://github.com"
//     },
// ]

// const Portfolio =() => {
//     return (
//         <section id="portfolio"> 
//         <h5>My Recent Work</h5>
//         <h2>Portfolio</h2>

//             <div className="container portfolio__container">
//                 {
//                     data.map(({id, image, title, github, demo}) => {
//                         return (
//                             <article className="portfolio__item" key={id}>
//                                 <div className="portfolio__item-image">
//                                     <img src={image} alt="" />
//                                 </div>
//                                 <h3>{title}</h3>
//                                 <div className="portfolio__item-cta">
//                                     <a href={github} className="btn" target="_blank" rel="noreferrer noopener">Github</a>
//                                     <a href={demo} className="btn btn-primary" target="_blank" rel="noreferrer noopener">Live Demo</a>
//                                 </div>
                    
//                 </article>
//                         )
//                     })
//                 }
//             </div>
//         </section>
//     )
// }

// export default Portfolio;