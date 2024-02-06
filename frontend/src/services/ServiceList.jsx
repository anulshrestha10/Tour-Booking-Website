
import React from 'react';
import { Col } from "reactstrap";
import ServiceCard from './ServiceCard';

import customizationImg from '../assets/images/customization.png';
import guideImg from '../assets/images/guide.png';
import weatherImg from '../assets/images/weather.png';

const servicesData = [
    {
        imgUrl: weatherImg,
        title: "Calculate Weather",
        desc: "Lorem"
    },
    {
        imgUrl: guideImg,
        title: "Best Tour Guide",
        desc: "Lorem"
    },
    {
        imgUrl: customizationImg,
        title: "Customization",
        desc: "Lorem"
    },
]

const ServiceList = () => {
  return ( <>
  {
    servicesData.map((item, index) => ( <Col lg='3' key={index}><ServiceCard item={item} />
    </Col>
    ))
  }
  </>
   
  );
};

export default ServiceList;
