// hooks/useGeolocation.js
'use client';

import { useState, useEffect } from 'react';

// Map countries to their preferred currencies
const COUNTRY_TO_CURRENCY = {
  IN: 'INR',  // India
  US: 'USD',  // United States
  GB: 'GBP',  // United Kingdom
  CA: 'CAD',  // Canada
  AU: 'AUD',  // Australia
  SG: 'SGD',  // Singapore
  AE: 'AED',  // United Arab Emirates
  EU: 'EUR',  // Europe (will be detected from specific EU countries)
  JP: 'JPY',  // Japan
  CN: 'CNY',  // China
  BR: 'BRL',  // Brazil
  MX: 'MXN',  // Mexico
  // EU Countries
  DE: 'EUR',  // Germany
  FR: 'EUR',  // France
  IT: 'EUR',  // Italy
  ES: 'EUR',  // Spain
  NL: 'EUR',  // Netherlands
  // Add more country-currency mappings as needed
};

export function useGeolocation() {
  const [location, setLocation] = useState({
    country: null,
    currency: 'USD', // Default currency
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    async function detectLocation() {
      try {
        // Try multiple geolocation APIs for better reliability
        
        // Option 1: ipapi.co (free, no API key required, 1000 requests/day)
        try {
          const response = await fetch('https://ipapi.co/json/', {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
            },
          });

          if (response.ok) {
            const data = await response.json();
            const countryCode = data.country_code;
            const detectedCurrency = COUNTRY_TO_CURRENCY[countryCode] || 'USD';

            setLocation({
              country: countryCode,
              currency: detectedCurrency,
              isLoading: false,
              error: null,
            });
            return;
          }
        } catch (err) {
          console.warn('ipapi.co failed, trying fallback...', err);
        }

        // Option 2: Fallback to ip-api.com (free, no API key, limit: 45 requests/minute)
        try {
          const response = await fetch('http://ip-api.com/json/', {
            method: 'GET',
          });

          if (response.ok) {
            const data = await response.json();
            const countryCode = data.countryCode;
            const detectedCurrency = COUNTRY_TO_CURRENCY[countryCode] || 'USD';

            setLocation({
              country: countryCode,
              currency: detectedCurrency,
              isLoading: false,
              error: null,
            });
            return;
          }
        } catch (err) {
          console.warn('ip-api.com failed, trying fallback...', err);
        }

        // Option 3: Cloudflare trace (works if you're behind Cloudflare)
        try {
          const response = await fetch('https://www.cloudflare.com/cdn-cgi/trace');
          
          if (response.ok) {
            const text = await response.text();
            const lines = text.split('\n');
            const locLine = lines.find(line => line.startsWith('loc='));
            
            if (locLine) {
              const countryCode = locLine.split('=')[1];
              const detectedCurrency = COUNTRY_TO_CURRENCY[countryCode] || 'USD';

              setLocation({
                country: countryCode,
                currency: detectedCurrency,
                isLoading: false,
                error: null,
              });
              return;
            }
          }
        } catch (err) {
          console.warn('Cloudflare trace failed', err);
        }

        // If all APIs fail, use default
        throw new Error('All geolocation APIs failed');

      } catch (error) {
        console.error('Geolocation detection failed:', error);
        setLocation({
          country: null,
          currency: 'USD', // Default to USD
          isLoading: false,
          error: error.message,
        });
      }
    }

    detectLocation();
  }, []);

  return location;
}