const Car = ({name, count, year, mark}) => {
    const text = mark ? `${name}: ${count} - ${year}` : 'Cars is not'
    
    return (
        <div>{text}</div>
    )
}

export default Car