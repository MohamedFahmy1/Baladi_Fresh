import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layout/Layout";

import dynamic from "next/dynamic";
import ClientLogoSlider from "../src/components/ClientLogoSlider";

const vegetableAndFruit = [
  {
    categories: "vegetables",
    imageSrc:
      "assets/baladi-imgs/3. Product Page/Product Pictures/Vegetable and Fruit/pexels-79380313-9682469.jpg",
    imageAlt: "A vibrant display of fresh vegetables and fruits",
    category: "Vegetables and Fruits",
    title: "Fresh Produce",
    linkHref: "/portfolio-details",
    delayClass: "delay-0-2s",
  },
  {
    categories: "vegetables",
    imageSrc:
      "assets/baladi-imgs/3. Product Page/Product Pictures/Vegetable and Fruit/pexels-aboodi-17975573.jpg",
    imageAlt: "An assortment of colorful vegetables",
    category: "Vegetables and Fruits",
    title: "Colorful Vegetables",
    linkHref: "/portfolio-details",
    delayClass: "delay-1-2s",
  },
  {
    categories: "vegetables",
    imageSrc:
      "assets/baladi-imgs/3. Product Page/Product Pictures/Vegetable and Fruit/pexels-alexey-komissarov-85164430-16812145.jpg",
    imageAlt: "A selection of fresh fruits on display",
    category: "Vegetables and Fruits",
    title: "Fresh Fruits",
    linkHref: "/portfolio-details",
    delayClass: "delay-2-2s",
  },
  {
    categories: "vegetables",
    imageSrc:
      "assets/baladi-imgs/3. Product Page/Product Pictures/Vegetable and Fruit/pexels-calwin-veigas-1270572734-24031498.jpg",
    imageAlt: "Various fruits and vegetables arranged in a market",
    category: "Vegetables and Fruits",
    title: "Market Display",
    linkHref: "/portfolio-details",
    delayClass: "delay-3-2s",
  },
  {
    categories: "vegetables",
    imageSrc:
      "assets/baladi-imgs/3. Product Page/Product Pictures/Vegetable and Fruit/pexels-chaquenha1974-13252175.jpg",
    imageAlt: "A closeup of vibrant vegetables and herbs",
    category: "Vegetables and Fruits",
    title: "Vegetables and Herbs",
    linkHref: "/portfolio-details",
    delayClass: "delay-4-2s",
  },
  {
    categories: "vegetables",
    imageSrc:
      "assets/baladi-imgs/3. Product Page/Product Pictures/Vegetable and Fruit/pexels-danilson66-8639570.jpg",
    imageAlt: "A basket filled with fresh vegetables",
    category: "Vegetables and Fruits",
    title: "Vegetable Basket",
    linkHref: "/portfolio-details",
    delayClass: "delay-5-2s",
  },
  {
    categories: "vegetables",
    imageSrc:
      "assets/baladi-imgs/3. Product Page/Product Pictures/Vegetable and Fruit/pexels-enginakyurt-10112460.jpg",
    imageAlt: "Fresh vegetables on a wooden surface",
    category: "Vegetables and Fruits",
    title: "Vegetables on Wooden Table",
    linkHref: "/portfolio-details",
    delayClass: "delay-6-2s",
  },
  {
    categories: "vegetables",
    imageSrc:
      "assets/baladi-imgs/3. Product Page/Product Pictures/Vegetable and Fruit/pexels-enginakyurt-10899530.jpg",
    imageAlt: "Fruits and vegetables arranged neatly",
    category: "Vegetables and Fruits",
    title: "Neat Fruit and Veggie Display",
    linkHref: "/portfolio-details",
    delayClass: "delay-7-2s",
  },
  {
    categories: "vegetables",
    imageSrc:
      "assets/baladi-imgs/3. Product Page/Product Pictures/Vegetable and Fruit/pexels-enginakyurt-17923891.jpg",
    imageAlt: "A colorful selection of fresh produce",
    category: "Vegetables and Fruits",
    title: "Colorful Produce",
    linkHref: "/portfolio-details",
    delayClass: "delay-8-2s",
  },
  {
    categories: "vegetables",
    imageSrc:
      "assets/baladi-imgs/3. Product Page/Product Pictures/Vegetable and Fruit/pexels-filipp-romanovski-297235844-17275905.jpg",
    imageAlt: "Organic fruits and vegetables",
    category: "Vegetables and Fruits",
    title: "Organic Produce",
    linkHref: "/portfolio-details",
    delayClass: "delay-9-2s",
  },
  {
    categories: "vegetables",
    imageSrc:
      "assets/baladi-imgs/3. Product Page/Product Pictures/Vegetable and Fruit/pexels-javierbalseiro-10037512.jpg",
    imageAlt: "Assorted vegetables arranged in baskets",
    category: "Vegetables and Fruits",
    title: "Basket Vegetables",
    linkHref: "/portfolio-details",
    delayClass: "delay-10-2s",
  },
  {
    categories: "vegetables",
    imageSrc:
      "assets/baladi-imgs/3. Product Page/Product Pictures/Vegetable and Fruit/pexels-lo-422811-2329440.jpg",
    imageAlt: "Fruits and vegetables on display at a market",
    category: "Vegetables and Fruits",
    title: "Market Fruits and Vegetables",
    linkHref: "/portfolio-details",
    delayClass: "delay-11-2s",
  },
  {
    categories: "vegetables",
    imageSrc:
      "assets/baladi-imgs/3. Product Page/Product Pictures/Vegetable and Fruit/pexels-loren-biser-1425370-15236818.jpg",
    imageAlt: "Fresh vegetables with vibrant colors",
    category: "Vegetables and Fruits",
    title: "Vibrant Vegetables",
    linkHref: "/portfolio-details",
    delayClass: "delay-12-2s",
  },
  {
    categories: "vegetables",
    imageSrc:
      "assets/baladi-imgs/3. Product Page/Product Pictures/Vegetable and Fruit/pexels-perfect-lens-18688797.jpg",
    imageAlt: "Fruits neatly arranged for display",
    category: "Vegetables and Fruits",
    title: "Neat Fruit Display",
    linkHref: "/portfolio-details",
    delayClass: "delay-13-2s",
  },
  {
    categories: "vegetables",
    imageSrc:
      "assets/baladi-imgs/3. Product Page/Product Pictures/Vegetable and Fruit/pexels-perfect-lens-19543593.jpg",
    imageAlt: "A mix of fruits and vegetables",
    category: "Vegetables and Fruits",
    title: "Mixed Produce",
    linkHref: "/portfolio-details",
    delayClass: "delay-14-2s",
  },
  {
    categories: "vegetables",
    imageSrc:
      "assets/baladi-imgs/3. Product Page/Product Pictures/Vegetable and Fruit/pexels-perfect-lens-20147576.jpg",
    imageAlt: "Vegetables on a textured surface",
    category: "Vegetables and Fruits",
    title: "Textured Surface Vegetables",
    linkHref: "/portfolio-details",
    delayClass: "delay-15-2s",
  },
  {
    categories: "vegetables",
    imageSrc:
      "assets/baladi-imgs/3. Product Page/Product Pictures/Vegetable and Fruit/pexels-pixabay-533280.jpg",
    imageAlt: "Brightly colored fresh vegetables",
    category: "Vegetables and Fruits",
    title: "Bright Vegetables",
    linkHref: "/portfolio-details",
    delayClass: "delay-16-2s",
  },
  {
    categories: "vegetables",
    imageSrc:
      "assets/baladi-imgs/3. Product Page/Product Pictures/Vegetable and Fruit/pexels-polina-kovaleva-7511847.jpg",
    imageAlt: "Organic vegetables with a rustic touch",
    category: "Vegetables and Fruits",
    title: "Rustic Organic Vegetables",
    linkHref: "/portfolio-details",
    delayClass: "delay-17-2s",
  },
  {
    categories: "vegetables",
    imageSrc:
      "assets/baladi-imgs/3. Product Page/Product Pictures/Vegetable and Fruit/pexels-unaizat97-11725923.jpg",
    imageAlt: "Fresh vegetables in a farmer's market",
    category: "Vegetables and Fruits",
    title: "Farmer's Market Vegetables",
    linkHref: "/portfolio-details",
    delayClass: "delay-18-2s",
  },
  {
    categories: "vegetables",
    imageSrc:
      "assets/baladi-imgs/3. Product Page/Product Pictures/Vegetable and Fruit/pexels-victorino-2286776.jpg",
    imageAlt: "Vibrant vegetables displayed on a wooden surface",
    category: "Vegetables and Fruits",
    title: "Wooden Surface Vegetables",
    linkHref: "/portfolio-details",
    delayClass: "delay-19-2s",
  },
  {
    categories: "vegetables",
    imageSrc:
      "assets/baladi-imgs/3. Product Page/Product Pictures/Vegetable and Fruit/vaibhav-salvi-kB2ve9SU1IU-unsplash.jpg",
    imageAlt: "Fresh vegetables in a basket",
    category: "Vegetables and Fruits",
    title: "Basket of Vegetables",
    linkHref: "/portfolio-details",
    delayClass: "delay-20-2s",
  },
];

