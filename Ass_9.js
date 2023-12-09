        function even(nums) {
            even_nums = [];
            for (let num of nums) {
                if (num % 2 == 0) {
                    even_nums.push(num);
                }
            }
            return even_nums;
        }

        const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const evenArray = even(originalArray);
        console.log("Original array:", originalArray);
        console.log("Even array:", evenArray);