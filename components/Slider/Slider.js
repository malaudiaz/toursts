import React from "react";
import {Card, CardBody, CardImg, CardTitle, CardText} from "reactstrap";

var $ = require("jquery");
if (typeof window !== "undefined") {
  // Client-side-only code
  window.$ = window.jQuery = require("jquery");
}
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

const options = {
  loop: true,
  center: true,
  items: 3,
  margin: 10,
  autoplay: false,
  dots: true,
  autoplayTimeout: 8500,
  smartSpeed: 450,
  nav: false,
  responsive: {
      0: {
          items: 1
      },
      600: {
          items: 3
      },
      1000: {
          items: 3
      }
  }
};

export default function Slider({id, items}) {

    return (
        <div className="col-md-12">
            <OwlCarousel className='owl-carousel owl-theme' {...options}>
                {
                    items.map(({src, title, text}, idx)=>(
                        <div className="item" key={idx}>
                            <Card>
                                <CardImg
                                    alt="Card image cap"
                                    src={src}
                                    top
                                    width={"186"}
                                    height={"256"}
                                />
                                <CardBody>
                                    <CardTitle tag="h5">
                                        {title}
                                    </CardTitle>
                                    <CardText>
                                        {text}
                                    </CardText>
                                </CardBody>
                            </Card>
                        </div>
                    ))
                }
            </OwlCarousel>  
        </div>          
    );
};
