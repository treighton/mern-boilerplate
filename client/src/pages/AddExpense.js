import {gql, useMutation} from '@apollo/client'

const ADD_EXPENSE = gql`
mutation AddExpense($amount: Float, $name: String, $receipt: String, $expenseType: ExpenseTypes, $date: String) {
    addExpense(amount: $amount, name: $name, receipt: $receipt, expenseType: $expenseType, date: $date) {
      _id
      name
      date
      amount
    }
  }
`

const Add = () => {
    const [ 
        addExpense, 
        {loading, data} 
    ] = useMutation(ADD_EXPENSE)

    const handleSubmit = (e) => {
        // Prevent the browser from reloading the page
        e.preventDefault();
    
        // Read the form data
        const form = e.target;
        const formData = new FormData(form);
    
        // Or you can work with it as a plain object:
        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson);

        const formattedData = {...formJson, amount: parseFloat(formJson.amount)}

        console.log(formattedData)

        addExpense({
            variables: formattedData
        })
      }
    
    return(
    <>
      <h1>Add</h1>
      <form className="container" onSubmit={handleSubmit}>
        <div className="form-group">
            <label className="mr-3 text-light" for="amount">amount</label>
            <input name="amount" id="amount" type="number"/>
        </div>
        <div className="form-group">
            <label className="mr-3 text-light" for="name">name</label>
            <input name="name" id="name" />
        </div>
        <div className="form-group">
            <label className="mr-3 text-light" for="expenseType">expenseType</label>
            <select name="expenseType" id="expenseType">
                <option value="FOOD">FOOD</option>
                <option value="TRAVEL">TRAVEL</option>
                <option value="ENTERTAINMENT">
                    ENTERTAINMENT
                </option>
                <option value="UTILITIES">UTILITIES</option>
                <option value="HOUSING">HOUSING    </option>
            </select>
        </div>
        <div className="form-group">
            <label className="mr-3 text-light" for="date" >date</label>
            <input name="date" id="date" type="date" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  )}

export default Add