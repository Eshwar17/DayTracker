import './LayoffDate.css';
function LayoffDate(props) {
    const month = props.date.toLocaleString('en-US', {month: 'long'});
    const day = props.date.toLocaleString('en-US', {day: '2-digit'});
    const year = props.date.getFullYear();
    return (
        <div className='layoff-date'>
                <div className='layoff-date__month'>{month}</div>
                <div className='layoff-date__day'>{day}</div>
                <div className='layoff-date__year'>{year}</div>
            </div>
    );
}
export default LayoffDate;