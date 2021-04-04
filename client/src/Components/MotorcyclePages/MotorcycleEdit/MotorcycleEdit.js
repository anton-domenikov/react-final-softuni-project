import './MotorcycleEdit.css'
import { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../UserPages/UserContext';

const MotorcycleEdit = ({
    match,
    history
}) => {
    const { user, setUser } = useContext(UserContext);

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

    const onSubmitHandler = (e) => {
        e.preventDefault();

        const motorcycle = {
            model: e.target.model.value,
            year: e.target.year.value,
            displacement: e.target.displacement.value,
            imageURL: e.target.imageURL.value
        }

        fetch(`http://localhost:4040/motorcycle/one-bike/${match.params.bikeId}`,
            {
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify(motorcycle)
            })
            .then((res) => console.log(res))
            .then(() => history.push('/motorcycles/my-bikes'))
    }


    return (
        <section id="edit">
            <div className="edit-form">
                <h1>Edit your Suzuki</h1>

                <form onSubmit={onSubmitHandler} >
                    <label htmlFor="model">Model</label>
                    <input
                        type="text"
                        id="model"
                        name="model"
                        // value={motorcycle.model}
                    />
                    <label htmlFor="year">Year of manufacturing</label>
                    <input
                        type="number"
                        id="year"
                        name="year"
                        // value={motorcycle.year}
                    />
                    <label htmlFor="displacement">Displacement in CC</label>
                    <input
                        type="number"
                        id="displacement"
                        name="displacement"
                        // value={motorcycle.displacement}
                    />
                    <label htmlFor="imageURL">Image</label>
                    <input
                        type="text"
                        id="imageURL"
                        name="imageURL"
                        // value={motorcycle.imageURL}
                    />

                    <button>Submit</button>
                </form>
            </div>
        </section>
    );

}


export default MotorcycleEdit;