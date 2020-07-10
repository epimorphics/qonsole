/**
 * This class is mostly based on Flux's Dispatcher by Facebook
 * https://github.com/facebook/flux/blob/master/src/Dispatcher.js
 */
export default class Dispatcher<TPayload> {
    _callbacks: {
        [key: string]: (payload: TPayload) => void;
    };
    _isDispatching: boolean;
    _isHandled: {
        [key: string]: boolean;
    };
    _isPending: {
        [key: string]: boolean;
    };
    _lastID: number;
    _pendingPayload: TPayload;
    constructor();
    /**
     * Registers a callback to be invoked with every dispatched payload. Returns
     * a token that can be used with `waitFor()`.
     */
    register(callback: (payload: TPayload) => void): string;
    /**
     * Removes a callback based on its token.
     */
    unregister(id: string): void;
    /**
     * Waits for the callbacks specified to be invoked before continuing execution
     * of the current callback. This method should only be used by a callback in
     * response to a dispatched payload.
     */
    waitFor(ids: Array<string>): void;
    /**
     * Dispatches a payload to all registered callbacks.
     */
    dispatch(payload: TPayload): void;
    /**
     * Is this Dispatcher currently dispatching.
     */
    isDispatching(): boolean;
    /**
     * Call the callback stored with the given id. Also do some internal
     * bookkeeping.
     *
     * @internal
     */
    private _invokeCallback;
    /**
     * Set up bookkeeping needed when dispatching.
     *
     * @internal
     */
    private _startDispatching;
    /**
     * Clear bookkeeping used for dispatching.
     *
     * @internal
     */
    private _stopDispatching;
}
