function slide(id, amount) {

    const slider = document.getElementById(id);

    slider.scrollBy({
        left: amount,
        behavior: "smooth"
    });

}

const modal = document.getElementById('cardModal');
const modalPanel = document.querySelector('.card-modal-panel');
const cards = document.querySelectorAll('.card');

if (modal && modalPanel) {
    cards.forEach((card) => {
        card.addEventListener('click', () => {
            const clonedCard = card.cloneNode(true);
            clonedCard.classList.add('modal-card');
            modalPanel.innerHTML = '';
            modalPanel.appendChild(clonedCard);

            const closeButton = document.createElement('button');
            closeButton.className = 'card-modal-close';
            closeButton.setAttribute('aria-label', 'Close card');
            closeButton.setAttribute('data-close', 'true');
            closeButton.textContent = '×';
            modalPanel.appendChild(closeButton);

            modal.classList.add('show');
            modal.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
        });
    });

    document.addEventListener('click', (event) => {
        const closeTarget = event.target.closest('[data-close="true"]');

        if (closeTarget || event.target === modal) {
            modal.classList.remove('show');
            modal.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
            modalPanel.innerHTML = '';
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            modal.classList.remove('show');
            modal.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
            modalPanel.innerHTML = '';
        }
    });
}