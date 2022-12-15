const InvoiceData = ({ InvoiceId, InvoiceDate, InvoiceItems, CompanyId }) => {
    return(
    <div>
        <div>Invoicing Data:</div>
        <div>{InvoiceId} {InvoiceDate} Company:{CompanyId}</div>
        {InvoiceItems?.map(row => <div>{row}</div>)}
    </div>
    )
};
export default InvoiceData;
