# Welcome Reader to the (possible) Sushi website

## The roadmap

Website Development Roadmap
Phase 1: Core Pages & Layout
Home Page (Landing Page)

Design & Structure: Include a hero section with the restaurant name, logo, and a featured image (maybe sushi or the interior of the restaurant).
Content: Welcome message, key services (dine-in, takeout, delivery), and a call-to-action like "View Menu" or "Make a Reservation."
Components:
Navigation Bar (links to Menu, About, Contact)
Hero Section with a big banner image
Featured Sushi Items or Chef’s Special
Footer (already created)
Menu Page

Design: Create a visually appealing list of sushi items.
Content: Sushi categories (Maki Rolls, Nigiri, Sashimi, etc.), prices, and descriptions.
Components:
Dynamic list of menu items (can be fetched from an API or a static file for now).
A filter for categories of sushi (e.g., Vegetarian, Chef’s Special).
About Us Page

Content: Story of the restaurant, chef introduction, core values, and customer testimonials.
Components:
Team or Chef bio section.
Timeline or story section about the restaurant.
Contact Page

Content: Contact form, email, phone number, address, and opening hours.
Components:
Contact Form (name, email, message).
Map integration (Google Maps, Leaflet) showing the restaurant location.
Phase 2: Additional Features
Reservation System

Objective: Allow customers to book tables online.
Components:
Date picker and time slots.
Number of people.
Form validation and submission.
Consideration: Optionally integrate an external reservation system API like OpenTable.
Online Ordering System

Objective: Implement a basic ordering system for takeout or delivery.
Components:
Shopping cart functionality.
Checkout form with delivery information (name, address, etc.).
Integration with payment gateway (e.g., Stripe or PayPal).
Phase 3: Advanced Features & Optimization
User Authentication (Optional)

Objective: Add user login for a personalized experience (e.g., saving favorite sushi dishes or viewing order history).
Components:
Login and registration forms.
Password recovery option.
Authentication logic (JWT or OAuth).
Customer Reviews / Testimonials

Objective: Showcase customer feedback or reviews.
Components:
A dynamic list of customer reviews.
Integration with a review platform (e.g., Google or Yelp).
Social Media Integration

Objective: Promote social media presence.
Components:
Display latest Instagram posts or Twitter feed.
Share buttons for social platforms.
Phase 4: Deployment, SEO, and Performance
Responsive Design

Ensure that the website is fully responsive on mobile, tablet, and desktop.
Use CSS media queries or libraries like Tailwind or Bootstrap.
SEO Optimization

Ensure each page has a proper <title>, meta descriptions, and alt tags for images.
Generate a sitemap and robots.txt file.
Optimize for page speed (compress images, minify JavaScript/CSS, etc.).
Analytics and Tracking

Objective: Add Google Analytics or other tracking tools to monitor website traffic and user behavior.
Integration: Use Google Tag Manager or directly embed tracking scripts.
Performance Optimization

Lazy loading for images and components.
Use a Content Delivery Network (CDN) for faster asset delivery.
Implement caching strategies with getStaticProps or getServerSideProps in Next.js for optimizing data fetching.
Testing

Perform cross-browser testing (Chrome, Firefox, Safari, etc.).
Run unit tests and integration tests for core functionalities like reservations, ordering, etc.
Use tools like Jest or React Testing Library for component testing.
Deployment

Deploy the site to a platform like Vercel (which is optimized for Next.js) or Netlify.
Set up a custom domain and configure SSL certificates for secure browsing.
Configure environment variables for production (e.g., API keys, database credentials).

_In this md file, you will be brought up to speed what is; what will come to be; and the why behind it all for this sushi website._

## The Structure

### Pages

**_Home_**<br>
The Homepage is where the user ( <sub>customer</sub>) will have a fun little button to click to start going through all of the orders. On this very same homepage, there will be a sign in button in the bottom-right corner of the screen. This will redirect the user to the backoffice sign in page, it will look spiffy! Have a look at CSS description.

**_Catalog_**<br>
This page will provide the user (<sub>customer</sub>) with an overview of all the available dishes and maybe even promotions that is going on. <br> This page will have a navigation bar to select from the most popular items to the chef's special; in between you will have all the categories the different items fall under so that the customer have an easier way to search. It may even have a possible search button should the customer already know what he/she may want to order. Behind every item, there will be increment and decrement button. In the description of every item there will be an icon(s) to indicate the type of allergen and if it is a vegeterian item or not; what type of protein for said item may also be indicated via a icon (think about a pork, fish, chicken and cow). <br> This is the page where the user will have a basket in the bottom-right corner to check on their orders. This may possibly be a modal dialog instead of making a whole page, this is for performance purposes, and it looks nicer tihi. <br>
The catalog will consist of cards and each card will be an item. Once the customer hovers over the card it will flip over and show you all the details that make up this food item. Maybe it will be a clck instead of a hover effect, TBA.
<br>
<br>
**_Order Overview_**<br>
In this modal dialog, you will have your set of orders with its corresponding amount for each item and its prices; showing the grand total at the end. It may even be possible to increase or decrease particular items so that the customer does not need to close the dialog window and have to search for the item individually.

## Design

The idea is to have a minimilistic design but with some icons giving everything its flare, so to speak. For example,there will be some cute sushi icons in the mix. Definitely to indicate whether or not something is vegeterian or not. Maybe have cat sushi chef as the background of the modal dialog window(?) and or next to the order button.

**_Color_**<br>
The background color will be either a black or white. If white, the font color will black with maybe one or two phrases being red. This may be to indicate the spicy level of the item in question or what type of diet it beongs to. <br>
<br>
**_Font_**<br>
The font will be something that is not too casual but not too professional either. Maybe comics-sans? I'm kidding, got you there eventhough i am tempted to. But no, it'll probably be something that looks like Times New Roman.<br>
<br>
**_Icons_**<br>
Each icon will be different, that means the color will be different; the meaning itself and the possibly the size will be the same throughout the whole website.<br>
<br>
**_Cards_**<br>
Every food item, will be a card. Each card will have an effect when the customer either hovers or clicks on said cards. This still needs to be decided TBA.
The cards will have an image of the food item with a white background. Once the card is flipped, either the background will be white or blurry-glassy look to it; TBA.<br>
<br>
**_Navbar_**<br>
Above all the cards, thus the catalog itself, there will be a navbar to be found. This navbar will have a blurry-glass look to it centered in the middle.
The navbar will contain the following:

<li> Specials
<li> Sushi
<li> Maki 
<li> Vegeterian
<li> Grilled
<li> Desserts
<li> The search icon 🔎