const bakeryProducts = [
  {
    categories: "bread",
    imageSrc:
      "assets/baladi-imgs/3. Product Page/Product Pictures/Bakery Products/assorted-pastries-top-view-2024-10-21-09-30-18-utc.jpg",
    imageAlt: "Assorted pastries top view",
    category: "Bakery Products",
    title: "Assorted Pastries",
    linkHref: "/portfolio-details",
    delayClass: "delay-0-2s",
  },
  {
    categories: "bread",
    imageSrc:
      "assets/baladi-imgs/3. Product Page/Product Pictures/Bakery Products/assortment-of-baked-bread-on-dark-background-2023-11-27-05-21-15-utc.jpg",
    imageAlt: "Assortment of baked bread on dark background",
    category: "Bakery Products",
    title: "Baked Bread",
    linkHref: "/portfolio-details",
    delayClass: "delay-1-2s",
  },
  {
    categories: "bread",
    imageSrc:
      "assets/baladi-imgs/3. Product Page/Product Pictures/Bakery Products/freshly-baked-croissants-2024-10-19-00-02-45-utc.jpg",
    imageAlt: "Freshly baked croissants",
    category: "Bakery Products",
    title: "Fresh Croissants",
    linkHref: "/portfolio-details",
    delayClass: "delay-2-4s",
  },
  {
    categories: "bread",
    imageSrc:
      "assets/baladi-imgs/3. Product Page/Product Pictures/Bakery Products/healthy-and-tasty-loaf-of-breads-baked-in-bakery-2023-11-27-04-50-58-utc.jpg",
    imageAlt: "Healthy loaf of bread",
    category: "Bakery Products",
    title: "Tasty Loaf",
    linkHref: "/portfolio-details",
    delayClass: "delay-3-6s",
  },
  {
    categories: "bread",
    imageSrc:
      "assets/baladi-imgs/3. Product Page/Product Pictures/Bakery Products/healthy-buns-and-challahs-with-seeds-and-ears-of-g-2023-11-27-05-11-06-utc.jpg",
    imageAlt: "Healthy buns and challahs with seeds",
    category: "Bakery Products",
    title: "Healthy Buns",
    linkHref: "/portfolio-details",
    delayClass: "delay-4-8s",
  },
  {
    categories: "bread",
    imageSrc:
      "assets/baladi-imgs/3. Product Page/Product Pictures/Bakery Products/homemade-pastry-for-holiday-2023-11-27-05-31-49-utc.jpg",
    imageAlt: "Homemade holiday pastry",
    category: "Bakery Products",
    title: "Holiday Pastry",
    linkHref: "/portfolio-details",
    delayClass: "delay-5-2s",
  },
  {
    categories: "bread",
    imageSrc:
      "assets/baladi-imgs/3. Product Page/Product Pictures/Bakery Products/overhead-shot-of-pastry-croissants-and-buns-2023-11-27-05-30-17-utc.jpg",
    imageAlt: "Overhead shot of pastry croissants and buns",
    category: "Bakery Products",
    title: "Pastry & Buns",
    linkHref: "/portfolio-details",
    delayClass: "delay-6-8s",
  },
  {
    categories: "bread",
    imageSrc:
      "assets/baladi-imgs/3. Product Page/Product Pictures/Bakery Products/puff-pastry-buns-2024-10-17-15-57-29-utc.jpg",
    imageAlt: "Puff pastry buns",
    category: "Bakery Products",
    title: "Puff Pastry",
    linkHref: "/portfolio-details",
    delayClass: "delay-7-2s",
  },
  {
    categories: "bread",
    imageSrc:
      "assets/baladi-imgs/3. Product Page/Product Pictures/Bakery Products/stacked-chocolate-chip-cookies-isolated-on-white-b-2023-11-27-05-33-12-utc.jpg",
    imageAlt: "Stacked chocolate chip cookies",
    category: "Bakery Products",
    title: "Chocolate Chip Cookies",
    linkHref: "/portfolio-details",
    delayClass: "delay-8-2s",
  },
  {
    categories: "bread",
    imageSrc:
      "assets/baladi-imgs/3. Product Page/Product Pictures/Bakery Products/sweet-pastries-desserts-dinner-catering-concept-2024-12-05-02-08-24-utc.jpg",
    imageAlt: "Sweet pastries for catering",
    category: "Bakery Products",
    title: "Sweet Pastries",
    linkHref: "/portfolio-details",
    delayClass: "delay-9-2s",
  },
  {
    categories: "bread",
    imageSrc:
      "assets/baladi-imgs/3. Product Page/Product Pictures/Bakery Products/sweet-swirl-buns-with-raisins-for-breakfast-2023-11-27-05-07-38-utc.jpg",
    imageAlt: "Sweet swirl buns with raisins",
    category: "Bakery Products",
    title: "Swirl Buns",
    linkHref: "/portfolio-details",
    delayClass: "delay-10-2s",
  },
  {
    categories: "bread",
    imageSrc:
      "assets/baladi-imgs/3. Product Page/Product Pictures/Bakery Products/sweets-2024-09-12-02-41-00-utc.jpg",
    imageAlt: "Various sweets",
    category: "Bakery Products",
    title: "Assorted Sweets",
    linkHref: "/portfolio-details",
    delayClass: "delay-11-2s",
  },
];

