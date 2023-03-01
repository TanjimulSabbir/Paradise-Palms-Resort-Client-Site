import React from 'react'

function AdminPower() {

    const Admin = <>Admin can <span className='text-green-600'>see</span> any user, can {<span className='text-red-600'>delete</span>},
        can {<span className='text-green-600'>make</span>} anyone an admin or moderator. Admin can also see all bookings details. Admin can change any information. <span className='text-green-600'>Admin has a lot of modification access.</span>
    </>
    const Moderator = <>Moderators are just able to view users. They are not able to {<span className='text-red-600'>delete</span>} or {<span className='text-green-600'>make</span>} anyone like as an Admin. Moderators are not able to view bookings details. But they <span className='text-green-700'>can be able to see booking details if Admin allows.</span></>

    return (
        <div> <input type="checkbox" id="my-modal-admin" className="modal-toggle" />
            <div className='modal'>
                <div className='modal-box relative space-y-3'>
                    <p className='font-openSans'><span className='font-bold p-1 text-green-600'>Admin:
                    </span>{Admin}</p>
                    <p className='font-openSans'><span className='font-bold p-1 text-green-600'>Moderator:</span>{Moderator}</p>
                    <label htmlFor="my-modal-admin" className="btn btn-sm btn-circle absolute 
            right-2 top-2">✕</label>
                </div>
            </div>
        </div>
    )
}

export default AdminPower