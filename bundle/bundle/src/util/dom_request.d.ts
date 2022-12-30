/**
 * Cross-browser abstraction for sending XMLHttpRequest
 * @deprecated this has to go away, we can use a modern browser method to do the same.
 * @param {String} url URL to send XMLHttpRequest to
 * @param {Object} [options] Options object
 * @param {String} [options.method="GET"]
 * @param {Record<string, string>} [options.parameters] parameters to append to url in GET or in body
 * @param {String} [options.body] body to send with POST or PUT request
 * @param {AbortSignal} [options.signal] handle aborting, see https://developer.mozilla.org/en-US/docs/Web/API/AbortController/signal
 * @param {Function} options.onComplete Callback to invoke when request is completed
 * @return {XMLHttpRequest} request
 */
export declare function request(url: any, options?: {}): any;
//# sourceMappingURL=dom_request.d.ts.map