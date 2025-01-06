 import Utilities from "../fixtures/utilities";
 
 class FormPage{
    constructor(){

    }

    formPageElements() {
        return {
            firstnameField : cy.get('input[name="first_name"]'),
            lastnameField : cy.get('input[name="last_name"]'),
            emailField : cy.get('input[name="email"]'),
            commentsField : cy.get('textarea[name="message"]'),
            resetButton : cy.get('input[type="reset"]'),
            submitButton : cy.get('input[type="submit"]'),
        }
    }

    fillFirstnameField() {
        const firstName = Utilities.getRandomInputData(10);
        this.formPageElements().firstnameField.type(firstName);
    }

    fillLastnameField() {
        const lastName = Utilities.getRandomInputData(10);
        this.formPageElements().lastnameField.type(lastName);
    }

    fillEmailField() {
        const email = Utilities.getRandomEmail();
        this.formPageElements().emailField.type(email);
    }

    fillCommentField() {
        const comment = Utilities.getRandomInputData(20);
        this.formPageElements().commentsField.type(comment);
    }

    fillFieldsCorrectly() {
        this.fillFirstnameField();
        this.fillLastnameField();
        this.fillEmailField();
        this.fillCommentField();
    }

    fillFieldsIncorrectly() {
        this.fillFirstnameField();
        this.fillLastnameField();
        this.formPageElements().emailField.type(Utilities.getRandomInputData(10))
        this.fillCommentField();
    }

    clickSubmitButton() {
        this.formPageElements().submitButton.click();
    }

    clickResetButton() {
        this.formPageElements().resetButton.click();
    }
}

export default new FormPage()