const dairyProduct = [
  {
    categories: "milk",
    imageSrc:
      "assets/baladi-imgs/3. Product Page/Product Pictures/Dairy Product/an-assortment-of-delicious-nutritious-cheeses-on-a-2023-11-27-05-11-06-utc.jpg",
    imageAlt: "An assortment of delicious and nutritious cheeses",
    category: "Dairy Products",
    title: "Nutritious Cheeses",
    linkHref: "/portfolio-details",
    delayClass: "delay-0-2s",
  },
  {
    categories: "milk",
    imageSrc:
      "assets/baladi-imgs/3. Product Page/Product Pictures/Dairy Product/assortment-dairy-products-2023-11-27-05-02-19-utc.jpg",
    imageAlt: "Assortment of dairy products",
    category: "Dairy Products",
    title: "Assorted Dairy Products",
    linkHref: "/portfolio-details",
    delayClass: "delay-1-2s",
  },
  {
    categories: "milk",
    imageSrc:
      "assets/baladi-imgs/3. Product Page/Product Pictures/Dairy Product/assortment-of-dairy-products-2023-11-27-04-58-08-utc.jpg",
    imageAlt: "Assortment of dairy products",
    category: "Dairy Products",
    title: "Dairy Product Assortment",
    linkHref: "/portfolio-details",
    delayClass: "delay-2-2s",
  },
  {
    categories: "milk",
    imageSrc:
      "assets/baladi-imgs/3. Product Page/Product Pictures/Dairy Product/assortment-of-fresh-dairy-products-bottle-milk-c-2024-07-11-00-39-36-utc.jpg",
    imageAlt: "Fresh dairy products including bottles of milk",
    category: "Dairy Products",
    title: "Fresh Dairy Selection",
    linkHref: "/portfolio-details",
    delayClass: "delay-3-2s",
  },
  {
    categories: "milk",
    imageSrc:
      "assets/baladi-imgs/3. Product Page/Product Pictures/Dairy Product/dairy-products-on-grey-table-against-blue-backgrou-2023-11-27-05-04-40-utc.jpg",
    imageAlt: "Dairy products on a grey table against a blue background",
    category: "Dairy Products",
    title: "Dairy Products Display",
    linkHref: "/portfolio-details",
    delayClass: "delay-4-2s",
  },
  {
    categories: "milk",
    imageSrc:
      "assets/baladi-imgs/3. Product Page/Product Pictures/Dairy Product/fermented-probiotic-dairy-drink-kefir-bottles-2024-10-20-04-00-25-utc.jpg",
    imageAlt: "Fermented probiotic dairy drink kefir in bottles",
    category: "Dairy Products",
    title: "Kefir Bottles",
    linkHref: "/portfolio-details",
    delayClass: "delay-5-2s",
  },
  {
    categories: "milk",
    imageSrc:
      "assets/baladi-imgs/3. Product Page/Product Pictures/Dairy Product/homemade-butter-recipe-mockup-2023-11-27-05-17-59-utc.jpg",
    imageAlt: "Homemade butter recipe mockup",
    category: "Dairy Products",
    title: "Homemade Butter",
    linkHref: "/portfolio-details",
    delayClass: "delay-6-2s",
  },
  {
    categories: "milk",
    imageSrc:
      "assets/baladi-imgs/3. Product Page/Product Pictures/Dairy Product/set-of-various-fresh-dairy-products-2024-12-05-19-00-26-utc.jpg",
    imageAlt: "Set of various fresh dairy products",
    category: "Dairy Products",
    title: "Fresh Dairy Products Set",
    linkHref: "/portfolio-details",
    delayClass: "delay-7-2s",
  },
];

