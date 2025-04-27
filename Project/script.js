document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Login Successful! (Simulation)');
    window.location.href = "user-dashboard.html"; // (Create later if you want)
});

document.getElementById('adminLoginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    // Redirect after admin login
    window.location.href = "admin-dashboard.html";
});
