import { useState } from "react";
function FullName() {
    const [person, setPerson] = useState({ first_name: "virat", last_name: "kohli" })
    /*const onChangeFirstName=(event)=>{
        const newPerson = {...person};
        newPerson.first_name = event.target.value;
        setPerson(newPerson);}
    */
    const onChangebox=(event)=>{
        const newPerson = {...person};
        newPerson[event.target.id]= event.target.value;
        setPerson(newPerson);
    }
    return (
        <>
            <div class="container">
                <div class="form-group">
                    <label for="first_name">First Name:</label>
                    <input type="text" id="first_name" class="form-control" value={person.first_name} onChange={onChangebox}/>
                </div>
                <div class="form-group">
                    <label for="last_name">Last Name:</label>
                    <input type="text" id="last_name" class="form-control" value={person.last_name} onChange={onChangebox}/>
                </div>
                <div>Full Name: {person.first_name} {person.last_name}</div>
            </div>
        </>
    )
}
export default FullName;
