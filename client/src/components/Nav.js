import { Link } from "react-router-dom"

export const NavBar = ({Brand, links}) => {
    return (
        <div className="bg-primary p-5">
            <h1 className="text-light mb-0">{Brand}</h1>
            {
                links && links.map(({text, to}) => (
                    <Link to={to}>{text}</Link>
                ))
            }
        </div>
    )
}