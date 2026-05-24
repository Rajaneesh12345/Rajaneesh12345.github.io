var BACKEND_URL = 'https://explainly-backend-dev.vercel.app';
var SUPABASE_URL = 'https://sxvezdyfbvlpeirzbjho.supabase.co';
var SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN4dmV6ZHlmYnZscGVpcnpiamhvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY2NDMwMTgsImV4cCI6MjA5MjIxOTAxOH0.eYtm5bXzUimtOX1xrfGXp87gn-TvFhwE7xIWkbT5It0';

var PAYMENT_LINKS = {
  razorpay: {
    pro: 'https://rzp.io/rzp/mDQnJTC',
    premium: 'https://rzp.io/rzp/Rcyk989u',
    premium_yearly: 'https://rzp.io/rzp/omwxwFtt',
  },
  paddle: {
    pro: 'https://sandbox-pay.paddle.io/hsc_01ksdkekp6wkqnrahth9ccd24w_6rqetqanzw9799xanen88gzymv8g2sf9',
    premium: 'https://sandbox-pay.paddle.io/hsc_01ksdkg398g9peqzwfpqmgcacd_gbj73mx4yrnq70qd2pr242f7dj4q2kht',
    premium_yearly: 'https://sandbox-pay.paddle.io/hsc_01ksdkhd62b121jga8ze1f57ty_y5sqnmrg36aqe7ar9jf5p8c8aa1j1zek',
    // TODO: swap sandbox-pay.paddle.io → pay.paddle.com for live
  },
};

var TIER_LIMITS = {
  free:    { daily: 10,  deep: 1,  why: 1 },
  pro:     { daily: 100, deep: 10, why: 10 },
  premium: { daily: 500, deep: 75, why: 75 },
};

var TIER_ORDER = { free: 0, pro: 1, premium: 2 };
