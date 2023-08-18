#How this System Works
I started by creating a simple calculator interface, every button has  function assigned that wen clicked it will call a function to display the latest value the user has clicked. However the C, CE, and = performs different action.

The = when pressed it will call a function that will get the string value inside the textbox ato be sent to the +server.ts and wait for the response. 

The +server.ts when the string value is succesfully received will perform a split that will split the textbox value using spaces. For example the textbox has a value of 1 + 2 - 3. It will be split into [1, +, 2, -, 3] and save it to the variable substrings

Next step is using for loop to go through each index of the substrings to filter which is parsable and which is not. If the value is parsable it will be pushed to the variable parsedIntArray, if not it will be pushed to operator. 

Next Thing I did was get the parsedInt value of the index of operator that is = * or ÷ .
For example 
The operator array has the value of [+, -, *, /]
The parsedoperator will get a value of [ 2, 3]

The next for loop is about the mdas rule. I first calculate the * and /. 
For this to work I will use the parsedoperator value as an index of ParsedIntarray for the computation.
This is how my logic works. For example we have a substrings of 1 + 2 * 3 - 4 / 5;
parsedInt will be = 1 , 2 , 3 , 4 ,5
operator will be = +, *, -, /
then the parsedOperator will be = 1, 3

Using the for loop that will check everyindex value of operator if it is equal to * or /
if its *
I will now use the value inside the parsedOperator as the index of ParsedInt as first number which is the 2 or parsedInt[1] and num2 as parsedInt[1+1] which will be 3.
It will now perform a 2*3 and save the value in the replace variable. 
Then after the value is saved I will now use splice to remove the operator in the current index using i.
And now remove the value of parsedInt from the starting index which is the current i and remove 2 value starting from the starting index and replace the value of the replace variable.
and lastly use i-- to compensate to the lost array index of the operator as we splice it so that it will not skip an index.
THis is same if the operator is /.

Now that the mdas rule is performed the parsedInt value should now be. 1 + 6 - 0.8

and use for loop again for the operator + and -

Then return the result. And display it in the textbox.


