**********Critical Thinking Questions*************************

**Why is it important to handle errors for each individual API call rather than just at the end of the promise chain?**
Because each API can fail for a different reason. For example, fetchSalesReport() might have a network issue, while fetchProductReviews() could have invalid data. If we handle errors properly, we can pinpoint where the error is, whereas with a generic error at the end, it will take us longer to find the cause.

**How does using custom error classes improve debugging and error identification?**
Classes like NetworkError and DataError allow you to quickly identify what type of error occurred. With instanceof, we can handle each error differently and make the application reflect the actual cause of the problem.


