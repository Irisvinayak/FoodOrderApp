import { Schema, model, models, type InferSchemaType } from "mongoose";

export const CATEGORIES = [
  "Noodles", "Fried Rice", "Momos", "Manchurian", "Soups", "Starters", "Drinks",
] as const;

const MenuItemSchema = new Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    description: String,
    category: { type: String, enum: CATEGORIES, required: true },
    price: { type: Number, required: true },
    image: String,
    veg: { type: Boolean, default: true },
    spiceLevel: { type: Number, min: 0, max: 3, default: 1 },
    badges: [{ type: String, enum: ["Bestseller", "Chef's Pick", "New"] }],
    available: { type: Boolean, default: true },
    rating: { type: Number, default: 0 },
    ratingCount: { type: Number, default: 0 },
  },
  { timestamps: true },
);

export type MenuItem = InferSchemaType<typeof MenuItemSchema>;
export default models.MenuItem || model("MenuItem", MenuItemSchema);
