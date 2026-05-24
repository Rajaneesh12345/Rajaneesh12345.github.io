var BACKEND_URL = 'https://explainly-backend-dev.vercel.app';
var SUPABASE_URL = 'https://sxvezdyfbvlpeirzbjho.supabase.co';
var SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN4dmV6ZHlmYnZscGVpcnpiamhvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY2NDMwMTgsImV4cCI6MjA5MjIxOTAxOH0.eYtm5bXzUimtOX1xrfGXp87gn-TvFhwE7xIWkbT5It0';

var PAYMENT_LINKS = {
  razorpay: {
    pro: 'https://rzp.io/rzp/mDQnJTC',
    premium: 'https://rzp.io/rzp/Rcyk989u',
    premium_yearly: 'https://rzp.io/rzp/omwxwFtt',
  },
};

var PADDLE_CLIENT_TOKEN = 'test_fa8c01fd71d2b65852b736a5729';

var PADDLE_PRICE_IDS = {
  pro: 'pri_01kscavrtny8jsfcmqq0f2s4p9',
  premium: 'pri_01kscb2frsxy26dqgb0y9crpd7',
  premium_yearly: 'pri_01kscb3kvvw80k8pf3wdkc3kf0',
};

var TIER_LIMITS = {
  free:    { daily: 10,  deep: 1,  why: 1 },
  pro:     { daily: 100, deep: 10, why: 10 },
  premium: { daily: 500, deep: 75, why: 75 },
};

var TIER_ORDER = { free: 0, pro: 1, premium: 2 };
