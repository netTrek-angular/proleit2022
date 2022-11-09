import {AppComponent} from "../src/app/app.component";
import {UserModule} from "../src/app/user/user.module";

describe('AppComponent.cy.ts', () => {
  it('has titel Binding', () => {
    cy.mount( AppComponent, {
      imports: [UserModule]
    } )
    cy.get('h1').contains( 'proleit2022')
  })
  it('implements user comp', () => {
    cy.mount( AppComponent, {
      imports: [UserModule]
    } )
    cy.get('p').contains( 'user works')
  })
})
