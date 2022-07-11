import React from 'react';
import './Btn.css'
import {Link} from "react-router-dom";

interface Props {
    text: string;
    to?: string;
    style?: {};
}

export const Btn = (props: Props) => (
    props.to
        ? <Link className="btn" to={props.to} style={props.style}>{props.text}</Link>
        : <button style={props.style}>{props.text}</button>
)
