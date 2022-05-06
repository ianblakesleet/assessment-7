doublerAppend---- .push()
tinyArray = 113.2μs
smallArray = 168.6 μs
mediumArray = 171.1 μs
largeArray = 747.8 μs
extraLarge = 3.6911 ms

doubleInsert ------ .unshift()
tinyArray = 46.5 μs
smallArray = 58.7 μs
mediumArray = 213.9 μs
largeArray = 9.8005 ms
extraLarge = 979.2341 ms

Based on the results shown, it seems that doubleAppend function is going to be the best in terms of scalability, the time it takes for it to execute seems to be O(n) -(linear) whereas the doubleInsert function isnt linear, it is a quadratic time, a O(n^2). Since it has to do a loop over the number, and then reasign the index to the array everytime it unshifts a number in.
