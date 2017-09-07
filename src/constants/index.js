export const visibleCCY = ['USD', 'EUR'];

/**
 * API providers with URL and mapping logic
 *
 * @type {object}
 */
export const providers = {
    providerArchiveDay: 'fixerAPI',
    providerCurrentDay: 'privatBank',

    fixerAPI: {
        url: 'http://api.fixer.io',
        urlCurrentDate: (url) => `${url}/latest`,
        urlArchiveDate: (url, date) => `${url}/${date}`,
        fieldMapping: (result) => {
            const {base, rates} = result;
            const keys = Object.keys(rates);
            return keys.map(key => {
                return {
                    ccy: key,
                    base_ccy: base,
                    buy: rates[key],
                    sale: rates[key]
                };
            });
        }
    },
    privatBank: {
        url: 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=4',
        urlCurrentDate: (url) => `${url}`,
        urlArchiveDate: (url) => `${url}`,
        fieldMapping: (result) => {
            return result;
        }
    }
};