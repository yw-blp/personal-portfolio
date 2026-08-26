const subscribers = new Set();

let clientX = 0;
let clientY = 0;
let frameRequested = false;

function handleMouseMove(e) {
    clientX = e.clientX;
    clientY = e.clientY;

    if (!frameRequested) {
        frameRequested = true;
        requestAnimationFrame(notifySubscribers);
    }
}

function notifySubscribers() {
    frameRequested = false;

    const mousePosition = { clientX, clientY };

    subscribers.forEach((subscriber) => subscriber(mousePosition));
}

export function subscribeToMousePosition(subscriber) {
    if (subscribers.size === 0) {
        window.addEventListener('mousemove', handleMouseMove);
    }

    subscribers.add(subscriber);

    return () => {
        subscribers.delete(subscriber);
        if (subscribers.size === 0) {
            window.removeEventListener('mousemove', handleMouseMove);
        }
    };
}