const meatAndPoultry = [
  {
    categories: "meat",
    imageSrc:
      "assets/baladi-imgs/3. Product Page/Product Pictures/Meats and Poultry/chicken-carcass-cut-into-pieces-cutting-board.jpg",
    imageAlt: "Chicken carcass cut into pieces on a cutting board",
    category: "Meat and Poultry",
    title: "Chicken Carcass Pieces",
    linkHref: "/portfolio-details",
    delayClass: "delay-0-2s",
  },
  {
    categories: "meat",
    imageSrc:
      "assets/baladi-imgs/3. Product Page/Product Pictures/Meats and Poultry/fish-and-prawns-for-sale-2024-06-07-23-11-46-utc.jpg",
    imageAlt: "Fish and prawns for sale",
    category: "Meat and Poultry",
    title: "Fish and Prawns",
    linkHref: "/portfolio-details",
    delayClass: "delay-1-2s",
  },
  {
    categories: "meat",
    imageSrc:
      "assets/baladi-imgs/3. Product Page/Product Pictures/Meats and Poultry/fresh-fish-and-clams-2023-11-27-05-30-42-utc.jpg",
    imageAlt: "Fresh fish and clams",
    category: "Meat and Poultry",
    title: "Fresh Fish and Clams",
    linkHref: "/portfolio-details",
    delayClass: "delay-2-2s",
  },
  {
    categories: "meat",
    imageSrc:
      "assets/baladi-imgs/3. Product Page/Product Pictures/Meats and Poultry/fresh-fish-for-sale-at-a-market-2023-11-27-04-54-27-utc.jpg",
    imageAlt: "Fresh fish for sale at a market",
    category: "Meat and Poultry",
    title: "Fish Market",
    linkHref: "/portfolio-details",
    delayClass: "delay-3-2s",
  },
  {
    categories: "meat",
    imageSrc:
      "assets/baladi-imgs/3. Product Page/Product Pictures/Meats and Poultry/front-view-fresh-raw-red-meat-wooden-cutting-board-nude-color-towel-lemon-garlic-mixed-color-background.jpg",
    imageAlt: "Fresh raw red meat on a cutting board with garlic and lemon",
    category: "Meat and Poultry",
    title: "Raw Red Meat",
    linkHref: "/portfolio-details",
    delayClass: "delay-4-2s",
  },
  {
    categories: "meat",
    imageSrc:
      "assets/baladi-imgs/3. Product Page/Product Pictures/Meats and Poultry/pexels-domenico-scaglione-276311971-28881691.jpg",
    imageAlt: "Various cuts of fresh meat",
    category: "Meat and Poultry",
    title: "Fresh Meat Cuts",
    linkHref: "/portfolio-details",
    delayClass: "delay-5-2s",
  },
  {
    categories: "meat",
    imageSrc:
      "assets/baladi-imgs/3. Product Page/Product Pictures/Meats and Poultry/pexels-filirovska-7140306.jpg",
    imageAlt: "Raw poultry on a wooden surface",
    category: "Meat and Poultry",
    title: "Raw Poultry",
    linkHref: "/portfolio-details",
    delayClass: "delay-6-2s",
  },
  {
    categories: "meat",
    imageSrc:
      "assets/baladi-imgs/3. Product Page/Product Pictures/Meats and Poultry/pexels-nc-farm-bureau-mark-7163989.jpg",
    imageAlt: "Freshly cut raw meat for sale",
    category: "Meat and Poultry",
    title: "Market Fresh Meat",
    linkHref: "/portfolio-details",
    delayClass: "delay-7-2s",
  },
  {
    categories: "meat",
    imageSrc:
      "assets/baladi-imgs/3. Product Page/Product Pictures/Meats and Poultry/raw-chicken-meat-white-background.jpg",
    imageAlt: "Raw chicken meat on a white background",
    category: "Meat and Poultry",
    title: "Raw Chicken Meat",
    linkHref: "/portfolio-details",
    delayClass: "delay-8-2s",
  },
  {
    categories: "meat",
    imageSrc:
      "assets/baladi-imgs/3. Product Page/Product Pictures/Meats and Poultry/raw-chicken-tender-fry-cut-without-skin-arranged-wooden-board-garnished-with-coriander-leaves.jpg",
    imageAlt: "Raw chicken tenders garnished with coriander leaves",
    category: "Meat and Poultry",
    title: "Chicken Tenders",
    linkHref: "/portfolio-details",
    delayClass: "delay-9-2s",
  },
  {
    categories: "meat",
    imageSrc:
      "assets/baladi-imgs/3. Product Page/Product Pictures/Meats and Poultry/raw-chuck-eye-roll-steak-organic-beef-set-black-dark-stone-table-background.jpg",
    imageAlt: "Raw chuck eye roll steak on a dark background",
    category: "Meat and Poultry",
    title: "Chuck Eye Steak",
    linkHref: "/portfolio-details",
    delayClass: "delay-10-2s",
  },
  {
    categories: "meat",
    imageSrc:
      "assets/baladi-imgs/3. Product Page/Product Pictures/Meats and Poultry/red-snapper-and-red-mullet-for-sale-2023-11-27-04-58-33-utc.jpg",
    imageAlt: "Red snapper and red mullet for sale",
    category: "Meat and Poultry",
    title: "Red Snapper & Mullet",
    linkHref: "/portfolio-details",
    delayClass: "delay-11-2s",
  },
  {
    categories: "meat",
    imageSrc:
      "assets/baladi-imgs/3. Product Page/Product Pictures/Meats and Poultry/tasty-fish-and-seafood-2023-11-27-04-51-02-utc.jpg",
    imageAlt: "Tasty fish and seafood assortment",
    category: "Meat and Poultry",
    title: "Fish and Seafood",
    linkHref: "/portfolio-details",
    delayClass: "delay-12-2s",
  },
];

