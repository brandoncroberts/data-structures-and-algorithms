function gaussSum(n: number) {
    return (n * (n + 1)) / 2;
}

export const missingNumber = (nums: number[]): number => {
    const fullSum = gaussSum(nums.length);
    let actualSum = 0;
    for (let i = 0; i < nums.length; i++) {
        actualSum += nums[i];
    }
    return fullSum - actualSum;
};
