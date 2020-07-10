/**
 * Centralized logging lib
 *
 * This class needs some improvements but so far it has been used to have a coherent way to log
 */
declare class Logger {
    private format;
    error(message: string, throwException?: boolean): void;
    warn(message: string): void;
    info(message: string): void;
}
declare const _default: Logger;
export default _default;
