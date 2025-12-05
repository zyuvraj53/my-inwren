// // utils/featurePricing.js

// /**
//  * Calculate price for a plan based on contacts, currency, and billing cycle
//  */
// export function calculatePlanPrice(plan, selectedContacts, currency, billingCycle) {
//   let price = 0;

//   if (currency === 'INR') {
//     // Use specific INR price points
//     price = billingCycle === 'yearly' ? plan.basePriceINRYearly : plan.basePriceINR;

//     // Ultra Add-on Logic (INR)
//     if (plan.id === 'ultra' && selectedContacts > 10000) {
//       const extraContacts = selectedContacts - 10000;
//       const extraBlocks = Math.ceil(extraContacts / 10000);

//       // INR Add-on: 1700 (Monthly) or 1360 (Yearly discounted)
//       const addOnPrice = billingCycle === 'yearly' ? 1360 : 1700;
//       price += extraBlocks * addOnPrice;
//     }
//   } else {
//     // USD Logic
//     price = plan.basePrice;

//     if (plan.id === 'ultra' && selectedContacts > 10000) {
//       const extraContacts = selectedContacts - 10000;
//       const extraBlocks = Math.ceil(extraContacts / 10000);
//       price += extraBlocks * 20;
//     }

//     if (price !== null && billingCycle === 'yearly') {
//       price = price * 0.8;
//     }
//   }

//   return price;
// }

// /**
//  * Format currency value
//  */
// export function formatCurrency(value, currency) {
//   if (value === null) return null;
//   if (currency === 'INR') return Math.round(value).toLocaleString('en-IN');
//   return value.toFixed(2);
// }

// /**
//  * Get currency symbol
//  */
// export function getCurrencySymbol(currency) {
//   return currency === 'INR' ? '₹' : '$';
// }

// /**
//  * Check if plan is available for selected contacts
//  */
// export function isPlanAvailable(plan, selectedContacts) {
//   if (plan.id === 'ultra' || plan.id === 'enterprise') return true;
//   return selectedContacts <= plan.maxContacts;
// }

// utils/featurePricing.js

// Exchange rates (you can fetch these from an API for real-time rates)
const EXCHANGE_RATES = {
  USD: 1,
  INR: 83.50,
  GBP: 0.79,
  EUR: 0.92,
  CAD: 1.36,
  AUD: 1.52,
  SGD: 1.34,
  AED: 3.67,
  JPY: 149.50,
  CNY: 7.24,
  BRL: 4.97,
  MXN: 17.12,
};

// Currency symbols
const CURRENCY_SYMBOLS = {
  USD: '$',
  INR: '₹',
  GBP: '£',
  EUR: '€',
  CAD: 'C$',
  AUD: 'A$',
  SGD: 'S$',
  AED: 'د.إ',
  JPY: '¥',
  CNY: '¥',
  BRL: 'R$',
  MXN: 'MX$',
};

/**
 * Calculate the price for a plan based on contacts, currency, and billing cycle
 */
export function calculatePlanPrice(plan, selectedContacts, currency = 'USD', billingCycle = 'monthly') {
  // Check if plan is available for selected contacts
  if (!isPlanAvailable(plan, selectedContacts)) {
    return null;
  }

  // If contacts exceed max, return null (custom pricing)
  if (selectedContacts > plan.maxContacts) {
    return null;
  }

  // Handle Enterprise plan (custom pricing)
  if (plan.basePrice === null) {
    return null;
  }

  let price;

  // Calculate price based on currency and billing cycle
  if (currency === 'INR') {
    if (billingCycle === 'yearly' && plan.basePriceINRYearly) {
      price = plan.basePriceINRYearly;
    } else {
      price = plan.basePriceINR;
    }
  } else {
    // For all other currencies, convert from USD
    let usdPrice = plan.basePrice;
    
    // Apply yearly discount (20% off)
    if (billingCycle === 'yearly') {
      usdPrice = usdPrice * 0.8;
    }

    // Convert to target currency
    const rate = EXCHANGE_RATES[currency] || 1;
    price = usdPrice * rate;
  }

  // Apply contact-based pricing multipliers
  const multiplier = getContactMultiplier(selectedContacts, plan);
  price = price * multiplier;

  // Round appropriately
  if (currency === 'INR' || currency === 'JPY') {
    // No decimals for INR and JPY
    return Math.round(price);
  } else {
    // 2 decimals for other currencies
    return Math.round(price * 100) / 100;
  }
}

/**
 * Get pricing multiplier based on contact count
 */
