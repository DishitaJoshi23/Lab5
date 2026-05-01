# Lab 5 - Starter
Make sure you make a PR to your own repo's main and not the class' repo!! Otherwise you will lose points!!

___

# Question 1: Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

We would not use a unit test to test the test the "message" because since it has so many different components acting together, but unit tests are only good for debugging on a smaller scale without many moving parts, which the message feature does not fit. You would have to write a unit test to test each component separately, which isn't efficient.

# Question 2: Would you use a unit test to test the "max message length" feature?

Yes, because the "max message length" is a single isolated function which is exactly what a unit test is useful for. We can test it using messages of varying lengths and checking the outputs. 