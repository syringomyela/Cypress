class ThankyouPage {

    TYpageElements() {
        return {
            message : cy.get('h1'),
            text : 'Thank You for your Message!',
        }
    }
}

export default new ThankyouPage()
