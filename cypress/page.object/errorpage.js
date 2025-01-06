class errorPage {
    
    errorElements() {
        return {
            element: cy.get('body'),
            emailMessage:'Error: Invalid email address',
            fieldsMessage:'Error: all fields are required',
        }
    };
}
export default new errorPage();