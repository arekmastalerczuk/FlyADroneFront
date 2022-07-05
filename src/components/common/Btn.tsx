import React from 'react';
import './Btn.css'

interface Props {
    text: string;
    style?: {};
}

export const Btn = (props: Props) => (
    <button className="btn" style={props.style}>{props.text}</button>
)
