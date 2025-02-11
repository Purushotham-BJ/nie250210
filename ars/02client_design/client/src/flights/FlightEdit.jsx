import PageHeader from "../header/PageHeader";

function FlightEdit() {
    return (
        <>
            <PageHeader PageNumber={1} />
            <h3>Edit Flight Ticket Price</h3>
            <div className="container">
                <div className="mb-3">
                    <label htmlFor="flight_number" className="form-label">Flight Number : </label>
                    <div><input type="text" className="form-control" id="number" placeholder="???" /></div>
                </div>
            </div>
            <div className="container">
                <div className="mb-3">
                    <label htmlFor="airway_name" className="form-label">Airway Name : </label>
                    <div><input type="text" className="form-control" id="airway_name" placeholder="???" /></div>
                </div>
            </div>
            <div className="container">
                <div className="mb-3">
                    <label htmlFor="source" className="form-label">Source : </label>
                    <div><input type="text" className="form-control" id="source" placeholder="???" /></div>
                </div>
            </div>
            <div className="container">
                <div className="mb-3">
                    <label htmlFor="destination" className="form-label">Destination : </label>
                    <div><input type="text" className="form-control" id="destination" placeholder="???" /></div>
                </div>
            </div>
            <div className="container">
                <div className="mb-3">
                    <label htmlFor="capacity" className="form-label">Capacity : </label>
                    <div><input type="text" className="form-control" id="capacity" placeholder="???" /></div>
                </div>
            </div>
            <div className="container">
                <div className="mb-3">
                    <label htmlFor="price" className="form-label">Ticket price : </label>
                    <input type="text" className="form-control" id="price" placeholder="Please enter updated price" />
                </div>
                <button className="btn btn-success">Update</button>
                <a href="/flights/list" className="btn btn-warning">Go Back</a>
            </div>
        </>
    )
}
export default FlightEdit;