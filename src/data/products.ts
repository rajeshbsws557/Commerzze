import { Product } from '@/types';

const categories = [
  'Electronics',
  'Clothing',
  'Home & Garden',
  'Sports & Outdoors',
  'Beauty & Personal Care',
  'Books & Media',
  'Toys & Games',
  'Food & Grocery',
  'Health & Wellness',
  'Automotive',
  'Pet Supplies',
  'Office & Stationery',
];

const sellers = [
  'Official Store',
  'Premium Seller',
  'Trusted Vendor',
  'Direct Supplier',
  'Authorized Retailer',
  'Quality Plus',
  'Express Delivery',
  'Best Price Market',
];

// Curated list of high-quality, reliable Unsplash images
const productImages: Record<string, string[]> = {
  'Electronics': [
    'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&h=500&fit=crop', // Smart Watch
    'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop', // Headphones
    'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500&h=500&fit=crop', // Laptop
    'https://images.unsplash.com/photo-1526738549149-8e07eca6c147?w=500&h=500&fit=crop', // Electronic parts
    'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&h=500&fit=crop', // Workspace
    'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&h=500&fit=crop', // Computer
    'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=500&h=500&fit=crop', // Monitor
    'https://images.unsplash.com/photo-1615655406736-b37c4fabf923?w=500&h=500&fit=crop', // Phone
    'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500&h=500&fit=crop', // Alarm Clock
    'https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=500&h=500&fit=crop', // Electronics
  ],
  'Clothing': [
    'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=500&h=500&fit=crop', // Shirt
    'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&h=500&fit=crop', // Shirt
    'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&h=500&fit=crop', // Clothes
    'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=500&h=500&fit=crop', // Shirt
    'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=500&h=500&fit=crop', // Jacket (working replacement)
    'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=500&h=500&fit=crop', // Jacket (working replacement)
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop', // Shoes
    'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=500&h=500&fit=crop', // Shirt
    'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=500&h=500&fit=crop', // Shirt (working replacement)
  ],
  'Home & Garden': [
    'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=500&h=500&fit=crop', // Living Room
    'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=500&h=500&fit=crop', // Decor
    'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=500&h=500&fit=crop', // Plant (working replacement)
    'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=500&h=500&fit=crop', // Kitchen (working replacement)
    'https://images.unsplash.com/photo-1501183638710-841dd1904471?w=500&h=500&fit=crop', // Garden
    'https://images.unsplash.com/photo-1463320726281-696a485928c7?w=500&h=500&fit=crop', // Furniture
    'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=500&h=500&fit=crop', // Chair
    'https://images.unsplash.com/photo-1505693314120-0d443867891c?w=500&h=500&fit=crop', // Bed
  ],
  'Sports & Outdoors': [
    'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=500&h=500&fit=crop', // Sports
    'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=500&h=500&fit=crop', // Yoga
    'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=500&h=500&fit=crop', // Running (working replacement)
    'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&h=500&fit=crop', // Gym
    'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=500&h=500&fit=crop', // Dumbbells
    'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=500&h=500&fit=crop', // Running
  ],
  'Beauty & Personal Care': [
    'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=500&h=500&fit=crop', // Makeup (working replacement)
    'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=500&h=500&fit=crop', // Skincare (working replacement)
    'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=500&h=500&fit=crop', // Bottles (working replacement)
    'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500&h=500&fit=crop', // Serum
    'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=500&h=500&fit=crop', // Makeup
  ],
  'Books & Media': [
    'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&h=500&fit=crop', // Book
    'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=500&h=500&fit=crop', // Books
    'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500&h=500&fit=crop', // Book cover
    'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&h=500&fit=crop', // Books (working replacement)
  ],
  'Toys & Games': [
    'https://images.unsplash.com/photo-1599623560574-39d485900c95?w=500&h=500&fit=crop', // Toy (working replacement)
    'https://images.unsplash.com/photo-1599623560574-39d485900c95?w=500&h=500&fit=crop', // Teddy (working replacement)
    'https://images.unsplash.com/photo-1558877385-81a1c7e67d9d?w=500&h=500&fit=crop', // Toys
    'https://images.unsplash.com/photo-1599623560574-39d485900c95?w=500&h=500&fit=crop', // Cars
  ],
  'Food & Grocery': [
    'https://images.unsplash.com/photo-1506617420156-8e4536971650?w=500&h=500&fit=crop', // Grocery
    'https://images.unsplash.com/photo-1542838132-92c53300491e?w=500&h=500&fit=crop', // Market
    'https://images.unsplash.com/photo-1506617420156-8e4536971650?w=500&h=500&fit=crop', // Fruit (working replacement)
    'https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=500&h=500&fit=crop', // Grocery store
  ],
  'Health & Wellness': [
    'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&h=500&fit=crop', // Supplement
    'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&h=500&fit=crop', // Pills
    'https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=500&h=500&fit=crop', // Yoga
    'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&h=500&fit=crop', // Wellness (working replacement)
  ],
  'Automotive': [
    'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=500&h=500&fit=crop', // Car
    'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=500&h=500&fit=crop', // Car parts (working replacement)
    'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=500&h=500&fit=crop', // Car interior (working replacement)
    'https://images.unsplash.com/photo-1511994714008-b6d68a8b32a2?w=500&h=500&fit=crop', // Workshop
  ],
  'Pet Supplies': [
    'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=500&h=500&fit=crop', // Dog
    'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=500&h=500&fit=crop', // Dog (working replacement)
    'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=500&h=500&fit=crop', // Food (working replacement)
  ],
  'Office & Stationery': [
    'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=500&h=500&fit=crop', // Stationery (working replacement)
    'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=500&h=500&fit=crop', // Coffee shop/work
    'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=500&h=500&fit=crop', // Pen
    'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=500&h=500&fit=crop', // Office
  ],
};

