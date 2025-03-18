const Display = (props) => {
    return (
        <div>
            <h1>Hello {props.stats.name}</h1>
            <h1>You are {props.stats.age}</h1>
            <h1>Your weight is {props.stats.weight}</h1>
        </div>
    );
}

export default Display;