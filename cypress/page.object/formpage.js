 import { Utilities } from "../fixtures/utilities";
 
 class FormPage{
    constructor(){
        this.utilities = new Utilities;
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
        const firstName = this.utilities.getRandomInputData(10);
        this.formPageElements().firstnameField.type(firstName);
    }

    fillLastnameField() {
        const lastName = this.utilities.getRandomInputData(10);
        this.formPageElements().lastnameField.type(lastName);
    }

    fillEmailField() {
        const email = this.utilities.getRandomEmail();
        this.formPageElements().emailField.type(email);
    }

    fillCommentField() {
        const comment = this.utilities.getRandomInputData(20);
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
        ( () => {
            const email = this.utilities.getRandomInputData(10);
            this.formPageElements().emailField.type(email)
        })();
        this.fillCommentField();
    }

    clickSubmitButton() {
        this.formPageElements().submitButton.click();
    }

    clickResetButton() {
        this.formPageElements().resetButton.click();
    }
}

export {FormPage}