const spicesAndCondiments = [
  {
    categories: "spices",
    imageSrc:
      "assets/baladi-imgs/3. Product Page/Product Pictures/Spices and Condiments/closeup-shot-colorful-asian-spices-market-with-blurry.jpg",
    imageAlt: "Closeup shot of colorful Asian spices in a market",
    category: "Spices and Condiments",
    title: "Asian Spices Market",
    linkHref: "/portfolio-details",
    delayClass: "delay-0-2s",
  },
  {
    categories: "spices",
    imageSrc:
      "assets/baladi-imgs/3. Product Page/Product Pictures/Spices and Condiments/different-types-spices-market-city-mombasa-kenya.jpg",
    imageAlt: "Different types of spices in a market in Mombasa, Kenya",
    category: "Spices and Condiments",
    title: "Spices in Mombasa Market",
    linkHref: "/portfolio-details",
    delayClass: "delay-1-2s",
  },
  {
    categories: "spices",
    imageSrc:
      "assets/baladi-imgs/3. Product Page/Product Pictures/Spices and Condiments/indian-colourful-spices-group-photo-four-basic-indian-spices-like-raw-red-chilli-turmeric-coriander-cumin-powder-selective-focus.jpg",
    imageAlt:
      "Indian colorful spices including red chili, turmeric, coriander, and cumin",
    category: "Spices and Condiments",
    title: "Basic Indian Spices",
    linkHref: "/portfolio-details",
    delayClass: "delay-2-2s",
  },
  {
    categories: "spices",
    imageSrc:
      "assets/baladi-imgs/3. Product Page/Product Pictures/Spices and Condiments/indian-essential-spices-terracotta-pots-arranged-textured-background-selective-focus.jpg",
    imageAlt: "Indian essential spices in terracotta pots",
    category: "Spices and Condiments",
    title: "Terracotta Pot Spices",
    linkHref: "/portfolio-details",
    delayClass: "delay-3-2s",
  },
  {
    categories: "spices",
    imageSrc:
      "assets/baladi-imgs/3. Product Page/Product Pictures/Spices and Condiments/indian-spices-white-wooden-box-with-cells-selective-focus (1).jpg",
    imageAlt: "Indian spices in a white wooden box with cells",
    category: "Spices and Condiments",
    title: "Spices in Wooden Box",
    linkHref: "/portfolio-details",
    delayClass: "delay-4-2s",
  },
  {
    categories: "spices",
    imageSrc:
      "assets/baladi-imgs/3. Product Page/Product Pictures/Spices and Condiments/indian-spices-white-wooden-box-with-cells-selective-focus.jpg",
    imageAlt: "Indian spices in a wooden box, top view",
    category: "Spices and Condiments",
    title: "Indian Spices Box",
    linkHref: "/portfolio-details",
    delayClass: "delay-5-2s",
  },
  {
    categories: "spices",
    imageSrc:
      "assets/baladi-imgs/3. Product Page/Product Pictures/Spices and Condiments/organised-filled-spice-jars.jpg",
    imageAlt: "Organized jars filled with spices",
    category: "Spices and Condiments",
    title: "Organized Spice Jars",
    linkHref: "/portfolio-details",
    delayClass: "delay-6-2s",
  },
  {
    categories: "spices",
    imageSrc:
      "assets/baladi-imgs/3. Product Page/Product Pictures/Spices and Condiments/pexels-martabranco-23020460.jpg",
    imageAlt: "Various spices on a wooden surface",
    category: "Spices and Condiments",
    title: "Spices on Wooden Surface",
    linkHref: "/portfolio-details",
    delayClass: "delay-7-2s",
  },
  {
    categories: "spices",
    imageSrc:
      "assets/baladi-imgs/3. Product Page/Product Pictures/Spices and Condiments/pexels-shantanu-pal-938952-2802527.jpg",
    imageAlt: "A variety of colorful spices displayed neatly",
    category: "Spices and Condiments",
    title: "Colorful Spices",
    linkHref: "/portfolio-details",
    delayClass: "delay-8-2s",
  },
  {
    categories: "spices",
    imageSrc:
      "assets/baladi-imgs/3. Product Page/Product Pictures/Spices and Condiments/spices-seasonings-wooden-table.jpg",
    imageAlt: "Spices and seasonings on a wooden table",
    category: "Spices and Condiments",
    title: "Spices on Wooden Table",
    linkHref: "/portfolio-details",
    delayClass: "delay-9-2s",
  },
  {
    categories: "spices",
    imageSrc:
      "assets/baladi-imgs/3. Product Page/Product Pictures/Spices and Condiments/spices-spicy-seasonings-wooden-box-top-view-horizontal.jpg",
    imageAlt: "Spices and seasonings in a wooden box, top view",
    category: "Spices and Condiments",
    title: "Seasonings in Wooden Box",
    linkHref: "/portfolio-details",
    delayClass: "delay-10-2s",
  },
];

