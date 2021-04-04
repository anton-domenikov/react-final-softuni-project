import { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../UserPages/UserContext';
import MyBikesMotoCard from '../MotorcyclesCards/MyBikesMotoCard';
import './MyBikes.css'

const MyBikes = ({history}) => {
    const [motorcycles, setMotorcycles] = useState([]);

    const { user, setUser } = useContext(UserContext);

    useEffect(() => {
        fetch('http://localhost:4040/motorcycle')
            .then(res => res.json())
            .then(motorcycles => {
                // console.log(motorcycles);
                setMotorcycles(motorcycles)
            });
    }, [])

    const userId = user[1];
    let myBikes = motorcycles.filter(bike => bike.creator === userId);

    return (
        <div id="my-bikes" className="my-bikes">
            <h1>My Suzuki's</h1>

            <ul className="my-motorcycles">
                {myBikes.map(x =>
                    <MyBikesMotoCard history={history} key={x._id} {...x} />
                )}
            </ul>
        </div>
    )
}

export default MyBikes;