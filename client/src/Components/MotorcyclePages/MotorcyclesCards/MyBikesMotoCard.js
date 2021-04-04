import { Link } from 'react-router-dom';

const MyBikesMotoCard = ({
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
            <div className="motorcycle-info">
                <Link to={`/motorcycles/edit/${_id}`}><button className="button">Edit</button></Link>
                <Link to={`/motorcycles/details/${_id}`}><button className="button">Details</button></Link>
                <Link to={`/motorcycles/delete/${_id}`}><button className="button">Delete</button></Link>
            </div>
        </li>
    );
}

export default MyBikesMotoCard;