const portfolioItems = [
  ...vegetableAndFruit,
  ...bakeryProducts,
  ...dairyProduct,
  ...meatAndPoultry,
  ...spicesAndCondiments,
];

const tabsData = [
  { filterKey: "*", title: "Show All" },
  { filterKey: "vegetables", title: "Fruits & Vegetables" },
  { filterKey: "milk", title: "Dairy Products" },
  { filterKey: "meat", title: "Meat and Poultry" },
  { filterKey: "spices", title: "Spices & Condiments" },
  { filterKey: "bread", title: "Bakery Products" },
];

const tabsData2 = [
  { filterKey: "*", title: "Show All" },
  { filterKey: "meat", title: "Fish" },
  { filterKey: "vegetables", title: "Meats and Poultry" },
];
const PortfolioGridIsotope = dynamic(
  () => import("../src/components/istotope/PortfolioGridIsotope"),
  {
    ssr: false,
  }
);

const PortfolioGrid = () => {
  return (
    <Layout>
      <PageBanner pageName={"Portfolio Grid"} />
      <PortfolioGridIsotope
        title={"Product Categories"}
        tabs={tabsData}
        items={portfolioItems}
      />
      <hr></hr>

      {/* <PortfolioGridIsotope
        title={"Pre-Marinated Perfection"}
        tabs={tabsData2}
        items={portfolioItems}
      /> */}
      {/* Portfolio Fluid End */}
      {/* Client Logo Section Start */}
      {/* <div className="client-logo-section text-center bg-light-green py-60">
        <div className="container">
          <ClientLogoSlider />
        </div>
        <div className="client-logo-shapes">
          <img
            className="shape-one"
            src="assets/images/shapes/cl-shape1.png"
            alt="Shape"
          />
          <img
            className="shape-two"
            src="assets/images/shapes/cl-shape2.png"
            alt="Shape"
          />
          <img
            className="shape-three"
            src="assets/images/shapes/cl-shape3.png"
            alt="Shape"
          />
          <img
            className="shape-four"
            src="assets/images/shapes/cl-shape4.png"
            alt="Shape"
          />
          <img
            className="shape-five"
            src="assets/images/shapes/cl-shape5.png"
            alt="Shape"
          />
          <img
            className="shape-six"
            src="assets/images/shapes/cl-shape6.png"
            alt="Shape"
          />
        </div>
      </div> */}
    </Layout>
  );
};
export default PortfolioGrid;
