import {
  validateEmptyAndEmail, validateEmptyAndLength3
} from './validators'

describe('Validator Utils', () => {
  it('should give an error with empty payload', () => {
    expect(validateEmptyAndLength3()).toBe('*Este campo é obrigatório')
  })

  it('should give an error and less then 3 caracters payload', () =>  {
    expect(validateEmptyAndLength3('12')).toBe('*Este campo de precisa no mínimo 3 caracteres')
  })

  it('should return true when pass a correct params', () =>  {
    expect(validateEmptyAndLength3('1234')).toBe(true)
  })

  it('should give an error with empty payload', () =>  {
    expect(validateEmptyAndEmail()).toBe('*Este campo é obrigatório')
  })

  it('should give an error with a invalid email', () =>  {
    expect(validateEmptyAndEmail('test.br')).toBe('*Este campo precisa ser um e-mail')
  })

  it('should give an error with a invalid email', () =>  {
    expect(validateEmptyAndEmail('test@')).toBe('*Este campo precisa ser um e-mail')
  })

  it('should returns true when pass be a correct param', () =>  {
    expect(validateEmptyAndEmail('test@email.com')).toBe(true)
  })

})
