import portfolioImg from "../assets/portfolio.png";
import transportImg from "../assets/transport.png";
import vrentImg from "../assets/vrent.png";
import dskImg from "../assets/dsk.png";
import realEstateImg from "../assets/real-estate.png";
import joberDeskImg from "../assets/jober-desk.png";
import mensaImg from "../assets/mensa.png";
import customShopImg from "../assets/custom-design.png";
import hatBazarImg from "../assets/hat-bazar.png";
import superShopImg from "../assets/super-shop.png";
import ohmImg from "../assets/ohm.png";

export const PROJECT_LISTS = [
  {
    id: "p1",
    category: "Professional",
    year: 2019,
    title: "vRENT",
    image: vrentImg,
    description:
      "vRent an online vacation rental booking website designed particularly for holiday rentals all over the world. vRent is exclusively designed to satisfy the needs of the landlords who want to seriously make money by listing vacation rentals from all around the globe. vRent allows you to create your own vacation rental platform to help guests to find space for a cost.",
    demo: "https://vrent.techvill.org/",
    libraries:
      "Laravel, MySql for Database administration, Javascript, Ajax, JQuery, Stripe API for Payment issue, and Some Others vendor",
  },
  {
    id: "p2",
    category: "Professional",
    year: 2019,
    title: "Direct Sidekick",
    image: dskImg,
    description:
      "Direct Sidekick an online direct sales accounting application to track income and expenses from a specific event as well as to manage inventories for multiple users. It has the ability to invoice from the application with the income being recorded when the invoice is paid",
    demo: "https://directsidekick.com/",
    libraries:
      "Laravel, MySql for Database administration, Javascript, Ajax, JQuery, Stripe API for Payment issue, and Some Others vendor",
  },
  {
    id: "p3",
    category: "Academic",
    year: 2021,
    title: "Mensa-App",
    image: mensaImg,
    description:
      "The Studierendenwerk Düsseldorf offers a variety of modern catering options in the canteens and cafeterias or bistros. The service depends on the needs of the guests. Mensa App is developed to help the cafeteria to make better-informed decisions for the food they provide. The web application of this system is also used to maintain restaurant data, manage a reservation, perform food ordering, payment, and reporting.",
    demo: "https://mensa-app-80da4.web.app/",
    source_code: "https://github.com/asifsamy/food-mensa",
    video_url: "https://youtu.be/RoOhntoVu9E",
    libraries:
      "Typescript, React, React-Helmet, React-Router, React-Icons, Context API for Cart and Authentication functionalities, Firebase for database and Hosting",
  },
  {
    id: "p4",
    category: "Personal",
    year: 2021,
    title: "Real Estate",
    image: realEstateImg,
    description:
      "This small webb app is useful for advertising apartment either for renting or for selling purpose. One can create a profile in order to make a listing of any property in this platform. Visitors can see the information of the properties by searching with number of filtering options. They can also contact with the owner of the properties.",
    source_code: "https://github.com/asifsamy/real-estate",
    video_url: "https://youtu.be/6DwNpL1dykw",
    libraries:
      "FrontEnd Framework : React JS, Backend Framework : Django REST, Database : PostgreSQL, react-router-dom, redux, redux-thunk, react-redux, redux-devtools-extension, node-sass@4.14.1, uuid, axios, formik, yup, react-loader-spinner, djangorestframework, django-cors-headers, djangorestframework-simplejwt, Pillow, psycopg2, etc",
  },
  {
    id: "p5",
    category: "Academic",
    year: 2020,
    title: "Jober Desk",
    image: joberDeskImg,
    description:
      "Jober Desk is a web application which is dedicated to small jobs where User can post a job or apply for one with very simple steps and can rate and also post comments about the job. Here Microservice arcitechture was used to develop this application. micproject folder holding the frontend part (Angular) and django-mic folder holding the backend part (Django REST).",
    source_code: "https://github.com/asifsamy/jobber-desk",
    libraries:
      "FrontEnd Framework : Angular, Backend Framework : Django REST, Database : PostgreSQL",
  },
  {
    id: "p6",
    category: "Academic",
    year: 2021,
    title: "Transport Germany",
    image: transportImg,
    description:
      "Transport Germany a simple web app that uses the public transport API of DB (https://v5.db.transport.rest/api.html) to search through stops. When showing results, it shows which transport options are available in the resulting stop(s). Example transport options are: bus/tram/ferry/suburban/express/regional. If the user selects a stop, it routes the user to the detail page of that stop where the user can see the departures from the stop. Users are able to mark some stops favorite so that they can quickly access them instead of searching every time. This information are in the client-side only.",
    demo: "https://asifsamy.github.io/transport-germany/",
    source_code: "https://github.com/asifsamy/transportation-de",
    video_url: "https://youtu.be/TpIPrIMUB6g",
    libraries:
      "React, public transport API of DB (https://v5.db.transport.rest/api.html), Javascript, Bootstrap, and Some Others vendor",
  },
  {
    id: "p7",
    category: "Personal",
    year: 2022,
    title: "Portfolio",
    image: portfolioImg,
    description:
      "This is my personal portfolio application which is being accessed currently. This application is fully responsive and developed as single page application. It does not have any backend part. data has been wriiten manually in a separated JS file (as arrays of objects)",
    demo: "CURRENTLY BROWSING",
    source_code: "https://github.com/asifsamy/portfolio-v2",
    libraries:
      "React, Typescript, React-Icons, React-Player, EmailJS for sending email, React-Toastify for Toast Notifications, React-Scroll for smooth scrolling",
  },
  {
    id: "p8",
    category: "Personal",
    year: 2018,
    title: "Hat Bazaar",
    image: hatBazarImg,
    description:
      "Hat-Bazar an Online Grocery Store which will provide buying and selling of daily Groceries. The main target of this project is to create a platform to where a customer can buy their daily necessary goods by requesting an order.On the other hand the Admin of this site approve the order and deliver the goods. Moreover, the system has been developed in such a way which makes it reliable, secure and user friendly.",
    source_code: "https://github.com/asifsamy/Hat-Bazaar",
    video_url: "https://youtu.be/DlmyGDtspOs",
    libraries:
      "Laravel Framwork for backend services, MySql for Database administration, javascript for frontend design, Bootstrap Template, and Some Others vendors such as for add to cart",
  },
  {
    id: "p9",
    category: "Academic",
    year: 2017,
    title: "Custom Shop",
    image: customShopImg,
    description:
      "Custom Shop an E-commerce Engine with Product Design Feature which will provide buying and selling of product. The main target of this project is to create a platform to design a product efficiently for the users. Moreover, the system has been developed in such a way which makes it reliable, secure and user friendly. This system keeps a list of Stocks of pre-designed products so that customer can purchase it.",
    source_code: "https://github.com/asifsamy/Ecommerce-Product-Design-OOP-PHP",
    video_url: "https://youtu.be/zI5vbsej4T4",
    libraries:
      "Object Orieneted PHP for backend services, MySql for Database administration. Fabric.js for design template, Stripe API for Payment issue, and Some Others vendor",
  },
  {
    id: "p10",
    category: "Academic",
    year: 2016,
    title: "Super Shop",
    image: superShopImg,
    description:
      "Super Shop Management System which stocks and sells a wide variety of merchandises including groceries, clothing and general supplies or a large store that sells massive quantity of goods in one product line such as electronics or shoes. Moreover, the system has been developed in such a way which makes it reliable, secure and user friendly.",
    source_code: "https://github.com/asifsamy/Super_Shop_Management_System",
    libraries:
      "Raw PHP for backend services, MySql for Database administration, Bootstrap template, Some Others vendor like fpdf",
  },
  {
    id: "p11",
    category: "Academic",
    year: 2016,
    title: "Hotel Management",
    image: ohmImg,
    description:
      "Online Hotel a Hotel Management System which provides Online Hotel booking or reservation Facility. The main target of this project is to create a platform to where a user can reserve a hotel and pay for it. Moreover, the system has been developed in such a way which makes it reliable, secure and user friendly.",
    source_code:
      "https://github.com/asifsamy/Online_Hotel_Management_System_PHP",
    libraries:
      "Raw PHP for backend services, MySql for Database administration, Bootstrap Template for frontend design, Some Others vendor like fpdf",
  },
];
