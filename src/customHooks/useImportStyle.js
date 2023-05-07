import { useEffect } from 'react';
const useImportStyle = (resourceUrl) => {
    useEffect(() => {
        const style = document.createElement('link');
        style.href = resourceUrl;
        style.rel = 'stylesheet';
        style.type = 'text/css';
        document.head.appendChild(style);
        return () => {
            document.head.removeChild(style);
        };
    }, [resourceUrl]);
};
export default useImportStyle;
