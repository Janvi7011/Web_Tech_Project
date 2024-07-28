### E-Commerce Project - Furniture Products

# GITHUB Link : https://github.com/Janvi7011/Web_Tech_Project/
**Student Name**: Janvi Desai  
**Student Number**: 8927011  
**Date**: 07-18-2024

### Technology Stack

**Frontend**: Angular  
**Backend**: Node.js with Express  
**Database**: MongoDB (Atlas)

### Project Setup

1. **Project Initialization**: Repository created on GitHub and cloned to local machine.
2. **Frontend Setup**: Initialized Angular project.Download all files from the FronEnd Folder.And see below instructions.
3. **Backend Setup**: Initialized Node.js project with Express and connected to MongoDB (Atlas).Download all files from the FurnitureStoreBackEnd and see below instruction.

### Database Schema Design

**Products Schema (MongoDB)**

- `id` : Number
- `productname`: String
- `companyname`: String
- `category`: String
- `photoPath`: String
- `price_per_unit`: Number
- `status`: String
- `created_at` : String

**Users Schema (MongoDB)**

- `id` : Number
- `firstname` : String
- `lastname` : String
- `email` : String
- `phoneno` : Number
- `address` : String
- `username`: String
- `password`: String
- `isAdmin` : Boolean

**Order Schema (MongoDB)**

- `id` : Number
- `product_id` : Number
- `user_id` : Number
- `delivery_add` : String
- `amount` : Number
- `paymentMode` : String
- `created_at` : DateTime
### Frontend Setup

1. Basic structure set up for Angular components, including directories for components and services.
2. Install All Required modules using 'npm install'.
3. State management planned to handle user sessions and cart data using cookies.
4. Now to run Furniture Frontend type ng serve command.

### Backend Setup 

1. Basic project set up for NodeJS, including modules.
2. Install All Requiered modules using 'npm install'.
3. Now to run backend type node app.js.

### Notes

- The project is set up using Git and GitHub for version control.
- Further development will include implementing user interfaces for product listings, shopping cart, and checkout.