const productNames: Record<string, string[]> = {
  'Electronics': [
    'Wireless Bluetooth Earbuds', 'Smart Watch Pro', 'USB-C Charging Cable', 'Portable Power Bank 20000mAh',
    'Wireless Mouse', 'Mechanical Keyboard RGB', 'Phone Stand Adjustable', 'Screen Protector Tempered Glass',
    'Laptop Stand Aluminum', 'USB Hub 7 Port', 'HDMI Cable 2m', 'Lightning Cable Premium',
    'Tablet Screen Protector', 'Phone Case Protective', 'Camera Lens Protector', 'Memory Card 128GB',
    'SSD External 1TB', 'Webcam HD 1080p', 'Microphone Condenser', 'Headphone Stand',
    'Cable Organizer Set', 'Phone Mount Car', 'Desk Lamp LED', 'Portable Speaker',
    'Digital Scale', 'Smart Bulb WiFi', 'Power Strip Surge', 'Phone Cooler Fan',
    'Screen Cleaner Kit', 'Keyboard Protector', 'Mouse Pad Gaming', 'USB Adapter',
    'Adapter Type-C', 'Docking Station', 'Cable Tester', 'Battery Charger',
    'Power Adapter Fast', 'Phone Clip Holder', 'Desk Mat', 'Monitor Stand',
    'Cooling Pad Laptop', 'Phone Ring Stand', 'Cable Storage Box', 'Brush Cleaning',
    'Thermal Paste', 'Console Controller', 'Gaming Headset', 'LED Strip',
    'Smart Plug WiFi', 'Digital Thermometer', 'Wireless Charger', 'Phone Strap',
  ],
  // ... other categories can reuse similar logic, filtering down if needed
  'Clothing': [
    'Cotton T-Shirt Classic', 'Denim Jeans Blue', 'Casual Shirt', 'Polo Shirt Premium',
    'Sports T-Shirt', 'Long Sleeve Top', 'Tank Top', 'Hoodie Comfortable',
    'Jacket Windproof', 'Blazer Formal', 'Shorts Casual', 'Chino Pants',
    'Sweatpants', 'Cargo Pants', 'Leather Belt', 'Scarf Wool',
    'Winter Coat', 'Rain Jacket', 'Vest Sleeveless', 'Sweater Knit',
    'Cardigan Cozy', 'Dress Casual', 'Dress Formal', 'Dress Evening',
  ],
  'Home & Garden': [
    'Bedsheet Set Cotton', 'Pillow Foam Comfort', 'Blanket Warm', 'Duvet Cover',
    'Mattress Protector', 'Pillow Case Silk', 'Towel Bath', 'Towel Hand',
    'Curtain Blackout', 'Cushion Decorative', 'Rug Soft', 'Door Mat',
    'Lamp Desk', 'Lamp Floor', 'Light Chandelier', 'Picture Frame',
  ],
  'Sports & Outdoors': [
    'Running Shoes', 'Sports Sneakers', 'Football Boots', 'Basketball Shoes',
    'Tennis Racket', 'Badminton Racket', 'Cricket Bat', 'Baseball Bat',
    'Soccer Ball', 'Basketball', 'Volleyball', 'Badminton Shuttlecock',
  ],
  'Beauty & Personal Care': [
    'Face Wash Gel', 'Face Moisturizer', 'Face Serum', 'Face Mask',
    'Face Cream Night', 'Eye Cream', 'Lip Balm', 'Lip Gloss',
    'Foundation', 'Concealer', 'Powder Compact', 'Blush',
  ],
  'Books & Media': [
    'Novel Fiction', 'Mystery Thriller', 'Romance Novel', 'Science Fiction',
    'Fantasy Adventure', 'Horror Story', 'Biography', 'Memoir',
    'Self Help Book', 'Business Book', 'History Book', 'Philosophy Book',
  ],
  'Toys & Games': [
    'Action Figure', 'Doll Collectible', 'Plush Toy', 'Stuffed Animal',
    'Building Blocks', 'LEGO Set', 'Puzzle 1000 Pieces', 'Board Game',
    'Card Game', 'Chess Set', 'Checkers', 'Dominoes',
  ],
  'Food & Grocery': [
    'Rice Basmati 5kg', 'Flour Wheat 2kg', 'Sugar Granulated 1kg', 'Salt Iodized 1kg',
    'Oil Cooking 1L', 'Ghee Clarified 1kg', 'Butter 200g', 'Milk Powder 400g',
    'Yogurt Greek', 'Cheese Cheddar', 'Chocolate Bar', 'Coffee Beans 500g',
  ],
  'Health & Wellness': [
    'Multivitamin Tablet', 'Vitamin C 500mg', 'Vitamin D 1000IU', 'Iron Supplement',
    'Calcium Tablet', 'Protein Powder', 'Whey Protein 1kg', 'Omega-3 Fish Oil',
    'Probiotic Capsule', 'Digestive Enzyme', 'Blood Pressure Monitor', 'Glucose Meter',
  ],
  'Automotive': [
    'Car Seat Cover', 'Steering Wheel Cover', 'Floor Mat Set', 'Dashboard Mat',
    'Air Freshener', 'Car Perfume', 'Steering Wheel Lock', 'Bike Lock',
    'Car Charger USB', 'Phone Mount Car', 'Cup Holder Car', 'Organizer Backseat',
  ],
  'Pet Supplies': [
    'Dog Food Dry 1kg', 'Cat Food Dry 1kg', 'Dog Food Wet Can', 'Cat Food Wet Can',
    'Dog Treat', 'Cat Treat', 'Dog Collar', 'Cat Collar',
    'Dog Leash', 'Dog Harness', 'Cat Harness', 'Dog Bed',
  ],
  'Office & Stationery': [
    'Notebook A4 100 Pages', 'Notebook B5 200 Pages', 'Notepad Sticky', 'Diary',
    'Planner Weekly', 'Calendar Desk', 'Pen Ballpoint Blue', 'Pen Ballpoint Black',
    'Pen Gel Red', 'Highlighter Yellow', 'Marker Permanent', 'Pencil HB',
  ],
};

