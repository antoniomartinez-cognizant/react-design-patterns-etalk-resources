const PersonalData = ({ FirstName, LastName, dateOfBirth, ID }) => {
    return (
    <div>
        <div>Personal data:</div>
        <div>{FirstName} {LastName} {ID}</div>
        <div>{dateOfBirth}</div>
    </div>
    )
};
export default PersonalData;