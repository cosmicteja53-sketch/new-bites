import { MenuCategory, FeaturedItem, PromoItem } from "./types";

export const featuredItems: FeaturedItem[] = [
  { id: '1', name: 'Spicy Paneer Pizza', price: '₹199', type: 'veg', imagePlaceholder: '', image: '/images/spicypaneer.jpeg' },
  { id: '2', name: 'Chicken Supreme Pizza', price: '₹179', type: 'non-veg', imagePlaceholder: '', image: '/images/chickensupreme.jpeg' },
  { id: '3', name: 'Peri Peri Wings', price: '₹109', type: 'non-veg', imagePlaceholder: '', image: '/images/periperiwings.jpeg' },
  { id: '4', name: 'Chicken Lollipops', price: '₹139', type: 'non-veg', imagePlaceholder: '', image: '/images/4lolipop.jpeg' },
];

export const promoItems: PromoItem[] = [
  { title: 'All You Can Eat', subtitle: 'From ₹99', imagePlaceholder: '', image: '/images/allyoucaneat.jpeg', color: 'bg-green-mid', textColor: 'text-green-mid' },
  { title: 'Thunder Wings', subtitle: '4pc @ ₹99', imagePlaceholder: '', image: '/images/thunderwings.jpeg', color: 'bg-red-accent', textColor: 'text-red-accent' },
  { title: 'Pizza Bites', subtitle: 'From ₹159', imagePlaceholder: '', image: '/images/pizzabites.jpeg', color: 'bg-yellow-400', textColor: 'text-yellow-600' },
  { title: 'Mini Bites', subtitle: 'From ₹59', imagePlaceholder: '', image: '/images/minibites.jpeg', color: 'bg-green-dark', textColor: 'text-green-dark' },
];

