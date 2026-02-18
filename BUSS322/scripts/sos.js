// ── SOS Emergency Module ──
const SOS_NUMBER = '999';

function initSOS() {
    const sosBtn = document.getElementById('sos-btn');
    const overlay = document.getElementById('sos-modal');
    const cancelBtn = document.getElementById('sos-cancel');
    const callBtn = document.getElementById('sos-call');

    if (!sosBtn) return;

    sosBtn.addEventListener('click', () => overlay.classList.add('open'));
    cancelBtn.addEventListener('click', () => overlay.classList.remove('open'));
    callBtn.addEventListener('click', () => {
        overlay.classList.remove('open');
        window.location.href = `tel:${SOS_NUMBER}`;
    });
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) overlay.classList.remove('open');
    });
}
