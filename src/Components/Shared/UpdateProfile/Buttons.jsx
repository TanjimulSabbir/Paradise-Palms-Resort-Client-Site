import React from 'react'

function Buttons() {
    return (
        <div>
            <div class="flex items-center gap-3 sm:gap-x-5">
                <button class="bg-white dark:bg-gray-900 dark:border-gray-700 dark:hover:bg-gray-800 rounded-lg hover:bg-gray-100 duration-300 transition-colors border px-8 py-2.5">
                   Email Verification
                </button>

                <button class="bg-[#1877F2] rounded-lg hover:bg-[#1877F2]/80 duration-300 transition-colors border border-transparent px-8 py-2.5">
                  Update email
                </button>

                <button class="bg-black rounded-lg hover:bg-black/80 duration-300 transition-colors border border-transparent px-8 py-2.5">
                Delete Account
                </button>
            </div>
        </div>
    )
}

export default Buttons