import React from 'react';
import './LayoffItem.css';
import LayoffDate from './LayoffDate';
import Card from '../UI/Card';
function LayoffItem(props) {
    // const layoffDate = new Date(2023, 2, 3);
    // const layoffTitle = 'Car INsurance';
    // const layoffAmount = 123.45;
    return (
        <li>
        <Card className='layoff-item'>
            <LayoffDate date={props.date}></LayoffDate>
            <div className='layoff-item__description'>
                <h2>
                    {props.company}
                </h2>
                <div className='layoff-item__price'>{props.count}</div>
            </div>
        </Card>
        </li>
    );
}

export default LayoffItem;