import React from 'react';
import ServiceCard from './ServiceCard';
import styles from './Services.module.css'; // Import CSS module
import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';
import image4 from '../images/image4.jpg';


const services = [
    {
        title: "Forex Signals",
        imageUrl: image1,
        description: "Receive timely, high-probability trading signals based on our expert analysis."
    },
    {
        title: "Managed Accounts",
        imageUrl: image2,
        description: "Let our professional traders manage your forex portfolio with proven strategies."
    },
    {
        title: "Educational Courses",
        imageUrl: image3,
        description: 'Access comprehensive courses covering all aspects of forex trading.',
    },
    {
        title: "Community Support",
        imageUrl: image4,
        description: 'Join our vibrant community of traders for discussion, support, and shared learning.',
      }
];

const Cards = () => {
    return (
        <div className={styles.services}> 
      <div className={styles.container}> 
        <h2>Our Services</h2>
        <div className={styles['card-grid']}> {/* Use class name with brackets */}
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              imageUrl={service.imageUrl}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </div>
    );
};

export default Cards;
