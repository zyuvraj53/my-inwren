// utils/pricing.js

/**
 * Calculate Inwren pricing dynamically
 * Base: $29.99 up to 10k contacts
 * After 10k: +$20 per 10k contacts
 */
export function calculateInwrenPrice(contacts) {
  const basePrice = 29.99;
  const threshold = 10000;
  
  if (contacts <= threshold) return basePrice;
  
  const extraContacts = contacts - threshold;
  const extraUnits = Math.ceil(extraContacts / 10000);
  return basePrice + (extraUnits * 20);
}

/**
 * Get max price from current tier data
 */
export function getMaxPrice(tierData) {
  return Math.max(...Object.values(tierData));
}

/**
 * Calculate percentage for bar chart
 */
export function calculatePricePercentage(price, maxPrice) {
  return (price / maxPrice) * 100;
}