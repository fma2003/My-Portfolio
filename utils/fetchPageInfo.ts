import { sanityClient } from '../sanity'; // Adjust the import based on your project structure
import { PageInfo } from '../typings'; // Adjust import as necessary

export const fetchPageInfo = async (): Promise<PageInfo | null> => {
  const query = `*[_type == "pageInfo"][0]`; // Adjust this query based on your Sanity schema
  const result = await sanityClient.fetch(query);

  if (!result) {
    console.log("No PageInfo found");
    return null;
  }

  return result as PageInfo; // Assuming the result matches the PageInfo type
};
