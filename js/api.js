// Requires: config.js, auth.js loaded before this file

function apiFetch(path, options) {
  var opts = options || {};
  var headers = Object.assign(
    { 'Authorization': 'Bearer ' + getToken() },
    opts.headers || {}
  );

  return fetch(BACKEND_URL + path, Object.assign({}, opts, { headers: headers }))
    .then(function(r) {
      if (r.status === 401) {
        return refreshToken().then(function(newToken) {
          headers['Authorization'] = 'Bearer ' + newToken;
          return fetch(BACKEND_URL + path, Object.assign({}, opts, { headers: headers }));
        });
      }
      return r;
    })
    .then(function(r) {
      if (r.status === 204) return null;
      if (!r.ok) throw new Error('API ' + r.status);
      return r.json();
    });
}

function fetchUsage() {
  return apiFetch('/api/usage');
}

function fetchSaves(offset, limit) {
  return apiFetch('/api/saves?offset=' + (offset || 0) + '&limit=' + (limit || 30))
    .then(function(data) { return data && data.saves ? data.saves : (Array.isArray(data) ? data : []); });
}

function deleteSave(id) {
  return apiFetch('/api/saves?id=' + encodeURIComponent(id), { method: 'DELETE' });
}
