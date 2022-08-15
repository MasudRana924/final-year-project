import React from "react";
import { useLocation, Link } from "react-router-dom";
import './Breadcrumb.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faAngleRight} from '@fortawesome/free-solid-svg-icons'

const BreadCrumb = () => {
    const location = useLocation();
    const house = <FontAwesomeIcon icon={faHouse}  />
    const arrow = <FontAwesomeIcon icon={faAngleRight} className="breadcrum-icon"/>
    
    const breadCrumbView = () => {
        const { pathname } = location;
        const pathnames = pathname.split("/").filter((item) => item);
        const capatilize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
        return (
            <div class="bread">

                {pathnames.length > 0 ? (

                    <Link to="/" >{house} Home {arrow} </Link>

                ) : (

                    <Link to="/" >{house} Home </Link>
                )}
                {pathnames.map((name, index) => {
                    const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
                    const isLast = index === pathnames.length - 1;
                    return isLast ? (
                        <Link to={`${routeTo}`} >{capatilize(name)}</Link>
                    ) : (
                        <Link to={`${routeTo}`}>{capatilize(name)}</Link>
                    );
                })}



            </div>




        );
    };

    return <>{breadCrumbView()}</>;
};

export default BreadCrumb;