import React from 'react';
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from 'react-toastify';

const AdminPassword = () => {
    return (
        <div>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box rounded-md relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h1 className='font-displayFair font-bold'>Admin Login <small className='text-[10px] text-red-700'>This option is kept only for testing purposes.</small> </h1>
                    <CopyToClipboard
                        text="tanzimulislamsabbir@gmail.com"
                        onCopy={() => toast.success("Email Copied")}>
                        <p title='copy' className='p-1 my-2 cursor-pointer bg-blue-200 rounded-sm'>Email: tanzimulislamsabbir@gmail.com</p>
                    </CopyToClipboard>

                    <CopyToClipboard
                        text="Tanjim25&"
                        onCopy={() => toast.success("Password Copied")}>
                        <p title='copy' className='p-1 cursor-pointer bg-blue-200 rounded-sm'>Password: Tanjim25&</p>
                    </CopyToClipboard>
                </div>
            </div>
        </div>
    );
};

export default AdminPassword;