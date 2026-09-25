***REFLECTION:***

**How did you dynamically create and append new elements to the DOM?**
I used JavaScript DOM methods, such as createElement(), to create the product elements, buttons, and quantity text. Then, I used appendChild() to add these elements to the <li> and append the <li> to the shopping cart.

**What steps did you take to ensure accurate updates to the total price?**
I created an updateTotalPrice() function that adds or subtracts the product price from the total. When the quantity changes. When an item is removed, the price is multiplied by its quantity before being subtracted from the total.
How did you handle invalid input for the product name or price?
I checked if the product name was empty or if the price was not a valid number using isNaN(). If the input was invalid, I displayed an alert and returned to prevent the product from being added.


**What challenges did you face when implementing the remove functionality?**
One challenge was making sure the correct product was removed and that its price was also removed from the total. I used closest('li') to find the product element and dataset to get its price and quantity before removing it.