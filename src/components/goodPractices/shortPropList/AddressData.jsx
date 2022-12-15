const AddressData = ({ Street, StreetDetails, zipCode, Country }) =>{
    return(
    <div>
        <div>Address:</div>
        <div>{Street} {StreetDetails} {zipCode}</div>
        <div>{Country}</div>
    </div>
    )
}
export default AddressData;