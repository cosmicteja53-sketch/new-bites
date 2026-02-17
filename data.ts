import { MenuCategory, FeaturedItem, PromoItem } from "./types";

export const featuredItems: FeaturedItem[] = [
  { id: '1', name: 'Spicy Paneer Pizza', price: '₹199 / ₹239', type: 'veg', imagePlaceholder: 'item-spicy-paneer.jpg', image: '/spicypaneer.jpeg' },
  { id: '2', name: 'Chicken Supreme Pizza', price: '₹179', type: 'non-veg', imagePlaceholder: 'item-chx-supreme.jpg', image: '/chickensupreme.jpeg' },
  { id: '3', name: 'Peri Peri Wings', price: '₹109 / ₹259', type: 'non-veg', imagePlaceholder: 'item-peri-wings.jpg', image: '/periperiwings.jpeg' },
  { id: '4', name: 'Chicken Lollipops', price: '₹139', type: 'non-veg', imagePlaceholder: 'item-lollipops.jpg', image: '/4lolipop.jpeg' },
  { id: '5', name: 'Margherita Pizza', price: '₹169 / ₹259', type: 'veg', imagePlaceholder: 'item-margherita.jpg', image: '/margheritapizza.jpeg' },
  { id: '6', name: 'Barbeque Chicken Pizza', price: '₹199', type: 'non-veg', imagePlaceholder: 'item-bbq-chx.jpg', image: '/barbequechicken.jpeg' },
];

export const promoItems: PromoItem[] = [
  { title: 'All You Can Eat', subtitle: 'From ₹99', imagePlaceholder: 'promo-buffet.jpg', image: '/allyoucaneat.jpeg', color: 'bg-green-mid', textColor: 'text-green-mid' },
  { title: 'Thunder Wings', subtitle: '4pc @ ₹99', imagePlaceholder: 'promo-wings.jpg', image: '/thunderwings.jpeg', color: 'bg-red-accent', textColor: 'text-red-accent' },
  { title: 'Pizza Bites', subtitle: 'From ₹159', imagePlaceholder: 'promo-pizza.jpg', image: '/pizzabites.jpeg', color: 'bg-yellow-400', textColor: 'text-yellow-600' },
  { title: 'Mini Bites', subtitle: 'From ₹59', imagePlaceholder: 'promo-mini.jpg', image: '/minibites.jpeg', color: 'bg-green-dark', textColor: 'text-green-dark' },
];

