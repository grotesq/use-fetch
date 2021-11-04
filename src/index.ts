import axios from 'axios';
import useSWR, { mutate } from 'swr';

export function fetcher(url: string) {
  return axios.get(url).then(response => response.data);
}

export function prefetch(url: string) {
  return mutate(url, fetcher(url));
}

export default function useFetch(url: string) {
  return useSWR(url, fetcher);
}