function getContactMultiplier(selectedContacts, plan) {
  // Base contacts for each plan
  const baseContacts = {
    launch: 500,
    growth: 2500,
    ultra: 10000,
  };

  const planBase = baseContacts[plan.id] || 500;

  // If within base contacts, no multiplier
  if (selectedContacts <= planBase) {
    return 1;
  }

  // Calculate multiplier based on tiers
  if (selectedContacts <= 5000) {
    return 1.5;
  } else if (selectedContacts <= 10000) {
    return 2;
  } else if (selectedContacts <= 25000) {
    return 3;
  } else if (selectedContacts <= 50000) {
    return 4.5;
  } else if (selectedContacts <= 100000) {
    return 6;
  } else {
    return 8;
  }
}

/**
 * Format currency value for display
 */
export function formatCurrency(amount, currency = 'USD') {
  if (amount === null) {
    return null;
  }

  // Currencies without decimals
  const noDecimalCurrencies = ['INR', 'JPY', 'CNY'];
  const maxDecimals = noDecimalCurrencies.includes(currency) ? 0 : 2;
  const minDecimals = noDecimalCurrencies.includes(currency) ? 0 : 2;

  if (currency === 'INR') {
    // Indian numbering system (lakhs and crores)
    return amount.toLocaleString('en-IN', {
      maximumFractionDigits: maxDecimals,
      minimumFractionDigits: minDecimals,
    });
  } else {
    // International numbering system
    return amount.toLocaleString('en-US', {
      maximumFractionDigits: maxDecimals,
      minimumFractionDigits: minDecimals,
    });
  }
}

/**
 * Get currency symbol
 */
export function getCurrencySymbol(currency = 'USD') {
  return CURRENCY_SYMBOLS[currency] || '$';
}

/**
 * Check if a plan is available for the selected contact count
 */
export function isPlanAvailable(plan, selectedContacts) {
  // Enterprise is always available
  if (plan.id === 'enterprise') {
    return true;
  }

  // Check if contacts are within plan limits
  return selectedContacts <= plan.maxContacts;
}

/**
 * Get the appropriate plan recommendation based on contacts
 */
export function getRecommendedPlan(plans, selectedContacts) {
  // Find the most suitable plan
  const availablePlans = plans.filter((plan) => isPlanAvailable(plan, selectedContacts));
  
  if (availablePlans.length === 0) {
    return null;
  }

  // Return the highlighted plan (Growth) or fallback
  return availablePlans.find((plan) => plan.highlight) || availablePlans[1] || availablePlans[0];
}

/**
 * Fetch live exchange rates (optional - call this on page load)
 */
export async function fetchExchangeRates() {
  try {
    // Using a free API - exchangerate-api.com (free tier: 1,500 requests/month)
    const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
    
    if (!response.ok) {
      throw new Error('Failed to fetch exchange rates');
    }
    
    const data = await response.json();
    
    return {
      USD: 1,
      INR: data.rates.INR || EXCHANGE_RATES.INR,
      GBP: data.rates.GBP || EXCHANGE_RATES.GBP,
      EUR: data.rates.EUR || EXCHANGE_RATES.EUR,
      CAD: data.rates.CAD || EXCHANGE_RATES.CAD,
      AUD: data.rates.AUD || EXCHANGE_RATES.AUD,
      SGD: data.rates.SGD || EXCHANGE_RATES.SGD,
      AED: data.rates.AED || EXCHANGE_RATES.AED,
      JPY: data.rates.JPY || EXCHANGE_RATES.JPY,
      CNY: data.rates.CNY || EXCHANGE_RATES.CNY,
      BRL: data.rates.BRL || EXCHANGE_RATES.BRL,
      MXN: data.rates.MXN || EXCHANGE_RATES.MXN,
    };
  } catch (error) {
    console.error('Failed to fetch exchange rates:', error);
    // Return default rates if API fails
    return EXCHANGE_RATES;
  }
}

/**
 * Update exchange rates in memory (call this to refresh rates)
 */
export function updateExchangeRates(rates) {
  if (rates) {
    Object.keys(rates).forEach(currency => {
      if (EXCHANGE_RATES[currency] !== undefined) {
        EXCHANGE_RATES[currency] = rates[currency];
      }
    });
  }
}

/**
 * Get all supported currencies
 */
export function getSupportedCurrencies() {
  return Object.keys(CURRENCY_SYMBOLS);
}

/**
 * Get currency name for display
 */
export function getCurrencyName(currency) {
  const currencyNames = {
    USD: 'US Dollar',
    INR: 'Indian Rupee',
    GBP: 'British Pound',
    EUR: 'Euro',
    CAD: 'Canadian Dollar',
    AUD: 'Australian Dollar',
    SGD: 'Singapore Dollar',
    AED: 'UAE Dirham',
    JPY: 'Japanese Yen',
    CNY: 'Chinese Yuan',
    BRL: 'Brazilian Real',
    MXN: 'Mexican Peso',
  };
  
  return currencyNames[currency] || currency;
}