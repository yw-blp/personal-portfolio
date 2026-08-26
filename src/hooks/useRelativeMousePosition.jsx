import { useEffect } from 'react';
import { subscribeToMousePosition } from './mousePositionStore';

function useRelativeMousePosition(ref) {
    useEffect(() => {
        return subscribeToMousePosition(({ clientX, clientY }) => {
            const element = ref.current;
            if (!element) return;

            const rect = element.getBoundingClientRect();
            element.style.setProperty('--mouse-x', `${clientX - rect.left}px`);
            element.style.setProperty('--mouse-y', `${clientY - rect.top}px`);
        });
    }, [ref]);
}

export default useRelativeMousePosition;
