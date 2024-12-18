# API Requirements
The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application. 

## API Endpoints
#### Products
- Index: GET "/products"
- Show: POST "/products/:id/details"
- Create [token required]: POST "products/create"
- [OPTIONAL] Top 5 most popular products 
- [OPTIONAL] Products by category (args: product category)

#### Users
- Index [token required]: GET "users/"
- Show [token required]: GET "users/:userId"
- Create N[token required]: POST "users/create"

#### Orders
- Current Order by user (args: user id)[token required]: GET "/orders-by-user/:userId"
- [OPTIONAL] Completed Orders by user (args: user id)[token required]

## Data Shapes
#### Product
-  id: primary serial numeric
- name: varchar
- price: numeric
- [OPTIONAL] category

#### User
- id: primary serial numeric
- firstName: varchar
- lastName: varchar
- password: varchar

#### Orders
- id: primary serial numeric
- user_id: numeric
- status of order (active or complete)

### Order to product
- id: primary serial numeric
- id order: numeric
- id product: numeric
- quantity: numeric

