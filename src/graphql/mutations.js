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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createSiteManager = /* GraphQL */ `
  mutation CreateSiteManager(
    $input: CreateSiteManagerInput!
    $condition: ModelSiteManagerConditionInput
  ) {
    createSiteManager(input: $input, condition: $condition) {
      id
      name
      sites {
        id
        name
        description
        serviceRadius
        latitude
        longitude
        subs
        averageWait
        averageLine
        online
        estimatedDaily
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateSiteManager = /* GraphQL */ `
  mutation UpdateSiteManager(
    $input: UpdateSiteManagerInput!
    $condition: ModelSiteManagerConditionInput
  ) {
    updateSiteManager(input: $input, condition: $condition) {
      id
      name
      sites {
        id
        name
        description
        serviceRadius
        latitude
        longitude
        subs
        averageWait
        averageLine
        online
        estimatedDaily
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteSiteManager = /* GraphQL */ `
  mutation DeleteSiteManager(
    $input: DeleteSiteManagerInput!
    $condition: ModelSiteManagerConditionInput
  ) {
    deleteSiteManager(input: $input, condition: $condition) {
      id
      name
      sites {
        id
        name
        description
        serviceRadius
        latitude
        longitude
        subs
        averageWait
        averageLine
        online
        estimatedDaily
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      name
      description
      serviceRadius
      latitude
      longitude
      subs
      averageWait
      averageLine
      online
      estimatedDaily
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      name
      description
      serviceRadius
      latitude
      longitude
      subs
      averageWait
      averageLine
      online
      estimatedDaily
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      name
      description
      serviceRadius
      latitude
      longitude
      subs
      averageWait
      averageLine
      online
      estimatedDaily
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createManagerSiteLinker = /* GraphQL */ `
  mutation CreateManagerSiteLinker(
    $input: CreateManagerSiteLinkerInput!
    $condition: ModelManagerSiteLinkerConditionInput
  ) {
    createManagerSiteLinker(input: $input, condition: $condition) {
      id
      siteManagerID
      siteID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateManagerSiteLinker = /* GraphQL */ `
  mutation UpdateManagerSiteLinker(
    $input: UpdateManagerSiteLinkerInput!
    $condition: ModelManagerSiteLinkerConditionInput
  ) {
    updateManagerSiteLinker(input: $input, condition: $condition) {
      id
      siteManagerID
      siteID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteManagerSiteLinker = /* GraphQL */ `
  mutation DeleteManagerSiteLinker(
    $input: DeleteManagerSiteLinkerInput!
    $condition: ModelManagerSiteLinkerConditionInput
  ) {
    deleteManagerSiteLinker(input: $input, condition: $condition) {
      id
      siteManagerID
      siteID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      remainingJerryCans
      sub
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      remainingJerryCans
      sub
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      remainingJerryCans
      sub
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createSub = /* GraphQL */ `
  mutation CreateSub(
    $input: CreateSubInput!
    $condition: ModelSubConditionInput
  ) {
    createSub(input: $input, condition: $condition) {
      id
      name
      pricePerMonth
      weeklyJerryCans
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateSub = /* GraphQL */ `
  mutation UpdateSub(
    $input: UpdateSubInput!
    $condition: ModelSubConditionInput
  ) {
    updateSub(input: $input, condition: $condition) {
      id
      name
      pricePerMonth
      weeklyJerryCans
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteSub = /* GraphQL */ `
  mutation DeleteSub(
    $input: DeleteSubInput!
    $condition: ModelSubConditionInput
  ) {
    deleteSub(input: $input, condition: $condition) {
      id
      name
      pricePerMonth
      weeklyJerryCans
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      phrase
      data
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      phrase
      data
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      phrase
      data
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
