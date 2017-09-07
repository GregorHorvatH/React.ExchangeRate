import { providers } from '../constants';

/**
 * Load exchange rates from different providers
 * @param setRate
 * @param date
 */
export default function(setRate, date) {
    const currentDate = new Date().toISOString().substr(0, 10);
    const inputDate = date.substr(0, 10);
    const provider = currentDate === inputDate ?
        providers[providers.providerCurrentDay] : providers[providers.providerArchiveDay];
    const url = currentDate === inputDate ?
        provider.urlCurrentDate(provider.url, inputDate) : provider.urlArchiveDate(provider.url, inputDate);

    fetch(url)
        .then(response => {
            if (response && response.ok) {
                return response.json();
            }
            throw new Error('Error loading exchange rate');
        })
        .then((result) => provider.fieldMapping(result))
        .then(value => setRate(value))
        .catch(error => console.log(error));
}