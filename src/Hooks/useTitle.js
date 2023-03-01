import { useEffect } from "react";

const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title}-Paradise Palms`;
    }, [title]);
};

export default useTitle;