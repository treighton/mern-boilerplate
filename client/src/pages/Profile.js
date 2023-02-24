import {gql, useQuery} from '@apollo/client'

const EXPENSE_QUERY = gql`
    query Expenses {
        expenses {
            _id
            name
            amount
            date
            expenseType
            receipt
        }
  }
`

const Profile = () => {
    const {
        loading, data
    } = useQuery(EXPENSE_QUERY)

    return loading ? ('loading') : ( 
        <>
            <h1>Profile</h1>
            <ul>
                {
                    data?.expenses && data?.expenses.map(
                        ({
                            _id,
                            name,
                            amount,
                            date,
                            expenseType,
                            receipt,
                        }) => (
                        <li key={_id}>
                            {name}
                            <ul>
                                <li>amount:{amount}</li>
                                <li>date:{date}</li>
                                <li>expenseType:{expenseType}</li>
                                <li>receipt:{receipt}</li>
                            </ul>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}

export default Profile