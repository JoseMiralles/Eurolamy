/**
 * @returns A promise that resolbes to true if the device has an accelerometer, or false otherwise.
 */
export const runOnceOnOrientaitonChange = (
    callback: () => void
): void => {
        const handler = (event: DeviceOrientationEvent) => {
            callback();
            window.removeEventListener("deviceorientation", handler);
        }
        window.addEventListener(
            "deviceorientation",
            handler
        );
};
