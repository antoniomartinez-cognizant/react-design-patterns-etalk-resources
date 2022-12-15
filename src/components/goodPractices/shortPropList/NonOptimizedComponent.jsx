const InvoiceComponent = ({
  FirstName,
  LastName,
  dateOfBirth,
  ID,
  Street,
  StreetDetails,
  zipCode,
  Country,
  InvoiceId,
  InvoiceDate,
  InvoiceItems,
  CompanyId,
}) => {
  return (
    <div>
      <div>
        <div>Personal data:</div>
        <div>{FirstName} {LastName} {ID}</div>
        <div>{dateOfBirth}</div>
      </div>
      <div>
        <div>Address:</div>
        <div>{Street} {StreetDetails} {zipCode}</div>
        <div>{Country}</div>
      </div>
      <div>
        <div>Invoicing Data:</div>
        <div>{InvoiceId} {InvoiceDate} Company:{CompanyId}</div>
        {InvoiceItems?.map(row => <div>{row}</div>)}
      </div>
    </div>
  );
};

export default InvoiceComponent;