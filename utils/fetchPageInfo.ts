import { PageInfo } from "../typings";

export const fetchPageInfo = async() => {
    try {
        // Use relative URL instead of absolute
        const res = await fetch(`/api/getPageInfo`);

        if (!res.ok) {
            throw new Error(`Failed to fetch pageInfo: ${res.status} ${res.statusText}`);
        }

        const data = await res.json();
        const pageInfo: PageInfo = data.pageInfo;

        return pageInfo;
    } catch (error) {
        console.error('Error fetching pageInfo:', error);
        throw error;
    }
}