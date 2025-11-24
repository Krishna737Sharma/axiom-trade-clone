// src/lib/mockData.ts

export interface Token {
  id: string;
  name: string;
  symbol: string;
  price: number;
  change24h: number; // Percentage change
  marketCap: number;
  volume: number;
  liquidity: number;
  image: string; // Placeholder color or image
  isNew: boolean;
}

const TOKEN_NAMES = [
  "DOGE", "PEPE", "SHIB", "WOJAK", "CHAD", 
  "ELON", "MOON", "ROCKET", "LAMBO", "APE"
];

// Helper to generate random number
const random = (min: number, max: number) => Math.random() * (max - min) + min;

// Generate initial mock data
export const generateMockTokens = (count: number = 20): Token[] => {
  return Array.from({ length: count }).map((_, i) => {
    const name = TOKEN_NAMES[i % TOKEN_NAMES.length] + (i > 9 ? ` ${i}` : "");
    const price = random(0.0000001, 100);
    
    return {
      id: `token-${i}`,
      name: name,
      symbol: name.split(" ")[0].toUpperCase(),
      price: price,
      change24h: random(-30, 100), // -30% to +100%
      marketCap: price * random(1000000, 1000000000),
      volume: random(10000, 5000000),
      liquidity: random(5000, 200000),
      image: `https://api.dicebear.com/7.x/identicon/svg?seed=${name}`, // Random Avatar
      isNew: i < 5, // First 5 are "New"
    };
  });
};

// Simulate price update
export const updateTokenPrices = (tokens: Token[]): Token[] => {
  return tokens.map((token) => {
    const volatility = 0.02; // 2% up or down
    const change = 1 + random(-volatility, volatility);
    const newPrice = token.price * change;
    
    return {
      ...token,
      price: newPrice,
      // FIX: Price ke saath Market Cap bhi update karo
      marketCap: newPrice * (token.marketCap / token.price), 
      // FIX: Percentage bhi thoda hilaao taaki colors change hon
      change24h: token.change24h + random(-0.5, 0.5), 
    };
  });
};