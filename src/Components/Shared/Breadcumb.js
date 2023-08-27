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
                        <>
                            <div className="text-sm breadcrumbs">
                                <ul>
                                    <li><Link to={PathLink}>{ElementName}</Link></li>
                                    <span class="text-black rtl:-scale-x-100">
                                        {/* <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                                        </svg> */}
                                    </span>
                                </ul>
                            </div>
                        </>

                    )
                })
            }
        </div>
    )
}

export default Breadcumb