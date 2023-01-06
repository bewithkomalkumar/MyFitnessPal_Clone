import React from 'react'
import page from "./Pagination.module.css"
import { NavLink, useParams } from 'react-router-dom';

const PaginationS = ({ appsArray }) => {
    const { id } = useParams();
    // console.log(id);
    let totalNum = Math.ceil(appsArray.length/15);
    // console.log(totalNum);
    let pages = [];
    for (let x = 1; x <= totalNum; x++) {
        pages.push(
            <div key={x}>
                <NavLink id={page.link} to={`/apps/page/${x}`}>
                    <span id={page.num}
                        style={((Number(id)) === x) ? ({ backgroundColor: 'black', color:"white" }) : ({})}>{x}</span>
                </NavLink>
            </div>
        );
    }

    return (
        <>
            <div className={page.mainDiv}>
                { pages}
            </div>
        </>
    )
}

export default PaginationS
