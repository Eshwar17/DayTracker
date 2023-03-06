import React from "react";
import './LayoffsList.css';
import LayoffItem from "./LayoffItem";

const LayoffsList = (props) => {
    if(props.items.length === 0) {
        return <h2 className="layoffs-list__fallback">Found No Tasks.</h2>
    }

    return <ul className="layoffs-list">
        {
            props.items.map((item) => <LayoffItem key={item.id} company={item.company} date={item.date} count={item.count} />)
        }
    </ul>
};

export default LayoffsList;