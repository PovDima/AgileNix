// Action for load data
export function initCurrency(response) {
    return {
        type: 'INIT_CURR',
        payload: response
    };
}