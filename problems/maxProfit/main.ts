export const maxProfitBruteForce = (prices: number[]): number => {
    let maxProfit = 0;
    let i;
    let j;
    for (i = 0; i < prices.length; i++) {
        for (j = i + 1; j < prices.length; j++) {
            if (prices[j] > prices[i] && (prices[j] - prices[i]) > maxProfit) {
                maxProfit = prices[j] - prices[i];
            }
        }
    }
    return maxProfit;
};

export const maxProfit = (prices: number[]): number => {
    let maxProfit = 0;
    let l = 0;
    let r = 1;

    while (r < prices.length) {
        const difference = prices[r] - prices[l];
        if (difference > 0) {
            maxProfit = Math.max(difference, maxProfit);
        } else {
            l = r;
        }
        r++;
    }

    return maxProfit;
};
