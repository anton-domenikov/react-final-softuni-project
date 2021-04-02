import './Create.css'

const Create = ({history}) => {

    const onSubmitHandler = (e) => {
        e.preventDefault();

        const motorcycle = {
            model: e.target.model.value,
            year: e.target.year.value,
            displacement: e.target.displacement.value,
            imageURL: e.target.imageURL.value
        }

        fetch('http://localhost:4040/motorcycle/create',
            {
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify(motorcycle)
            })
            .then((res) => console.log(res))
            .then(() => history.push('/'))
    }


    return (
        <section id="create">
            <div className="create-form">
                <h1>Add your Suzuki</h1>

                <form onSubmit={onSubmitHandler} >
                    <label htmlFor="model">Model</label>
                    <input
                        type="text"
                        id="model"
                        name="model"
                    />
                    <label htmlFor="year">Year of manufacturing</label>
                    <input
                        type="number"
                        id="year"
                        name="year"
                    />
                    <label htmlFor="displacement">Displacement in CC</label>
                    <input
                        type="number"
                        id="displacement"
                        name="displacement"
                    />
                    <label htmlFor="imageURL">Image</label>
                    <input
                        type="text"
                        id="imageURL"
                        name="imageURL"
                    />

                    <button>Submit</button>
                </form>
            </div>
        </section>
    );

}


export default Create;