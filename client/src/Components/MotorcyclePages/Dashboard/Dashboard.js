import { useState, useEffect } from 'react';
import MotorcyclesCard from '../MotorcyclesCards/MotorcyclesCard';
import './Dashboard.css'

const Dashboard = () => {
    const [motorcycles, setMotorcycles] = useState([]);

    useEffect(()=>{
        console.log('component mounted');
        fetch('http://localhost:4040/motorcycle')
            .then(res => res.json())
            .then(motorcycles => {
                console.log(motorcycles);
                setMotorcycles(motorcycles)
            });
    },[])

    return (
        <div id="dashboard" className="dashboard">
            <h1>Dashboard</h1>

            <ul className="all-motorcycles">
                {motorcycles.map(x =>
                    <MotorcyclesCard key={x._id} {...x} />
                )}
            </ul>
        </div>
    )
}

export default Dashboard;