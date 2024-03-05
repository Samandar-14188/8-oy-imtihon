import React from 'react';
import Button from '../../../components/Button';

interface InformationCardProps {
  title: string;
  paragraf: string;
  text?: string;
  id?:number;
}

const InformationCard: React.FC<InformationCardProps> = ({ title, paragraf, text, id }) => {
  return (
    <div className="InformationCard-container">
      <span>{text}</span>
      <h1>{title}</h1>
      <p>{paragraf}</p>
      <Button text="See Product" id={id}  />
    </div>
  );
};

export default InformationCard;
