import { Link } from 'react-router-dom';


export function NavItem(props:any) {
    return (
        <div className="item px-8 py-2 cursor-pointer">
            <Link to={props.to} className=" flex flex-row items-center ">
                {props.icon}
                <label className="cursor-pointer ml-4">{props.title}</label>
            </Link>
        </div>
    )
}