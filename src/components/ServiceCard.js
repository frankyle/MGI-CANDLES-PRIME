import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

const ServiceCard = ({ title, subTitle, imageUrl, description }) => {
    const header = (
        <img alt="Card" src={imageUrl} />
    );
    const footer = (
        <>
            <Button label="Learn More" icon="pi pi-check" />
      </>
    );


    return (
        <div className="card flex justify-content-center">
            <Card title={title} subTitle={subTitle} footer={footer}  header={header} className="md:w-25rem">
                <p className="m-0">
                    {description}
                </p>
            </Card>
        </div>
    );
};

export default ServiceCard;
