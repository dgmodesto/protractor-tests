module.exports = provideConfig => {
  const defaultConfig = {
    baseUrl: 'https://lit-chamber-61567.herokuapp.com',
    specs: ['../specs/*.spec.js'],
    // pra utilziar o protractor em uma aplicação que não é angular informe a linha abaixo
    onPrepare: () => {
      browser.waitForAngularEnabled(false)
    },
    // os testes devem ser independentes, os testes não precisam ser executados nas mesma ordem
    jasmineNodeOpts: {
      random: true
    }
  }

  return Object.assign(
    {},
    defaultConfig,
    provideConfig
  )
}