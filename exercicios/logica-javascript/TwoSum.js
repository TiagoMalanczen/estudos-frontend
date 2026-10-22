function twoSum(nums, target) {
    const mapa = new Map();

    for (let i = 0; i < nums.length; i++) {
        const complemento = target - nums[i];

        if (mapa.has(complemento)) {
            return [mapa.get(complemento), i];
        }

        mapa.set(nums[i], i);
    }
}

console.log(twoSum([2, 7, 11, 15], 9));