// ── Auth Module ──
const PARENT_CREDS  = { email: 'parent@pod.com',  password: 'parent123', name: 'Sarah', child: 'Alex', age: 7 };
const TEACHER_CREDS = { email: 'teacher@pod.com', password: 'teacher123', name: 'Ms. Johnson', class: 'Sunshine Class' };

function loginParent(email, password) {
  if (email === PARENT_CREDS.email && password === PARENT_CREDS.password) {
    localStorage.setItem('pod_user', JSON.stringify({ role: 'parent', ...PARENT_CREDS }));
    return true;
  }
  return false;
}

function loginTeacher(email, password) {
  if (email === TEACHER_CREDS.email && password === TEACHER_CREDS.password) {
    localStorage.setItem('pod_user', JSON.stringify({ role: 'teacher', ...TEACHER_CREDS }));
    return true;
  }
  return false;
}

function getUser() {
  const u = localStorage.getItem('pod_user');
  return u ? JSON.parse(u) : null;
}

function logout() {
  localStorage.removeItem('pod_user');
  window.location.href = 'index.html';
}

function requireAuth(role) {
  const user = getUser();
  if (!user) { window.location.href = role === 'teacher' ? 'teacher-login.html' : 'parent-login.html'; return null; }
  if (user.role !== role) { window.location.href = role === 'teacher' ? 'teacher-login.html' : 'parent-login.html'; return null; }
  return user;
}
