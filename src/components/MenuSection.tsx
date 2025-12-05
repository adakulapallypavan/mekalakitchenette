import { useState } from "react";
import { MenuItem } from "./MenuItem";

interface MenuItemData {
  name: string;
  price: number;
  image: string;
  isVeg: boolean;
  description?: string;
}

interface MenuCategory {
  id: string;
  name: string;
  items: MenuItemData[];
}

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("veg-biryani");

  const menuData: MenuCategory[] = [
    {
      id: "veg-biryani",
      name: "Veg Biryani Packs",
      items: [
        { name: "Panasa Kaya Biryani", price: 249, image: "https://images.unsplash.com/photo-1637426992376-b8af65fb90d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB2ZWdldGFibGUlMjBiaXJ5YW5pfGVufDF8fHx8MTc2NDg2NDkxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", isVeg: true, description: "Jackfruit biryani with aromatic spices" },
        { name: "Vankai Biryani", price: 249, image: "https://images.unsplash.com/photo-1637426992376-b8af65fb90d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB2ZWdldGFibGUlMjBiaXJ5YW5pfGVufDF8fHx8MTc2NDg2NDkxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", isVeg: true, description: "Eggplant biryani with traditional flavors" },
        { name: "Vegetable Biryani", price: 199, image: "https://images.unsplash.com/photo-1637426992376-b8af65fb90d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB2ZWdldGFibGUlMjBiaXJ5YW5pfGVufDF8fHx8MTc2NDg2NDkxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", isVeg: true, description: "Mixed vegetables with fragrant basmati rice" },
        { name: "Arati Kaya Biryani", price: 199, image: "https://images.unsplash.com/photo-1637426992376-b8af65fb90d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB2ZWdldGFibGUlMjBiaXJ5YW5pfGVufDF8fHx8MTc2NDg2NDkxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", isVeg: true, description: "Raw banana biryani with authentic spices" },
      ]
    },
    {
      id: "nonveg-biryani",
      name: "Non-Veg Biryani Packs",
      items: [
        { name: "Mekala's Mutton Malai Biryani", price: 399, image: "https://images.unsplash.com/photo-1697276063790-a68a966b12f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXR0b24lMjBiaXJ5YW5pfGVufDF8fHx8MTc2NDg2NDkxN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", isVeg: false, description: "Our signature creamy mutton biryani" },
        { name: "Fish Fry Biryani", price: 379, image: "https://images.unsplash.com/photo-1642741580389-87dd75d913f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXNoJTIwZnJ5JTIwaW5kaWFufGVufDF8fHx8MTc2NDg2NDkyNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", isVeg: false, description: "Crispy fish fry pieces with aromatic rice" },
        { name: "Mutton Dum Biryani", price: 379, image: "https://images.unsplash.com/photo-1697276063790-a68a966b12f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXR0b24lMjBiaXJ5YW5pfGVufDF8fHx8MTc2NDg2NDkxN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", isVeg: false, description: "Slow-cooked mutton biryani in dum style" },
        { name: "Natu Kodi Fry Piece Biryani", price: 379, image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBjaGlja2VuJTIwYmlyeWFuaXxlbnwxfHx8fDE3NjQ4NDgzMjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", isVeg: false, description: "Country chicken fry pieces biryani" },
        { name: "Prawns Biryani", price: 379, image: "https://images.unsplash.com/photo-1586981114766-708f09a71e20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmF3biUyMGN1cnJ5JTIwaW5kaWFufGVufDF8fHx8MTc2NDg2NDkyNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", isVeg: false, description: "Succulent prawns with fragrant rice" },
      ]
    },
    {
      id: "meal-packs",
      name: "Meal Packs",
      items: [
        { name: "Veg Meal Pack", price: 279, image: "https://images.unsplash.com/photo-1742281257687-092746ad6021?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB0aGFsaSUyMG1lYWx8ZW58MXx8fHwxNzY0ODIwOTMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", isVeg: true, description: "White Rice, Flavoured Rice, 3 Curries, Charu, 2 Chutnies, Perugu utti, Frys & Dessert" },
        { name: "Non-Veg Meal Pack", price: 399, image: "https://images.unsplash.com/photo-1742281257687-092746ad6021?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB0aGFsaSUyMG1lYWx8ZW58MXx8fHwxNzY0ODIwOTMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", isVeg: false, description: "Baghara Rice, White Rice, Chicken/Mutton Curry, Pachi Pulusu, Boild Egg & Curd Pot" },
        { name: "Ghee Ragi Mudda with Natu Kodi/Chepala Pulusu", price: 349, image: "https://images.unsplash.com/photo-1742281257687-092746ad6021?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB0aGFsaSUyMG1lYWx8ZW58MXx8fHwxNzY0ODIwOTMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", isVeg: false, description: "Traditional ragi mudda with chicken or fish curry" },
        { name: "Baghara Boti Dalcha Khana", price: 249, image: "https://images.unsplash.com/photo-1742281257687-092746ad6021?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB0aGFsaSUyMG1lYWx8ZW58MXx8fHwxNzY0ODIwOTMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", isVeg: false, description: "Baghara rice with tender boti dalcha" },
      ]
    },
    {
      id: "pulao",
      name: "Pulao Packs",
      items: [
        { name: "Pachi mirchi Paneer Pulao", price: 299, image: "https://images.unsplash.com/photo-1657186618738-9dfbcee196b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYW5lZXIlMjBpbmRpYW4lMjBmb29kfGVufDF8fHx8MTc2NDg2NDkyNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", isVeg: true, description: "Spicy green chili paneer pulao" },
        { name: "Mixed Vegetable Pulao", price: 299, image: "https://images.unsplash.com/photo-1647577931985-e0c3e8fb815c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBwdWxhbyUyMHJpY2V8ZW58MXx8fHwxNzY0ODY0OTE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", isVeg: true, description: "Colorful mix of vegetables with pulao rice" },
        { name: "Jeedi Pappu Pulao", price: 299, image: "https://images.unsplash.com/photo-1647577931985-e0c3e8fb815c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBwdWxhbyUyMHJpY2V8ZW58MXx8fHwxNzY0ODY0OTE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", isVeg: true, description: "Cashew nut pulao with rich flavors" },
        { name: "Mushroom Pulao", price: 299, image: "https://images.unsplash.com/photo-1647577931985-e0c3e8fb815c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBwdWxhbyUyMHJpY2V8ZW58MXx8fHwxNzY0ODY0OTE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", isVeg: true, description: "Fresh mushrooms with aromatic pulao" },
        { name: "Gongura Chicken Pulao", price: 379, image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBjaGlja2VuJTIwYmlyeWFuaXxlbnwxfHx8fDE3NjQ4NDgzMjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", isVeg: false, description: "Tangy gongura leaves with chicken pulao" },
        { name: "Mutton Pulao", price: 379, image: "https://images.unsplash.com/photo-1697276063790-a68a966b12f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXR0b24lMjBiaXJ5YW5pfGVufDF8fHx8MTc2NDg2NDkxN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", isVeg: false, description: "Tender mutton pieces with pulao rice" },
        { name: "Natukodi Pulao", price: 379, image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBjaGlja2VuJTIwYmlyeWFuaXxlbnwxfHx8fDE3NjQ4NDgzMjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", isVeg: false, description: "Country chicken pulao with authentic taste" },
        { name: "Mixed Non-Veg Pulao", price: 379, image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBjaGlja2VuJTIwYmlyeWFuaXxlbnwxfHx8fDE3NjQ4NDgzMjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", isVeg: false, description: "Combination of chicken, mutton, and prawns" },
      ]
    },
    {
      id: "starters",
      name: "Starter Packs",
      items: [
        { name: "Paneer Cheesy Punch", price: 199, image: "https://images.unsplash.com/photo-1657186618738-9dfbcee196b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYW5lZXIlMjBpbmRpYW4lMjBmb29kfGVufDF8fHx8MTc2NDg2NDkyNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", isVeg: true, description: "Crispy paneer with cheese filling" },
        { name: "Paneer Mushroom Samosa with Chutney", price: 199, image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYW1vc2ElMjBpbmRpYW58ZW58MXx8fHwxNzY0ODY0OTI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", isVeg: true, description: "Paneer and mushroom stuffed samosas" },
        { name: "Aloo Potato Pops with Chutney", price: 199, image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYW1vc2ElMjBpbmRpYW58ZW58MXx8fHwxNzY0ODY0OTI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", isVeg: true, description: "Crispy potato bites with mint chutney" },
      ]
    },
    {
      id: "desserts",
      name: "Telugu Desserts",
      items: [
        { name: "Bellam Poornam", price: 99, image: "https://images.unsplash.com/photo-1635564981692-857482d9325f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBzd2VldHMlMjBkZXNzZXJ0fGVufDF8fHx8MTc2NDg0Mzk2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", isVeg: true, description: "Traditional jaggery sweet" },
        { name: "Bobattlu", price: 99, image: "https://images.unsplash.com/photo-1635564981692-857482d9325f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBzd2VldHMlMjBkZXNzZXJ0fGVufDF8fHx8MTc2NDg0Mzk2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", isVeg: true, description: "Sweet filled flatbread" },
        { name: "Paramannam", price: 49, image: "https://images.unsplash.com/photo-1635564981692-857482d9325f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBzd2VldHMlMjBkZXNzZXJ0fGVufDF8fHx8MTc2NDg0Mzk2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", isVeg: true, description: "Creamy sweet rice pudding" },
        { name: "Payasam", price: 49, image: "https://images.unsplash.com/photo-1635564981692-857482d9325f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBzd2VldHMlMjBkZXNzZXJ0fGVufDF8fHx8MTc2NDg0Mzk2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", isVeg: true, description: "Traditional sweet kheer" },
      ]
    },
    {
      id: "rotte",
      name: "Rotte Packs (After 6PM)",
      items: [
        { name: "Jonna rotte/Raghi rotte with vegetable curry", price: 99, image: "https://images.unsplash.com/photo-1711153419402-336ee48f2138?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb3RpJTIwaW5kaWFuJTIwYnJlYWR8ZW58MXx8fHwxNzY0ODY0OTE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", isVeg: true, description: "Healthy millet bread with curry" },
        { name: "Jonna rotte/Raghi Rotte with Kaala shorwa/Thalakaya curry/Bheja fry", price: 199, image: "https://images.unsplash.com/photo-1711153419402-336ee48f2138?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb3RpJTIwaW5kaWFuJTIwYnJlYWR8ZW58MXx8fHwxNzY0ODY0OTE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", isVeg: false, description: "Millet bread with choice of mutton curry" },
      ]
    },
    {
      id: "party",
      name: "Party Packs",
      items: [
        { name: "Veg Party Pack (Serves 4)", price: 899, image: "https://images.unsplash.com/photo-1742281257687-092746ad6021?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB0aGFsaSUyMG1lYWx8ZW58MXx8fHwxNzY0ODIwOTMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", isVeg: true, description: "Any Pulao + Any Biryani, serves 4 persons" },
        { name: "Non-Veg Party Pack (Serves 4)", price: 1199, image: "https://images.unsplash.com/photo-1742281257687-092746ad6021?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB0aGFsaSUyMG1lYWx8ZW58MXx8fHwxNzY0ODIwOTMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", isVeg: false, description: "Any Pulao + Any Biryani, serves 4 persons" },
      ]
    },
    {
      id: "friendly",
      name: "Friendly Packs",
      items: [
        { name: "Chicken Biryani", price: 149, image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBjaGlja2VuJTIwYmlyeWFuaXxlbnwxfHx8fDE3NjQ4NDgzMjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", isVeg: false, description: "Budget-friendly chicken biryani" },
        { name: "Egg Biryani", price: 129, image: "https://images.unsplash.com/photo-1760691836344-0d7025b8ee1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZ2clMjBiaXJ5YW5pfGVufDF8fHx8MTc2NDg2NDkyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", isVeg: false, description: "Delicious egg biryani" },
        { name: "Tomato rice with Masala Gravy", price: 119, image: "https://images.unsplash.com/photo-1647577931985-e0c3e8fb815c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBwdWxhbyUyMHJpY2V8ZW58MXx8fHwxNzY0ODY0OTE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", isVeg: true, description: "Tangy tomato rice with gravy" },
        { name: "Bhagara Rice with Masala Gravy", price: 119, image: "https://images.unsplash.com/photo-1647577931985-e0c3e8fb815c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBwdWxhbyUyMHJpY2V8ZW58MXx8fHwxNzY0ODY0OTE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", isVeg: true, description: "Spiced tempered rice with gravy" },
        { name: "Kichidi Rice with Masala Gravy", price: 119, image: "https://images.unsplash.com/photo-1647577931985-e0c3e8fb815c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBwdWxhbyUyMHJpY2V8ZW58MXx8fHwxNzY0ODY0OTE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", isVeg: true, description: "Comforting rice and lentil dish" },
        { name: "Ghee gongura annam muddha", price: 119, image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ5YW5pJTIwaW5kaWFuJTIwcmljZXxlbnwxfHx8fDE3NjQ4NjQ5MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", isVeg: true, description: "Ghee rice with tangy gongura" },
        { name: "Ghee Muddha pappu annam with pickle", price: 119, image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ5YW5pJTIwaW5kaWFuJTIwcmljZXxlbnwxfHx8fDE3NjQ4NjQ5MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", isVeg: true, description: "Rice ball with dal and pickle" },
        { name: "Ghee pappucharu annam with pickle", price: 119, image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ5YW5pJTIwaW5kaWFuJTIwcmljZXxlbnwxfHx8fDE3NjQ4NjQ5MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", isVeg: true, description: "Rice with tangy rasam and pickle" },
        { name: "Jeera Rice", price: 99, image: "https://images.unsplash.com/photo-1647577931985-e0c3e8fb815c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBwdWxhbyUyMHJpY2V8ZW58MXx8fHwxNzY0ODY0OTE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", isVeg: true, description: "Simple cumin flavored rice" },
        { name: "Perugannam avakai", price: 79, image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ5YW5pJTIwaW5kaWFuJTIwcmljZXxlbnwxfHx8fDE3NjQ4NjQ5MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", isVeg: true, description: "Curd rice with mango pickle" },
      ]
    }
  ];

  const activeData = menuData.find(cat => cat.id === activeCategory);

  return (
    <section id="menu" className="bg-[#FFF8E7] py-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-[#2C2C2C] mb-4">Our Menu</h2>
          <p className="text-[#2C2C2C]/70 max-w-2xl mx-auto">
            Explore our authentic Telugu cuisine, prepared fresh daily with traditional recipes
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {menuData.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-lg transition-all ${
                activeCategory === category.id
                  ? 'bg-[#D4AF37] text-[#2C2C2C] shadow-lg'
                  : 'bg-white text-[#2C2C2C] hover:bg-[#F4C430]/20'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeData?.items.map((item, index) => (
            <MenuItem
              key={index}
              name={item.name}
              price={item.price}
              image={item.image}
              isVeg={item.isVeg}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
