import Image from "next/image";
import { useState } from "react";
import {
  Carousel,
  CarouselIndicators,
  CarouselControl,
  CarouselItem,
  CarouselCaption
} from "reactstrap";

export default function ImageCarousel({id, items}){
   
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };

    const slides = items.map((item, idx) => {
        return (
          <CarouselItem
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            key={idx}
            activeIndex={activeIndex}
            style={{position: "relative"}}
          >
            <Image
                src={item.src}
                alt={item.altText}
                height={"500"}
                width={"1200"}
                quality={50}
                priority
                layout="intrinsic"
            />

            <CarouselCaption
              captionText={item.caption}
              // captionHeader={item.caption}
            />            

          </CarouselItem>
        );
    });
    

    return (
        <Carousel
          id={`carousel_${id}`}
          className="carousel slide"
          activeIndex={activeIndex}
          interval={5000}
          next={next}
          previous={previous}
          dark={false}
        >
          {items.length > 1 && (
            <CarouselIndicators
              items={items}
              activeIndex={activeIndex}
              onClickHandler={goToIndex}
            />
          )}
          {items.length > 0 && slides}
          {items.length > 1 && (
            <CarouselControl
              direction="prev"
              directionText="Previous"
              onClickHandler={previous}
            />
          )}
          {items.length > 1 && (
            <CarouselControl
              direction="next"
              directionText="Next"
              onClickHandler={next}
            />
          )}
        </Carousel>
    );    
};
