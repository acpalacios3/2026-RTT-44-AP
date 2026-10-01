**1. How does TypeScript enforce type safety in this object-oriented program?**

TypeScript enforces type safety by using types for variables, properties, parameters, and return values. It can detect incorrect types before the program runs. In this way, it is a form of testing while we are coding.

**2. How did inheritance reduce code duplication for PhysicalProduct and DigitalProduct?**

Inheritance allowed PhysicalProduct and DigitalProduct to reuse properties and methods from the parent Product class. This avoided repeating common code, such as the product name, price, SKU, and shared methods.

**3. What are the benefits of using encapsulation and access modifiers (public, private, protected) in this context?**

Encapsulation helps protect data and control how it can be accessed or modified. public members can be accessed from anywhere, private members can only be accessed within the same class, and protected members can be accessed within the class and its child classes. This makes the code more organized and protected.

In this lab, the use of access modifiers was not specifically required. We only used the default public access because when a class member does not have an access modifier, it is public by default.

**4. If you had to add a new type of product, such as SubscriptionProduct, how would polymorphism make this extension straightforward?**

Polymorphism would allow SubscriptionProduct to extend the Product class and provide its own logic. The program could continue working with the objects using the common Product type. This makes it easier to add new product types without having to significantly modify the existing code.