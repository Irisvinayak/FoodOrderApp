import { config } from "dotenv";
import mongoose from "mongoose";
import MenuItem from "../models/MenuItem";

config({ path: ".env.local" });

const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

type Seed = [name: string, category: string, price: number, veg: boolean, spice: number, badges?: string[]];

const items: Seed[] = [
  ["Veg Hakka Noodles", "Noodles", 120, true, 1, ["Bestseller"]],
  ["Chicken Hakka Noodles", "Noodles", 150, false, 1],
  ["Schezwan Noodles", "Noodles", 140, true, 3, ["Chef's Pick"]],
  ["Chilli Garlic Noodles", "Noodles", 140, true, 2],
  ["Egg Noodles", "Noodles", 135, false, 1],
  ["Veg Fried Rice", "Fried Rice", 120, true, 1],
  ["Chicken Fried Rice", "Fried Rice", 150, false, 1, ["Bestseller"]],
  ["Schezwan Fried Rice", "Fried Rice", 140, true, 3],
  ["Triple Schezwan Rice", "Fried Rice", 180, true, 3, ["Chef's Pick"]],
  ["Burnt Garlic Rice", "Fried Rice", 140, true, 1, ["New"]],
  ["Veg Steamed Momos", "Momos", 90, true, 0, ["Bestseller"]],
  ["Chicken Steamed Momos", "Momos", 110, false, 0],
  ["Veg Fried Momos", "Momos", 100, true, 1],
  ["Paneer Tandoori Momos", "Momos", 140, true, 2, ["New"]],
  ["Chicken Kurkure Momos", "Momos", 140, false, 2],
  ["Veg Manchurian Gravy", "Manchurian", 130, true, 2],
  ["Veg Manchurian Dry", "Manchurian", 130, true, 2, ["Bestseller"]],
  ["Gobi Manchurian", "Manchurian", 130, true, 2],
  ["Chicken Manchurian", "Manchurian", 160, false, 2],
  ["Hot & Sour Soup", "Soups", 80, true, 2],
  ["Manchow Soup", "Soups", 80, true, 2, ["Chef's Pick"]],
  ["Sweet Corn Soup", "Soups", 70, true, 0],
  ["Chicken Clear Soup", "Soups", 90, false, 0],
  ["Chilli Paneer", "Starters", 160, true, 2, ["Bestseller"]],
  ["Chilli Chicken", "Starters", 180, false, 2],
  ["Crispy Honey Potato", "Starters", 120, true, 0],
  ["Spring Rolls", "Starters", 100, true, 1],
  ["Lemon Iced Tea", "Drinks", 50, true, 0],
  ["Masala Cola", "Drinks", 40, true, 0],
  ["Mango Smoothie", "Drinks", 70, true, 0, ["New"]],
];

async function main() {
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error("MONGODB_URI is not set in .env.local");
  await mongoose.connect(uri);
  await MenuItem.deleteMany({});
  await MenuItem.insertMany(
    items.map(([name, category, price, veg, spiceLevel, badges = []]) => ({
      name, slug: slugify(name), category, price, veg, spiceLevel, badges,
      description: `Freshly tossed ${name.toLowerCase()} made to order in our wok.`,
      rating: +(4 + Math.random()).toFixed(1),
      ratingCount: Math.floor(20 + Math.random() * 200),
    })),
  );
  console.log(`Seeded ${items.length} menu items`);
  await mongoose.disconnect();
}

main().catch((e) => { console.error(e); process.exit(1); });
