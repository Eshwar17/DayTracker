import React, { useState } from 'react';
import './Layoffs.css';
import LayoffItem from './LayoffItem';
import Card from '../UI/Card';
import LayoffsFilter from './LayoffsFilter';
import LayoffsList from './LayoffsList';
import LayoffsChart from './LayoffsChart';

function Layoffs(props) {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        // console.log("Layoffs.js");
        // console.log(selectedYear);
        setFilteredYear(selectedYear);
    };

    const filteredLayoffs = props.items.filter(layoff => {
        return layoff.date.getFullYear().toString() === filteredYear;
    });

    return (
        <div>
        <Card className='layoffs'>
            <LayoffsFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            <LayoffsChart layoffs={filteredLayoffs} />
            <LayoffsList items={filteredLayoffs} />
            {/* {filteredLayoffs.length === 0 ? <p>No Layoffs Found.</p> : 
            filteredLayoffs.map((item) => <LayoffItem key={item.id} company={item.company} date={item.date} count={item.count} />)} */}
            {/* <LayoffItem company={props.data[0].company} date={props.data[0].date} count={props.data[0].count}></LayoffItem>
            <LayoffItem company={props.data[0].company} date={props.data[0].date} count={props.data[0].count}></LayoffItem> */}
      
        </Card>
        </div>
    );
}
export default Layoffs;