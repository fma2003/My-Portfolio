import { PageInfo } from "../typings";

export const fetchPageInfo = async() => {
    // Get the base URL from environment variables, fallback to localhost for development
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 
                   'http://localhost:3000';

    const res = await fetch(`${baseUrl}/api/getPageInfo`);

    const data = await res.json();
    const pageInfo: PageInfo = data.pageInfo;

    return pageInfo;
}