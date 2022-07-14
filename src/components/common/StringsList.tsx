import React from 'react';
import './StringsList.css';

interface Props {
    list: string[];
    children?: string;
}

export const StringsList = (props: Props) => {
    const result = props.list
        .map((text, index) => <li className="list__item" key={String(index)}>{text}</li>)
    return <ul className="ul__list">{props.children}{result}</ul>;
}
