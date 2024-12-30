'use client';
import { useEffect } from 'react';

// Utility function to get mouse position
const getMousePos = (e) => {
    const posx = e.pageX || (e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft);
    const posy = e.pageY || (e.clientY + document.body.scrollTop + document.documentElement.scrollTop);
    return { x: posx, y: posy };
};

// Animation class for hover effects
class HoverImgFx1 {
    constructor(el) {
        this.DOM = {
            el,
            reveal: document.createElement('div'),
            revealInner: document.createElement('div'),
            revealImg: document.createElement('div'),
        };

        this.DOM.reveal.className = 'tg-img-reveal-wrapper';
        this.DOM.reveal.style.opacity = '0'; // Initially hidden

        this.setupRevealContent();

        this.DOM.el.appendChild(this.DOM.reveal);
        this.initEvents();
    }

    setupRevealContent() {
        this.DOM.revealInner.className = 'tg-img-reveal-wrapper__inner';

        this.DOM.revealImg.className = 'tg-img-reveal-wrapper__img';
        this.DOM.revealImg.style.backgroundImage = `url(${this.DOM.el.dataset.img})`;

        this.DOM.revealInner.appendChild(this.DOM.revealImg);

        const metaContent = document.createElement('div');
        metaContent.className = 'tg-hover-wrapper';
        metaContent.innerHTML = `
            <ul class="tgbanner__content-meta list-wrap">
                <li><span class="by">By</span> <a href="#">${this.DOM.el.dataset.author || ''}</a></li>
                <li>${this.DOM.el.dataset.date || ''}</li>
            </ul>
            <h3 class="tg-hover-title">${this.DOM.el.dataset.title || ''}</h3>
        `;

        this.DOM.revealImg.appendChild(metaContent);
        this.DOM.reveal.appendChild(this.DOM.revealInner);
    }

    initEvents() {
        this.positionElement = (ev) => {
            const mousePos = getMousePos(ev);
            const docScrolls = {
                left: document.body.scrollLeft + document.documentElement.scrollLeft,
                top: document.body.scrollTop + document.documentElement.scrollTop,
            };
            this.DOM.reveal.style.top = `${mousePos.y + 20 - docScrolls.top}px`;
            this.DOM.reveal.style.left = `${mousePos.x + 20 - docScrolls.left}px`;
        };

        this.mouseenterFn = (ev) => {
            this.positionElement(ev);
            this.showImage();
        };

        this.mousemoveFn = (ev) => {
            requestAnimationFrame(() => {
                this.positionElement(ev);
            });
        };

        this.mouseleaveFn = () => {
            this.hideImage();
        };

        this.DOM.el.addEventListener('mouseenter', this.mouseenterFn);
        this.DOM.el.addEventListener('mousemove', this.mousemoveFn);
        this.DOM.el.addEventListener('mouseleave', this.mouseleaveFn);
    }

    showImage() {
        this.DOM.reveal.style.opacity = '1';
        this.DOM.revealInner.style.transform = 'translateX(0%)';
        this.DOM.revealImg.style.transform = 'translateX(0%)';
        this.DOM.reveal.style.pointerEvents = 'auto';
    }

    hideImage() {
        this.DOM.reveal.style.opacity = '0';
        this.DOM.revealInner.style.transform = 'translateX(100%)';
        this.DOM.revealImg.style.transform = 'translateX(-100%)';
        this.DOM.reveal.style.pointerEvents = 'none';
    }

    destroy() {
        this.DOM.el.removeEventListener('mouseenter', this.mouseenterFn);
        this.DOM.el.removeEventListener('mousemove', this.mousemoveFn);
        this.DOM.el.removeEventListener('mouseleave', this.mouseleaveFn);
    }
}

export default function ImageHoverEffect() {
    useEffect(() => {
        const elements = document.querySelectorAll('[data-fx="1"] > .tg-img-reveal-item, .tg-img-reveal-item[data-fx="1"]');
        const hoverEffects = Array.from(elements).map((el) => new HoverImgFx1(el));

        return () => {
            hoverEffects.forEach(effect => effect.destroy());
        };
    }, []);

    return null;
}