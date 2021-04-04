import { useState, useEffect } from 'react';

const MotorcycleDetails = ({
    match
}) => {
    const [motorcycle, setMotorcycle] = useState([]);
    console.log(match);

    useEffect(() => {
        fetch(`http://localhost:4040/motorcycle/one-bike/${match.params.bikeId}`)
            .then(res => res.json())
            .then(motorcycle => {
                console.log(motorcycle);
                setMotorcycle(motorcycle)
            });
    },[])

    return (
        <li className="otherMotorcycle">
            <h3>Model: {motorcycle.model}</h3>
            <h4>CC: {motorcycle.displacement}</h4>
            <p className="img"><img src={motorcycle.imageURL} /></p>
           
        </li>
    );
}

export default MotorcycleDetails;