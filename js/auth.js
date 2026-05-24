// Requires: supabase-js CDN, config.js loaded before this file

var _supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

var TOKEN_KEY   = 'explainly_token';
var REFRESH_KEY = 'explainly_refresh';
var EMAIL_KEY   = 'explainly_email';
var USAGE_KEY   = 'explainly_usage_cache';

function getToken()   { return localStorage.getItem(TOKEN_KEY); }
function getRefresh() { return localStorage.getItem(REFRESH_KEY); }
function getEmail()   { return localStorage.getItem(EMAIL_KEY); }

function setSession(access_token, refresh_token, email) {
  if (access_token)  localStorage.setItem(TOKEN_KEY, access_token);
  if (refresh_token) localStorage.setItem(REFRESH_KEY, refresh_token);
  if (email)         localStorage.setItem(EMAIL_KEY, email);
}

function clearAuth() {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(REFRESH_KEY);
  localStorage.removeItem(EMAIL_KEY);
  localStorage.removeItem(USAGE_KEY);
}

function requireAuth() {
  if (!getToken()) {
    window.location.href = '/app/login.html';
    return false;
  }
  return true;
}

function signInWithGoogle() {
  var next = new URLSearchParams(window.location.search).get('next');
  if (next) sessionStorage.setItem('explainly_login_next', next);
  return _supabase.auth.signInWithOAuth({
    provider: 'google',
    options: { redirectTo: window.location.origin + '/auth/callback.html' }
  });
}

function signOut() {
  clearAuth();
  _supabase.auth.signOut();
  window.location.href = '/app/login.html';
}

var _refreshPromise = null;

function refreshToken() {
  if (_refreshPromise) return _refreshPromise;

  var rt = getRefresh();
  if (!rt) {
    clearAuth();
    window.location.href = '/app/login.html';
    return Promise.reject(new Error('No refresh token'));
  }

  _refreshPromise = fetch(BACKEND_URL + '/api/auth/refresh', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ refresh_token: rt })
  })
  .then(function(r) {
    if (!r.ok) throw new Error('Refresh failed');
    return r.json();
  })
  .then(function(data) {
    setSession(data.access_token, data.refresh_token, null);
    return data.access_token;
  })
  .catch(function(err) {
    clearAuth();
    window.location.href = '/app/login.html';
    throw err;
  })
  .finally(function() {
    _refreshPromise = null;
  });

  return _refreshPromise;
}

function getAvatarInitial() {
  var email = getEmail();
  return email ? email[0].toUpperCase() : '?';
}
