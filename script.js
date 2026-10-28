const analyze = document.querySelector('#analyzeBtn');
const input = document.querySelector('#repoUrl');
const progress = document.querySelector('#scanProgress');
const message = document.querySelector('#scanMessage');
const map = document.querySelector('.module-map');

analyze.addEventListener('click', () => {
  const repo = input.value.trim().replace(/^https:\/\//, '').replace(/\/$/, '') || 'github.com/vercel/next.js';
  analyze.disabled = true;
  analyze.innerHTML = 'Scanning <span>◌</span>';
  progress.style.display = 'block';
  message.textContent = \`Building an intelligence snapshot for \${repo}…\`;
  setTimeout(() => {
    document.querySelector('.section-title h2').innerHTML = \`\${repo.split('/').pop()} <span>●</span>\`;
    document.querySelector('.muted').textContent = \`\${repo.replace('github.com/', '')} · intelligence snapshot ready\`;
    analyze.disabled = false;
    analyze.innerHTML = 'Analyze repository <span>→</span>';
    progress.style.display = 'none';
    message.textContent = 'Snapshot refreshed. Explore module gravity, risks, and high-churn boundaries below.';
  }, 1350);
});

document.querySelector('#focusMap').addEventListener('click', () => {
  map.classList.toggle('focused');
  document.querySelector('#focusMap').textContent = map.classList.contains('focused') ? 'Show all →' : 'Focus core →';
});

document.querySelector('#askBtn').addEventListener('click', (event) => {
  const ask = event.currentTarget.previousElementSibling;
  if (!ask.value.trim()) { ask.placeholder = 'Try: Where are the risky dependencies?'; ask.focus(); return; }
  ask.value = '';
  ask.placeholder = 'Answer queued in the intelligence engine…';
});

document.querySelector('#themeToggle').addEventListener('click', () => document.body.classList.toggle('high-contrast'));