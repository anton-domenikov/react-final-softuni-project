import { Link } from 'react-router-dom';

const MotorcycleCard = ({
    _id,
    model,
    displacement,
    imageURL,
}) => {

    return (
        <li className="otherMotorcycle">
            <h3>Model: {model}</h3>
            <h4>CC: {displacement}</h4>
            <p className="img"><img src={imageURL} /></p>
            <div className="Motorcycle-info">
                <Link to={`/motorcycles/details/${_id}`}><button className="button">Motorcycle Details</button></Link>
            </div>
        </li>
    );
}

export default MotorcycleCard;