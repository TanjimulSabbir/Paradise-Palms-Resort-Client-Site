Paradise Palms Booking Hotel
Paradise Palms Booking Hotel is a web application that allows users to book rooms in a hotel. It is built using the MERN (MongoDB, Express.js, React.js, Node.js) stack.

Features
User authentication and authorization with JWT tokens
Room search and booking functionality
Admin dashboard to manage rooms, bookings and users
Payment gateway integration with Stripe (But now this is unavailable for some reasons)
Responsive UI design
Technologies Used
Front-end:
React.js: A front-end library for building user interfaces.
Tailwind CSS
React Hook Form
React Router Dom
React Firebase Hooks
React Toastify
React Icon
React Query
React Date Picker
React Loader Spinner
Axios

Authentication:
Firebase
React Firebase Hooks

Back-end:
MongoDB: A NoSQL database used to store the hotel's data such as rooms, bookings and users.
Express.js: A web application framework for Node.js used for building the RESTful API endpoints.
Node.js: A JavaScript runtime environment used to build the server-side application logic.
Stripe: A payment gateway used to handle payments for room bookings.

Git and GitHub: Version control system and code hosting platform used to collaborate with team members.

Hosting and Deploy:
Client Side- Firebase Hosting
Server Side- Vercel Hosting

Prerequisites
Node.js (v14 or higher)
MongoDB database
Installation
Clone the repository from GitHub:
bash

git clone https://github.com/TanjimulSabbir/paradise-palms-booking-hotel.git
Install the server dependencies:
bash

cd paradise-palms-booking-hotel/server
npm install
Create a .env file in the server folder and add the following variables:
makefile

PORT=5000
MONGODB_URI=mongodb://localhost:27017/paradise-palms-booking-hotel
JWT_SECRET=JWT_SECRET_KEY
STRIPE_SECRET_KEY=
Install the client dependencies:
bash

cd ../client
npm install
Start the server and client:
bash

cd ../server
npm run start-dev
The app should now be running on http://localhost:3000.

License
This project is licensed under the Paradise Palms License.