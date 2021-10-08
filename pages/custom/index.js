import { useState } from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


export default function Index() {

    // const [config, setConfig] = useState({
    //     brand: 'INTEL',
    //     budget: 0,
    //     use: 'gaming',
    //     format: 'atx',
    //     design: 'minimal',
    //     refrigeration: 'stock'
    // });

    // const slides = [
    //   {

    //   }
    // ]

    const items = [
      {
        name: "CPU",
        img: "./mine.jpg",
        specs: [
          {
            name: "Ryzen 3 3200G" 
          },
          {
            name: "Ryzen 5 3600G" 
          }
        ]
      },
      {
        name: "MOTHERBOARD",
        img: "./mine.jpg",
        specs: [
          {
            name: "B450" 
          },
          {
            name: "ASUS A320" 
          }
        ]
      },
      {
        name: "RAM",
        img: "./mine.jpg",
        specs: [
          {
            name: "16gb RAM" 
          },
          {
            name: "32GB RAM" 
          }
        ]
      
      },
      {
        name: "SSD",
        img: "./mine.jpg",
        specs: [
          {
            name: "SSD 240GB" 
          },
          {
            name: "SSD 1TB" 
          }
        ]
      },
      {
        name: "HDD",
        img: "./mine.jpg",
        specs: [
          {
            name: "HDD 1TB" 
          },
          {
            name: "HDD 2TB" 
          }
        ]
      },
    ]



    return (
        
          <Carousel axis="horizontal">
            
            {items.map((item) => (
              <div>
                {/* <img src={item.img} alt="" /> */}
                <p className="legend">{item.name}</p>
                <Carousel axis="vertical" swipeable verticalSwipe useKeyboardArrows infiniteLoop>
                  <button >HOla</button>
                  {item.specs.map((spec) => (
                    <div>
                    <img src="farcry.jpg" alt="" />
                    <p className="legend">{spec.name}</p>
                    </div>
                  ))}  
              </Carousel>
              </div>
            ))}  

          </Carousel>
    )
}