export const menuCategories: MenuCategory[] = [
  {
    id: "pizza-veg",
    label: "Pizza Veg",
    isVeg: true,
    items: [
      { name: "Plain Cheese", isVeg: true, image: "/plaincheese.jpeg", price: "Reg ₹159 · Med ₹239" },
      { name: "Margherita", isVeg: true, image: "/margheritapizza.jpeg", price: "Reg ₹169 · Med ₹259" },
      { name: "Garden Veg", isVeg: true, image: "/gardenveg.jpeg", price: "Reg ₹179 · Med ₹259" },
      { name: "Country Special", isVeg: true, image: "/countryspecial.jpeg", price: "Reg ₹169 · Med ₹279" },
      { name: "Mushroom & Corn", isVeg: true, image: "/mushroomcorn.jpeg", price: "Reg ₹199 · Med ₹239" },
      { name: "Spicy Paneer", isVeg: true, image: "/spicypaneer.jpeg", price: "Reg ₹199 · Med ₹239" },
      { name: "New Bites Special", isVeg: true, image: "/specialbites.jpeg", price: "Single ₹159 · Med ₹279" },
    ]
  },
  {
    id: "pizza-nonveg",
    label: "Pizza Non-Veg",
    isVeg: false,
    items: [
      { name: "Chicken Tikkonini", isVeg: false, image: "/chickentikkonini.jpeg", price: "Single ₹159 · Reg ₹159 · Med ₹239" },
      { name: "Chicken Chiecini", isVeg: false, image: "/chickenchiecini.jpeg", price: "Single ₹169 · Reg ₹189 · Med ₹259" },
      { name: "Chicken Supreme", isVeg: false, image: "/chickensupreme.jpeg", price: "₹179" },
      { name: "Butter Chicken", isVeg: false, image: "/butterchicken.jpeg", price: "₹189" },
      { name: "Peri Peri Chicken", isVeg: false, image: "/periperichicken.jpeg", price: "₹199" },
      { name: "Barbeque Chicken", isVeg: false, image: "/barbequechicken.jpeg", price: "₹199" },
      { name: "Mughlai Chicken", isVeg: false, image: "/mughlai.jpeg", price: "Reg ₹199 · Med ₹329" },
    ]
  },
  {
    id: "fried-chicken",
    label: "Fried Chicken",
    isVeg: false,
    items: [
      { name: "Drumsticks", isVeg: false, image: "/drumsticks.jpeg", price: "₹89" },
      { name: "Thigh Pieces", isVeg: false, image: "/thighp.jpeg", price: "₹89" },
      { name: "1 Piece per Order", isVeg: false, image: "/singlepiece.jpeg", price: "₹79" },
      { name: "4 pcs", isVeg: false, image: "/4p.jpeg", price: "₹299" },
      { name: "8 pcs", isVeg: false, image: "/8p.jpeg", price: "₹579" },
    ]
  },
  {
    id: "thunder-wings",
    label: "Thunder Wings",
    isVeg: false,
    items: [
      { name: "Fry Wings", isVeg: false, image: "/4wings.jpeg", price: "4pc ₹99 · 8pc ₹199 · 12pc ₹259" },
      { name: "Peri Peri Wings", isVeg: false, image: "/periperiwings.jpeg", price: "4pc ₹109 · 8pc ₹259 · 12pc ₹379" },
      { name: "Spicy Wings", isVeg: false, image: "/spicywings.jpeg", price: "4pc ₹109 · 8pc ₹209 · 12pc ₹299" },
      { name: "Barbeque Wings", isVeg: false, image: "/bbqwings.jpeg", price: "4pc ₹129 · 8pc ₹259 · 12pc ₹379" },
      { name: "Lemon Wings", isVeg: false, image: "/lemonwings.jpeg", price: "4pc ₹129 · 8pc ₹209 · 12pc ₹299" },
      { name: "Schezwan Wings", isVeg: false, image: "/schezwanwings.jpeg", price: "4pc ₹119 · 8pc ₹209 · 12pc ₹299" },
      { name: "Cheesy Wings", isVeg: false, image: "/cheesywings.jpeg", price: "4pc ₹119 · 8pc ₹209 · 12pc ₹299" },
    ]
  },
  {
    id: "mini-veg",
    label: "Mini Bites Veg",
    isVeg: true,
    items: [
      { name: "French Fries", isVeg: true, image: "/frenchfries.jpeg", price: "₹59" },
      { name: "Potato Wedges", isVeg: true, image: "/goldenpotatowedges.jpeg", price: "₹79" },
      { name: "2 pcs order", isVeg: true, image: "/2pcs.jpeg", price: "₹149" },
      { name: "4 pcs", isVeg: true, image: "/4pcs.jpeg", price: "₹299" },
      { name: "8 pcs", isVeg: true, image: "/8pcs.jpeg", price: "₹579" },
    ]
  },
  {
    id: "mini-nonveg",
    label: "Mini Bites Non-Veg",
    isVeg: false,
    items: [
      { name: "Chicken Fingers", isVeg: false, image: "/chickenfingers.jpeg", price: "₹89" },
      { name: "Chicken Nuggets", isVeg: false, image: "/chickennuggets.jpeg", price: "₹99" },
      { name: "Peri Peri Popcorn", isVeg: false, image: "/periperipopcorn.jpeg", price: "₹109" },
      { name: "Fish Fingers", isVeg: false, image: "/fishfingers.jpeg", price: "₹109" },
      { name: "Popcorn Chicken", isVeg: false, image: "/popcornchicken.jpeg", price: "₹129" },
      { name: "Chicken Lollipops", isVeg: false, image: "/4lolipop.jpeg", price: "₹139" },
      { name: "Lahori Kebab", isVeg: false, image: "/lahorikebab.jpeg", price: "₹149" },
    ]
  },
  {
    id: "extra-toppings",
    label: "Extra Toppings",
    isVeg: true,
    items: [
      { name: "Onion/Tomato mix", isVeg: true, image: "/veggiemix.jpeg", price: "Reg ₹99 · Single ₹59" },
      { name: "Red Paprika mix", isVeg: true, image: "/spicymix.jpeg", price: "Reg ₹99 · Single ₹59" },
      { name: "Extra Pepperoni", isVeg: false, image: "/extrapepperoni.jpeg", price: "Reg ₹89 · Med ₹109" },
      { name: "Extra Chicken R/M", isVeg: false, image: "/toppings.jpeg", price: "Reg ₹79 · Med ₹99" },
    ]
  },
  {
    id: "drinks",
    label: "Drinks",
    isVeg: true,
    items: [
      {
        name: "Soft Drinks",
        isVeg: true,
        image: "/softdrinks.jpeg",
        price: "From ₹40",
        description: "Coca-Cola, Fanta, Sprite & more"
      },
      {
        name: "Energy Drinks",
        isVeg: true,
        image: "/energydrinks.jpeg",
        price: "From ₹50",
        description: "Monster, Red Bull & more"
      },
      {
        name: "Mojito",
        isVeg: true,
        image: "/mojito.jpeg",
        price: "From ₹89",
        description: "Fresh mint, lemon & more flavors"
      },
      {
        name: "Milkshake",
        isVeg: true,
        image: "/milkshake.jpeg",
        price: "From ₹109",
        description: "Chocolate, Vanilla, Strawberry"
      },
    ]
  },
];

export const exploreCategories = menuCategories.map(cat => ({
  id: cat.id,
  name: cat.label,
  title: cat.label,
  items: cat.items
}));