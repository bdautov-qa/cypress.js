describe('HuntingPony', function () {
        it('Оформление заказа', function () {
        cy.visit('https://huntingpony.com/');
        cy.get('[data-index="5"] > .header__collections-controls > .header__collections-link').click();
        cy.get('[data-product-id="339746828"] > .product-preview__content > .product-preview__area-photo > .product-preview__photo > .img-ratio > .img-ratio__inner > a > :nth-child(1) > .product-preview__img-1').click();
        cy.wait(5000);
        cy.get('.add-cart-counter__btn').click();
        cy.wait(5000);
        cy.get('[data-add-cart-counter-plus=""]').click();
        cy.wait(5000);
        cy.get('.add-cart-counter__detail').click();
        cy.get('.cart-controls > .button').click();
        cy.contains('Оформление заказа');
    })
    })