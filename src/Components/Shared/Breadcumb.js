import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Breadcumb = () => {
    const location = useLocation();
    const PathName = location.pathname.split('/');
    PathName.pop()

    let PathLink = "";
    return (
        <div className='uppercase flex justify-center flex-row space-x-4 py-6'>
            {
                PathName.map(path => {
                    const ElementName = path === "" ? "Home" : path
                    PathLink = `${PathLink !== '/' ? PathLink : ""}/` + path
                    return (
                        <button className="btn bg-black border-emerald-400 text-emerald-500">
                            <Link to={PathLink}>{ElementName}</Link>
                        </button>
                    )
                })
            }
        </div>
    )
}

export default Breadcumb