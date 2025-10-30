function ViewModel (value, error) {
  // Constructor function to create logic dependent nunjucks page
  this.model = {
    labelText: 'Enter your delinked payment reference amount',
    labelClasses: 'govuk-!-display-none',
    hint: {
      text: 'Do not include commas in the amount you enter. For example, enter £20,000 as 20000.'
    },
    prefix: {
      text: '£'
    },
    spellcheck: false,
    classes: 'govuk-input--width-10',
    id: 'value',
    name: 'value',
    autocomplete: 'off',
    value
  }

  // If error is passed to model then this error property is added to the model
  if (error) {
    this.model.errorMessage = {
      text: error.message
    }
  }
}

module.exports = ViewModel