// Seeded Random Number Generator (Linear Congruential Generator)
class SeededRNG {
  private seed: number;

  constructor(seed: number) {
    this.seed = seed;
  }

  // Returns a pseudo-random number between 0 and 1
  next(): number {
    this.seed = (this.seed * 9301 + 49297) % 233280;
    return this.seed / 233280;
  }

  // Returns a pseudo-random integer between min and max (inclusive)
  range(min: number, max: number): number {
    return Math.floor(this.next() * (max - min + 1)) + min;
  }

  // Returns a random element from an array
  pick<T>(array: T[]): T {
    return array[Math.floor(this.next() * array.length)];
  }
}

// Generate a deterministic numeric seed from a string
function stringToSeed(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash);
}

// Generate a readable, deterministic slug ID
function generateSlugId(name: string): string {
  return 'prod_' + name.toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

// Generate products deterministically
export const PRODUCTS: Product[] = [];

for (const category of categories) {
  const categoryProducts = productNames[category] || [];
  const categoryImages = productImages[category] || [];

  if (categoryImages.length === 0) continue;

  for (let index = 0; index < categoryProducts.length; index++) {
    const productName = categoryProducts[index];

    // Create a seeded RNG specific to this product
    // ensure price/rating/stock are tied solely to the product name
    const rng = new SeededRNG(stringToSeed(productName));

    const imageUrl = categoryImages[index % categoryImages.length];

    const basePrice = rng.range(500, 50000);
    const discount = rng.range(0, 60);
    const discountedPrice = Math.floor(basePrice * (1 - discount / 100));

    // Use deterministic ID based on the name
    const productId = generateSlugId(productName);

    PRODUCTS.push({
      id: productId,
      title: productName,
      image: imageUrl,
      price: discountedPrice,
      originalPrice: basePrice,
      discount: discount,
      rating: rng.range(35, 50) / 10,
      reviews: rng.range(10, 5000),
      category: category,
      seller: rng.pick(sellers),
      stock: rng.range(0, 100),
      description: `Description for ${productName}. This is a high quality product in the ${category} category provided by ${rng.pick(sellers)}. Features durable materials and excellent performance.`,
    });
  }
}

export function getCategories(): string[] {
  return categories;
}

export function getProductsByCategory(category: string): Product[] {
  return PRODUCTS.filter((p) => p.category === category);
}

export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id);
}

export function searchProducts(query: string): Product[] {
  const lowerQuery = query.toLowerCase();
  return PRODUCTS.filter((p) =>
    p.title.toLowerCase().includes(lowerQuery) ||
    p.category.toLowerCase().includes(lowerQuery)
  );
}
