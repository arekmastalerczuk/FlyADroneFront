import React from 'react';
import './MenuItem.css';

interface Props {
    text: string;
    to: string;
}

export const MenuItem = (props: Props) => (
    <li className="menu__item"><a className="menu__link" href={props.to}>{props.text}</a></li>
)
