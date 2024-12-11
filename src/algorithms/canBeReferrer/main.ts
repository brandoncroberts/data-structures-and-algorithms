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

// ... existing code ...

/**
 * Iterative solution using BFS to determine if urlTwo could have been a referrer for urlOne
 * @param urlOne The destination URL
 * @param urlTwo The potential referrer URL
 * @param urlData Array of URL and referrer data
 * @returns boolean indicating if urlTwo could have been a referrer for urlOne
 */
export const canBeReferrerIterative = (
  urlOne: string,
  urlTwo: string,
  urlData: UrlReferrer[],
): boolean => {
  // If URLs are the same, return false as a page cannot refer to itself
  if (urlOne === urlTwo) return false;

  // Keep track of visited URLs to prevent cycles
  const visited = new Set<string>();

  // Queue for BFS
  const queue: string[] = [urlOne];

  while (queue.length > 0) {
    const currentUrl = queue.shift()!;

    // Skip if we've already visited this URL
    if (visited.has(currentUrl)) continue;
    visited.add(currentUrl);

    // Find the current URL's data
    const urlData_ = urlData.find((data) => data.url === currentUrl);
    if (!urlData_) continue;

    // Check referrers
    for (const referrer of urlData_.referrer) {
      // Skip null referrers
      if (referrer === null) continue;

      // If we found urlTwo as a referrer, return true
      if (referrer === urlTwo) return true;

      // Add unvisited referrers to the queue
      if (!visited.has(referrer)) {
        queue.push(referrer);
      }
    }
  }

  return false;
};
