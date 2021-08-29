import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CardItem from "./CardItem";
import samsungPhoto from "../../assets/images/samsaung.png";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const LastPhones = (props) => {
  return (
    <div className="container" style={{ direction: "ltr" }}>
      <div className="row text-center">
        <h4 className="my-4" >آخرین گوشی های کارشناسی شده</h4>
      </div>
      <Carousel
        showDots={true}
        autoPlay={true}
        infinite={true}
        responsive={responsive}
      >
        <div className="my-4 mx-3">
          <CardItem
            image={samsungPhoto}
            title="Iphone 12 Pro Max"
            description=" رنگ آبی - بسیار تمیز "
            status="کارکرده"
            price="۳۰،۰۰۰،۰۰۰"
          />
        </div>
        <div className="my-4 mx-3">
          <CardItem
            image={samsungPhoto}
            title="Iphone 12 Pro Max"
            description=" رنگ آبی - بسیار تمیز "
            status="کارکرده"
            price="۳۰،۰۰۰،۰۰۰"
          />
        </div>
        <div className="my-4 mx-3">
          <CardItem
            image={samsungPhoto}
            title="Iphone 12 Pro Max"
            description=" رنگ آبی - بسیار تمیز "
            status="کارکرده"
            price="۳۰،۰۰۰،۰۰۰"
          />
        </div>
        <div className="my-4 mx-3">
          <CardItem
            image={samsungPhoto}
            title="Iphone 12 Pro Max"
            description=" رنگ آبی - بسیار تمیز "
            status="کارکرده"
            price="۳۰،۰۰۰،۰۰۰"
          />
        </div>
        <div className="my-4 mx-3">
          <CardItem
            image={samsungPhoto}
            title="Iphone 12 Pro Max"
            description=" رنگ آبی - بسیار تمیز "
            status="کارکرده"
            price="۳۰،۰۰۰،۰۰۰"
          />
        </div>
        <div className="my-4 mx-3">
          <CardItem
            image={samsungPhoto}
            title="Iphone 12 Pro Max"
            description=" رنگ آبی - بسیار تمیز "
            status="کارکرده"
            price="۳۰،۰۰۰،۰۰۰"
          />
        </div>
        <div className="my-4 mx-3">
          <CardItem
            image={samsungPhoto}
            title="Iphone 12 Pro Max"
            description=" رنگ آبی - بسیار تمیز "
            status="کارکرده"
            price="۳۰،۰۰۰،۰۰۰"
          />
        </div>
        <div className="my-4 mx-3">
          <CardItem
            image={samsungPhoto}
            title="Iphone 12 Pro Max"
            description=" رنگ آبی - بسیار تمیز "
            status="کارکرده"
            price="۳۰،۰۰۰،۰۰۰"
          />
        </div>
        <div className="my-4 mx-3">
          <CardItem
            image={samsungPhoto}
            title="Iphone 12 Pro Max"
            description=" رنگ آبی - بسیار تمیز "
            status="کارکرده"
            price="۳۰،۰۰۰،۰۰۰"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default LastPhones;
