import { FormPage } from "../page.object/formpage"
import { ThankyouPage } from "../page.object/thankyoupage";
import { errorElements } from "../page.object/errorpage";
import { beforeEach } from "mocha";

beforeEach(() => {
  cy.visit('/contactus.html');
})

describe('Positive tests', () => {
  it('Fill fields with correct data, submit and verify app responce', () => {
    const formPage = new FormPage;
    const tyPage = new ThankyouPage;
    formPage.fillFieldsCorrectly();
    formPage.clickSubmitButton();
    const successMsg = tyPage.TYpageElements();
    successMsg.message.should('contain', successMsg.text);
  })
})

describe('Negative tests', () => {
  it('Fill email field with incorrect data', () => {
    const formPage = new FormPage;
    formPage.fillFieldsIncorrectly();
    formPage.clickSubmitButton();
    cy.get(errorElements.element).should('contain.text',errorElements.emailMessage)
  })

  it('Left all fields empty and submit', () => {
    const formPage = new FormPage;
    formPage.clickSubmitButton();
    cy.get(errorElements.element).should('contain.text',errorElements.fieldsMessage).and('contain.text',errorElements.emailMessage)
  })
})