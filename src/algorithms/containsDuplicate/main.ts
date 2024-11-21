export const containsDuplicate = (nums: number[]): boolean => {
    const map: Record<number, number> = {};
    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]] !== undefined) return true;
        map[nums[i]] = nums[i];
    }
    return false;
};

containsDuplicate([1, 2, 3, 1]);
