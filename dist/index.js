import axios from 'axios';
import useSWR, { mutate } from 'swr';
export function fetcher(url) {
    return axios.get(url).then(function (response) { return response.data; });
}
export function prefetch(url) {
    return mutate(url, fetcher(url));
}
export default function useFetch(url) {
    return useSWR(url, fetcher, { refreshInterval: 1000 });
}
//# sourceMappingURL=index.js.map