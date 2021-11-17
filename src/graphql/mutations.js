/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAdministrator = /* GraphQL */ `
  mutation CreateAdministrator(
    $input: CreateAdministratorInput!
    $condition: ModelAdministratorConditionInput
  ) {
    createAdministrator(input: $input, condition: $condition) {
      id
      name
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateAdministrator = /* GraphQL */ `
  mutation UpdateAdministrator(
    $input: UpdateAdministratorInput!
    $condition: ModelAdministratorConditionInput
  ) {
    updateAdministrator(input: $input, condition: $condition) {
      id
      name
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteAdministrator = /* GraphQL */ `
  mutation DeleteAdministrator(
    $input: DeleteAdministratorInput!
    $condition: ModelAdministratorConditionInput
  ) {
    deleteAdministrator(input: $input, condition: $condition) {
      id
      name
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createCustomer = /* GraphQL */ `
  mutation CreateCustomer(
    $input: CreateCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    createCustomer(input: $input, condition: $condition) {
      id
      pin
      phoneNumber
      name
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateCustomer = /* GraphQL */ `
  mutation UpdateCustomer(
    $input: UpdateCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    updateCustomer(input: $input, condition: $condition) {
      id
      pin
      phoneNumber
      name
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteCustomer = /* GraphQL */ `
  mutation DeleteCustomer(
    $input: DeleteCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    deleteCustomer(input: $input, condition: $condition) {
      id
      pin
      phoneNumber
      name
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createSite = /* GraphQL */ `
  mutation CreateSite(
    $input: CreateSiteInput!
    $condition: ModelSiteConditionInput
  ) {
    createSite(input: $input, condition: $condition) {
      id
      pricePerJerryCan
      description
      serviceRadius
      latitude
      longitude
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateSite = /* GraphQL */ `
  mutation UpdateSite(
    $input: UpdateSiteInput!
    $condition: ModelSiteConditionInput
  ) {
    updateSite(input: $input, condition: $condition) {
      id
      pricePerJerryCan
      description
      serviceRadius
      latitude
      longitude
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteSite = /* GraphQL */ `
  mutation DeleteSite(
    $input: DeleteSiteInput!
    $condition: ModelSiteConditionInput
  ) {
    deleteSite(input: $input, condition: $condition) {
      id
      pricePerJerryCan
      description
      serviceRadius
      latitude
      longitude
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createCustomerSiteLinker = /* GraphQL */ `
  mutation CreateCustomerSiteLinker(
    $input: CreateCustomerSiteLinkerInput!
    $condition: ModelCustomerSiteLinkerConditionInput
  ) {
    createCustomerSiteLinker(input: $input, condition: $condition) {
      id
      customerID
      siteID
      weeklyJerryCans
      remainingJerryCans
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateCustomerSiteLinker = /* GraphQL */ `
  mutation UpdateCustomerSiteLinker(
    $input: UpdateCustomerSiteLinkerInput!
    $condition: ModelCustomerSiteLinkerConditionInput
  ) {
    updateCustomerSiteLinker(input: $input, condition: $condition) {
      id
      customerID
      siteID
      weeklyJerryCans
      remainingJerryCans
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteCustomerSiteLinker = /* GraphQL */ `
  mutation DeleteCustomerSiteLinker(
    $input: DeleteCustomerSiteLinkerInput!
    $condition: ModelCustomerSiteLinkerConditionInput
  ) {
    deleteCustomerSiteLinker(input: $input, condition: $condition) {
      id
      customerID
      siteID
      weeklyJerryCans
      remainingJerryCans
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createAdminSiteLinker = /* GraphQL */ `
  mutation CreateAdminSiteLinker(
    $input: CreateAdminSiteLinkerInput!
    $condition: ModelAdminSiteLinkerConditionInput
  ) {
    createAdminSiteLinker(input: $input, condition: $condition) {
      id
      adminID
      siteID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateAdminSiteLinker = /* GraphQL */ `
  mutation UpdateAdminSiteLinker(
    $input: UpdateAdminSiteLinkerInput!
    $condition: ModelAdminSiteLinkerConditionInput
  ) {
    updateAdminSiteLinker(input: $input, condition: $condition) {
      id
      adminID
      siteID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteAdminSiteLinker = /* GraphQL */ `
  mutation DeleteAdminSiteLinker(
    $input: DeleteAdminSiteLinkerInput!
    $condition: ModelAdminSiteLinkerConditionInput
  ) {
    deleteAdminSiteLinker(input: $input, condition: $condition) {
      id
      adminID
      siteID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createLanguage = /* GraphQL */ `
  mutation CreateLanguage(
    $input: CreateLanguageInput!
    $condition: ModelLanguageConditionInput
  ) {
    createLanguage(input: $input, condition: $condition) {
      id
      code
      language
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateLanguage = /* GraphQL */ `
  mutation UpdateLanguage(
    $input: UpdateLanguageInput!
    $condition: ModelLanguageConditionInput
  ) {
    updateLanguage(input: $input, condition: $condition) {
      id
      code
      language
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteLanguage = /* GraphQL */ `
  mutation DeleteLanguage(
    $input: DeleteLanguageInput!
    $condition: ModelLanguageConditionInput
  ) {
    deleteLanguage(input: $input, condition: $condition) {
      id
      code
      language
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createPhrase = /* GraphQL */ `
  mutation CreatePhrase(
    $input: CreatePhraseInput!
    $condition: ModelPhraseConditionInput
  ) {
    createPhrase(input: $input, condition: $condition) {
      id
      code
      data
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updatePhrase = /* GraphQL */ `
  mutation UpdatePhrase(
    $input: UpdatePhraseInput!
    $condition: ModelPhraseConditionInput
  ) {
    updatePhrase(input: $input, condition: $condition) {
      id
      code
      data
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deletePhrase = /* GraphQL */ `
  mutation DeletePhrase(
    $input: DeletePhraseInput!
    $condition: ModelPhraseConditionInput
  ) {
    deletePhrase(input: $input, condition: $condition) {
      id
      code
      data
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