export const menuCategories: MenuCategory[] = [
  {
    id: "pizza-veg",
    label: "1. Pizza Veg",
    isVeg: true,
    items: [
      { name: "Plain Cheese Pizza", isVeg: true, image: "/images/plaincheese.jpeg", price: "Reg ₹159 · Med ₹239" },
      { name: "Margherita Pizza", isVeg: true, image: "/images/margheritapizza.jpeg", price: "Reg ₹169 · Med ₹259" },
      { name: "Garden Veg Pizza", isVeg: true, image: "/images/gardenveg.jpeg", price: "Reg ₹179 · Med ₹259" },
      { name: "Country Special Pizza", isVeg: true, image: "/images/country-special-pizza.jpeg", price: "Reg ₹169 · Med ₹279" },
      { name: "Mushroom & Corn Pizza", isVeg: true, image: "/images/mushroom-corn-pizza-full.jpeg", price: "Reg ₹199 · Med ₹239" },
      { name: "Spicy Paneer Pizza", isVeg: true, image: "/images/spicypaneer.jpeg", price: "Reg ₹199 · Med ₹239" },
      { name: "New Bites Special Veg", isVeg: true, image: "/images/pizzaveg1.jpeg", price: "Reg ₹219 · Med ₹289" },
    ]
  },
  {
    id: "pizza-nonveg",
    label: "2. Pizza Non-Veg",
    isVeg: false,
    items: [
      { name: "Chicken Tikkonini", isVeg: false, image: "/images/chickentikkonini.jpeg", price: "Reg ₹159 · Med ₹239" },
      { name: "Chicken Chiecini", isVeg: false, image: "/images/chickenchiecini.jpeg", price: "Reg ₹189 · Med ₹259" },
      { name: "Chicken Supreme", isVeg: false, image: "/images/chickensupreme.jpeg", price: "Reg ₹179 · Med ₹269" },
      { name: "Butter Chicken Pizza", isVeg: false, image: "/images/butter-chicken-pizza.jpeg", price: "Reg ₹189 · Med ₹279" },
      { name: "Peri Peri Chicken Pizza", isVeg: false, image: "/images/periperichicken.jpeg", price: "Reg ₹199 · Med ₹289" },
      { name: "Barbeque Chicken Pizza", isVeg: false, image: "/images/barbequechicken.jpeg", price: "Reg ₹199 · Med ₹289" },
      { name: "Mughlai Chicken Pizza", isVeg: false, image: "/images/mughlai-chicken-pizza.jpeg", price: "Reg ₹199 · Med ₹329" },
    ]
  },
  {
    id: "fried-chicken",
    label: "3. Fried Chicken",
    isVeg: false,
    items: [
      { name: "Drumsticks", isVeg: false, image: "/images/drumsticks.jpeg", price: "₹89" },
      { name: "Thigh Pieces", isVeg: false, image: "/images/thighp.jpeg", price: "₹89" },
      { name: "1 Piece Order", isVeg: false, image: "/images/singlepiece.jpeg", price: "₹79" },
      { name: "4 Pcs Bucket", isVeg: false, image: "/images/4p.jpeg", price: "₹299" },
      { name: "8 Pcs Bucket", isVeg: false, image: "/images/8p.jpeg", price: "₹579" },
      { name: "Fried Drumsticks Basket", isVeg: false, image: "/images/fried-drumsticks-basket.jpeg", price: "₹649" },
    ]
  },
  {
    id: "thunder-wings",
    label: "4. Thunder Wings",
    isVeg: false,
    items: [
      { name: "Fry Wings", isVeg: false, image: "/images/4wings.jpeg", price: "4 Pc ₹99 · 8 Pc ₹199 · 12 Pc ₹259" },
      { name: "Peri Peri Wings", isVeg: false, image: "/images/peri-peri-wings-plate.jpeg", price: "4 Pc ₹109 · 8 Pc ₹259 · 12 Pc ₹379" },
      { name: "Spicy Wings", isVeg: false, image: "/images/spicy-wings-platter.jpeg", price: "4 Pc ₹109 · 8 Pc ₹209 · 12 Pc ₹299" },
      { name: "Barbeque Wings", isVeg: false, image: "/images/bbq-wings-platter.jpeg", price: "4 Pc ₹129 · 8 Pc ₹259 · 12 Pc ₹379" },
      { name: "Lemon Wings", isVeg: false, image: "/images/lemon-wings-plate.jpeg", price: "4 Pc ₹129 · 8 Pc ₹209 · 12 Pc ₹299" },
      { name: "Schezwan Wings", isVeg: false, image: "/images/schezwan-wings-platter.jpeg", price: "4 Pc ₹119 · 8 Pc ₹209 · 12 Pc ₹299" },
    ]
  },
  {
    id: "sandwiches-veg",
    label: "5. Sandwiches Veg",
    isVeg: true,
    items: [
      { name: "Veg Grilled Sandwich", isVeg: true, image: "/images/grilled-sandwich-plate.jpeg", price: "₹89" },
      { name: "Paneer Tikka Sandwich", isVeg: true, image: "/images/paneer-sandwich-full.jpeg", price: "₹109" },
      { name: "Corn & Mushroom Sandwich", isVeg: true, image: "/images/corn-mushroom-sandwich-full.jpeg", price: "₹99" },
      { name: "Schezwan Paneer Sandwich", isVeg: true, image: "/images/schezwan-paneer-sandwich-full.jpeg", price: "₹119" },
    ]
  },
  {
    id: "sandwiches-nonveg",
    label: "6. Sandwiches Non-Veg",
    isVeg: false,
    items: [
      { name: "Chicken Club Sandwich", isVeg: false, image: "/images/club-sandwich-full.jpeg", price: "₹139" },
      { name: "Crispy Chicken Sandwich", isVeg: false, image: "/images/crispy-chicken-sandwich-full.jpeg", price: "₹129" },
    ]
  },
  {
    id: "burgers-veg",
    label: "7. Burgers Veg",
    isVeg: true,
    items: [
      { name: "Classic Veg Burger", isVeg: true, image: "/images/veg-burger-full.jpeg", price: "₹79" },
      { name: "Veg King Burger", isVeg: true, image: "/images/veg-king-burger-full.jpeg", price: "₹119" },
      { name: "Special Paneer Burger", isVeg: true, image: "/images/special-paneer-burger.jpeg", price: "₹129" },
    ]
  },
  {
    id: "burgers-nonveg",
    label: "8. Burgers Non-Veg",
    isVeg: false,
    items: [
      { name: "Classic Chicken Burger", isVeg: false, image: "/images/chicken-burger-full.jpeg", price: "₹99" },
      { name: "Chicken King Burger", isVeg: false, image: "/images/chicken-king-burger-full.jpeg", price: "₹129" },
      { name: "Tandoori Chicken Burger", isVeg: false, image: "/images/tandoori-burger-full.jpeg", price: "₹119" },
      { name: "Ginger Chicken Burger", isVeg: false, image: "/images/ginger-burger-full.jpeg", price: "₹119" },
    ]
  },
  {
    id: "frankies-veg",
    label: "9. Frankie's Veg",
    isVeg: true,
    items: [
      { name: "Veg Wrap / Frankie", isVeg: true, image: "/images/veg-wrap-full.jpeg", price: "₹89" },
      { name: "Aloo Tikka Frankie", isVeg: true, image: "/images/aloo-tikka-frankie.jpeg", price: "₹99" },
      { name: "Cheese Corn Frankie", isVeg: true, image: "/images/cheese-corn-frankie-full.jpeg", price: "₹109" },
      { name: "Paneer Frankie", isVeg: true, image: "/images/paneer-frankie-full.jpeg", price: "₹119" },
    ]
  },
  {
    id: "frankies-nonveg",
    label: "10. Frankie's Non-Veg",
    isVeg: false,
    items: [
      { name: "Chicken Frankie", isVeg: false, image: "/images/chicken-frankie-cut.jpeg", price: "₹119" },
      { name: "BBQ Chicken Frankie", isVeg: false, image: "/images/bbq-chicken-frankie-full.jpeg", price: "₹129" },
      { name: "Schezwan Chicken Wrap", isVeg: false, image: "/images/schezwan-chicken-wrap-full.jpeg", price: "₹129" },
    ]
  },
  {
    id: "garlic-breads",
    label: "11. Garlic Breads",
    isVeg: true,
    items: [
      { name: "Plain Garlic Bread", isVeg: true, image: "/images/plain-garlic-bread-full.jpeg", price: "₹89" },
      { name: "Cheese Garlic Bread", isVeg: true, image: "/images/cheese-garlic-bread.jpeg", price: "₹109" },
      { name: "Spicy Garlic Bread", isVeg: true, image: "/images/spicy-garlic-bread-full.jpeg", price: "₹119" },
      { name: "Corn Garlic Bread", isVeg: true, image: "/images/corn-garlic-bread-full.jpeg", price: "₹129" },
      { name: "Chicken Garlic Bread", isVeg: false, image: "/images/chicken-garlic-bread-full.jpeg", price: "₹149" },
    ]
  },
  {
    id: "mini-bites-veg",
    label: "12. Mini Bites Veg",
    isVeg: true,
    items: [
      { name: "French Fries", isVeg: true, image: "/images/french-fries-basket.jpeg", price: "₹59" },
      { name: "Potato Wedges", isVeg: true, image: "/images/potato-wedges-basket.jpeg", price: "₹79" },
      { name: "Cheese Balls", isVeg: true, image: "/images/cheese-balls-plate.jpeg", price: "₹99" },
      { name: "Veg Fingers", isVeg: true, image: "/images/veg-fingers-plate.jpeg", price: "₹89" },
      { name: "Veg Nuggets", isVeg: true, image: "/images/veg-nuggets-basket.jpeg", price: "₹89" },
      { name: "Potato Tornado", isVeg: true, image: "/images/potato-tornado-basket.jpeg", price: "₹69" },
      { name: "Smilies (6pc)", isVeg: true, image: "/images/smilies-plate.jpeg", price: "₹89" },
      { name: "Cheesy Shots (6pc)", isVeg: true, image: "/images/cheesy-shots-bowl.jpeg", price: "₹99" },
    ]
  },
  {
    id: "mini-bites-nonveg",
    label: "13. Mini Bites Non-Veg",
    isVeg: false,
    items: [
      { name: "Chicken Fingers", isVeg: false, image: "/images/chicken-fingers-plate.jpeg", price: "₹89" },
      { name: "Chicken Nuggets Basket", isVeg: false, image: "/images/chicken-nuggets-basket.jpeg", price: "₹99" },
      { name: "Peri Peri Popcorn", isVeg: false, image: "/images/peri-peri-popcorn-bowl.jpeg", price: "₹109" },
      { name: "Fish Fingers", isVeg: false, image: "/images/fishfingers.jpeg", price: "₹119" },
      { name: "Popcorn Chicken Cup", isVeg: false, image: "/images/popcorn-chicken-bowl.jpeg", price: "₹129" },
      { name: "Chicken Lollipops", isVeg: false, image: "/images/chicken-lollipops-plate.jpeg", price: "₹139" },
      { name: "Lahori Kebab", isVeg: false, image: "/images/lahori-kebab-plate.jpeg", price: "₹149" },
      { name: "Chicken Salami", isVeg: false, image: "/images/chicken-salami-plate.jpeg", price: "₹79" },
      { name: "Lollipop Delfra", isVeg: false, image: "/images/lollipop-delfra-plate.jpeg", price: "₹159" },
      { name: "Lollipop Cheese Western", isVeg: false, image: "/images/lollipop-cheese-western-plate.jpeg", price: "₹169" },
    ]
  },
  {
    id: "milkshakes",
    label: "14. Milkshakes",
    isVeg: true,
    items: [
      { name: "Signature Milkshake", isVeg: true, image: "/images/milkshake.jpeg", price: "₹109" },
      { name: "Chocolate Shake", isVeg: true, image: "/images/chocolate-shake.jpeg", price: "₹109" },
      { name: "French Vanilla Shake", isVeg: true, image: "/images/french-vanilla-shake.jpeg", price: "₹99" },
      { name: "Butterscotch Shake", isVeg: true, image: "/images/butterscotch-shake.jpeg", price: "₹109" },
      { name: "Strawberry Shake", isVeg: true, image: "/images/strawberry-shake.jpeg", price: "₹109" },
      { name: "Blueberry Shake", isVeg: true, image: "/images/blueberry-shake.jpeg", price: "₹119" },
      { name: "Mango Shake", isVeg: true, image: "/images/mango-shake.jpeg", price: "₹109" },
      { name: "Pineapple Shake", isVeg: true, image: "/images/pineapple-shake.jpeg", price: "₹109" },
      { name: "Oreo Shake", isVeg: true, image: "/images/oreo-shake.jpeg", price: "₹119" },
      { name: "KitKat Shake", isVeg: true, image: "/images/kitkat-shake.jpeg", price: "₹119" },
      { name: "Kiwi Cranzo Shake", isVeg: true, image: "/images/kiwi-cranzo-shake.jpeg", price: "₹119" },
    ]
  },
  {
    id: "mocktails",
    label: "15. Mocktails",
    isVeg: true,
    items: [
      { name: "Virgin Mojito", isVeg: true, image: "/images/virgin-mojito-glass.jpeg", price: "₹89" },
      { name: "Black Mojito", isVeg: true, image: "/images/black-mojito-glass.jpeg", price: "₹99" },
      { name: "Blue Heaven", isVeg: true, image: "/images/blue-heaven-mocktail.jpeg", price: "₹99" },
      { name: "Green Apple", isVeg: true, image: "/images/green-apple-mocktail.jpeg", price: "₹99" },
      { name: "Strawberry Mocktail", isVeg: true, image: "/images/strawberry-mocktail.jpeg", price: "₹99" },
      { name: "Mango Mocktail", isVeg: true, image: "/images/mango-mocktail.jpeg", price: "₹99" },
      { name: "Raspberry Mocktail", isVeg: true, image: "/images/raspberry-mocktail.jpeg", price: "₹99" },
      { name: "Bubblegum Fizz", isVeg: true, image: "/images/bubblegum-fizz.jpeg", price: "₹99" },
      { name: "Betal Paan Mocktail", isVeg: true, image: "/images/betal-paan-mocktail.jpeg", price: "₹109" },
      { name: "Watermelon Sangria", isVeg: true, image: "/images/watermelon-sangria.jpeg", price: "₹109" },
    ]
  },
  {
    id: "desserts",
    label: "16. Desserts",
    isVeg: true,
    items: [
      { name: "Sizzling Brownie", isVeg: true, image: "/images/sizzling-brownie-plate.jpeg", price: "₹149" },
      { name: "Brownie with Ice Cream", isVeg: true, image: "/images/brownie-with-icecream.jpeg", price: "₹139" },
      { name: "Chock Lova", isVeg: true, image: "/images/chock-lova-dessert.jpeg", price: "₹129" },
      { name: "Banana Boncaz", isVeg: true, image: "/images/banana-boncaz-dessert.jpeg", price: "₹119" },
      { name: "Litchi Fizz Dessert", isVeg: true, image: "/images/litchi-fizz-dessert.jpeg", price: "₹119" },
      { name: "Lots of Nuts Dessert", isVeg: true, image: "/images/lots-of-nuts-dessert.jpeg", price: "₹139" },
    ]
  },
  {
    id: "ice-creams",
    label: "17. Ice Creams",
    isVeg: true,
    items: [
      { name: "Vanilla Ice Cream", isVeg: true, image: "/images/vanilla-icecream-scoop.jpeg", price: "₹59" },
      { name: "Chocolate Ice Cream", isVeg: true, image: "/images/chocolate-icecream.jpeg", price: "₹69" },
      { name: "Strawberry Ice Cream", isVeg: true, image: "/images/strawberry-icecream-scoop.jpeg", price: "₹69" },
      { name: "Butterscotch Ice Cream", isVeg: true, image: "/images/butterscotch-icecream.jpeg", price: "₹79" },
      { name: "Mango Ice Cream", isVeg: true, image: "/images/mango-icecream-scoop.jpeg", price: "₹79" },
      { name: "Pineapple Ice Cream", isVeg: true, image: "/images/pineapple-icecream-scoop.jpeg", price: "₹79" },
      { name: "Black Torrent Ice Cream", isVeg: true, image: "/images/black-torrent-icecream.jpeg", price: "₹89" },
      { name: "Brownie Ice Cream Plate", isVeg: true, image: "/images/brownie-icecream-plate.jpeg", price: "₹119" },
      { name: "Choco Bonanza Plate", isVeg: true, image: "/images/choco-bonanza-plate.jpeg", price: "₹129" },
    ]
  },
  {
    id: "extra-toppings",
    label: "18. Extra Toppings",
    isVeg: true,
    items: [
      { name: "Extra Cheese & Veggies", isVeg: true, image: "/images/extra-toppings-spread.jpeg", price: "₹49" },
    ]
  },
];

export const exploreCategories = menuCategories.map(cat => ({
  id: cat.id,
  name: cat.label,
  title: cat.label,
  items: cat.items
}));