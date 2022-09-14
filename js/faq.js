const hide = (item, answer) => {
    if (!item.classList.contains('faq__item_show') || 
        item.collision) return

    answer.style.height = `${answer.offsetHeight}px`;
    answer.offsetHeight;
    answer.style.display = 'block';
    answer.style.height = 0;
    answer.style.overflow = 'hidden';
    answer.style.transition = 'height 0.3s ease-in-out';
    item.classList.remove('faq__item_show');
    item.collision = true;

    setTimeout(() => {
        answer.style.display = '';
        answer.style.height = '';
        answer.style.overflow = '';
        answer.style.transition = '';
        item.collision = false;
    }, 300);
};

const show = (item, answer) => {
    if (item.classList.contains('faq__item_show') || 
        item.collision) return

    answer.style.display = 'block';
    const height = answer.offsetHeight;
    answer.style.height = 0;
    answer.style.overflow = 'hidden';
    answer.style.transition = 'height 0.3s ease-in-out';
    answer.offsetHeight;
    answer.style.height = `${height}px`;
    item.collision = true;

    setTimeout(() => {
        item.classList.add('faq__item_show');
        answer.style.display = '';
        answer.style.height = '';
        answer.style.overflow = '';
        answer.style.transition = '';
        item.collision = false;
    }, 300);
};

export const accordion = () => {
    const list = document.querySelector('.faq__list');
    const faqItems = document.querySelectorAll('.faq__item');

    list.addEventListener('click', (e) => {
        const button = e.target.closest('.faq__question');

        if (button) {
            const item = button.closest('.faq__item');

            faqItems.forEach((faqItem, i) => {
                const answer = faqItem.querySelector('.faq__answer');
                if (item === faqItem) {
                    faqItem.classList.contains('faq__item_show') ? hide(faqItem, answer) : show(faqItem, answer);
                } else {
                    hide(faqItem, answer);
                };
            });
        };
    });
};
