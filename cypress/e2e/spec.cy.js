import formPage from "../page.object/formpage"
import tyPage from "../page.object/thankyoupage";
import errorPage from "../page.object/errorpage";

beforeEach(() => {
  cy.visit('/contactus.html');
})

describe('Positive tests', () => {
  it('Fill fields with correct data, submit and verify app responce', () => {
    formPage.fillFieldsCorrectly();
    formPage.clickSubmitButton();
    const successMsg = tyPage.TYpageElements();
    successMsg.message.should('contain', successMsg.text);
  })
})

describe('Negative tests', () => {
  it('Fill email field with incorrect data', () => {
    formPage.fillFieldsIncorrectly();
    formPage.clickSubmitButton();
    errorPage.errorElements().element.should('contain.text',errorPage.errorElements().emailMessage)
  })

  it('Left all fields empty and submit', () => {
    formPage.clickSubmitButton();
    errorPage.errorElements().element.
      should('contain.text',errorPage.errorElements().fieldsMessage).and('contain.text',errorPage.errorElements().emailMessage)
  })
})