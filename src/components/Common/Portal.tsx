import {ReactNode, useEffect, useState} from 'react';
import ReactDOM from 'react-dom';

type portalProps = {
    children: ReactNode
}

export const Portal = ({children}: portalProps) => {
    const [container] = useState<HTMLDivElement>(() => document.createElement('div'));

    useEffect(() => {
        document.body.appendChild(container);
        return () => {
            document.body.removeChild(container);
        }
    }, [])

    return ReactDOM.createPortal(children, container);
};