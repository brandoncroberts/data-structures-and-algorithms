// Amazon Interview Question

interface UrlReferrer {
  url: string;
  referrer: (string | null)[];
}

/**
 * Determines if urlTwo could have been a referrer for urlOne by checking the referrer chain
 * @param urlOne The destination URL
 * @param urlTwo The potential referrer URL
 * @param urlData Array of URL and referrer data
 * @returns boolean indicating if urlTwo could have been a referrer for urlOne
 */
export const canBeReferrer = (
  urlOne: string,
  urlTwo: string,
  urlData: UrlReferrer[],
): boolean => {
  // If URLs are the same, return false as a page cannot refer to itself
  if (urlOne === urlTwo) return false;

  // Find the URL entry for urlOne
  const urlOneData = urlData.find((data) => data.url === urlOne);
  if (!urlOneData) return false;

  // Direct referrer check
  if (urlOneData.referrer.includes(urlTwo)) return true;

  // Recursive check through referrer chain
  return urlOneData.referrer.some((referrer) => {
    // Skip null referrers
    if (referrer === null) return false;
    // Recursive call to check each referrer
    return canBeReferrer(referrer, urlTwo, urlData);
  });
};
