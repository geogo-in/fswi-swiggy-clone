# GEOGO Full Stack Web Internship Swiggy Clone APIs
Hey, let's make this repo all much rich as possible by contributing more endpoints. Follow the contribution guidelines, make open source contributions and make your github profile to standout. Check the Postman collection attached in this repo, this would help you to test API endpoints.

## API Index

### City
- [x] API for listing all Cities
- [x] Create new City
- [x] View City details
- [x] List all City Restaurants
- [ ] Update City
- [ ] Delete a City

#### Scope of Development
- Upload category images

### Restaurant
Cities have menu restraunts
- [x] API for listing all Restaurant
- [x] Create new Restaurant
- [x] View Restaurant details
- [ ] Update Restaurant
- [ ] Delete a Restaurant

#### Scope of Development
- Add reviews for Restaurant
- Add ratings for Restaurant

### MenuItem
Every 
- [x] API for listing all MenuItems for a restaurant
- [x] Create new MenuItem
- [x] View MenuItem details
- [ ] Update MenuItem
- [ ] Delete a MenuItem

### User
Users can signup to this application using email and password. 
__User__ model should have the following attributes: *email (type: string), password (type: string), mobile*.
*Tip:* Can use Passport and JWT for user authentication module
- [ ] API for user signup
- [ ] API for user signin
- [ ] API for user signout
- [ ] API to get user details

### Order
Users can place orders for multiple products. __Order__ model should have the following attributes: *user (ref), orderItems (array of items), serial (String), status (pending, confirmed, shipped, delivered, cancelled), orderItemTotal, discount, deliveryCharge, grandTotal (Number), paymentMode (cod, card, online etc.), paidAmount (Number, Should be filled once payment made)*.
- [ ] API for listing all orders of an user
- [ ] Create new order
- [ ] View order details
- [ ] Cancel an Order
- [ ] Update an order


## How to Contribute
- Make sure you understand the requirement well.
- Fork this repository to your github account.
- Do the changes and create a Pull Request.
- Remember the PR should have clean code, proper comments, proper commits with messages.
- Many others can also make PR, but the most complete one will be merged.
- You can also create PR for this Readme, if you have any relevant module in mind for this repo, to make it even more awesome!!
