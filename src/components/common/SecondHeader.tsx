import React from 'react';
import './SecondHeader.css';

interface Props {
    text: string;
}

export const SecondHeader = (props: Props) => (
    <h2 className="SecondHeader">{props.text}</h2>
);


