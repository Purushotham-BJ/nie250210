import PageHeader from "../header/PageHeader";

function FlightCreate() {
    return (
        <>
            <PageHeader PageNumber={2} />
            <h3>Add Flight</h3>
            <div className="container">
                <div className="mb-3">
                    <label htmlFor="flight_number" className="form-label">Flight Number : </label>
                    <input type="text" className="form-control" id="number" placeholder="Please enter flight number" />
                </div>
            </div>
            <div className="container">
                <div className="mb-3">
                    <label htmlFor="airway_name" className="form-label">Airway Name : </label>
                    <input type="text" className="form-control" id="airway_name" placeholder="Please enter airway name" />
                </div>
            </div>
            <div className="container">
                <div className="mb-3">
                    <label htmlFor="source" className="form-label">Source : </label>
                    <input type="text" className="form-control" id="source" placeholder="Please enter source place" />
                </div>
            </div>
            <div className="container">
                <div className="mb-3">
                    <label htmlFor="destination" className="form-label">Destination : </label>
                    <input type="text" className="form-control" id="source" placeholder="Please enter destination place" />
                </div>
            </div>
            <div className="container">
                <div className="mb-3">
                    <label htmlFor="capacity" className="form-label">Capacity : </label>
                    <input type="text" className="form-control" id="capacity" placeholder="Please enter capacity(number of seats)" />
                </div>
            </div>
            <div className="container">
                <div className="mb-3">
                    <label htmlFor="price" className="form-label">Ticket price : </label>
                    <input type="text" className="form-control" id="price" placeholder="Please enter price" />
                </div>
                <button className="btn btn-success">Add</button>
                <a href="/flights/list" className="btn btn-warning">Go Back</a>
            </div>
        </>
    )
}
export default FlightCreate;