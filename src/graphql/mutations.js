/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSiteManager = /* GraphQL */ `
  mutation CreateSiteManager(
    $input: CreateSiteManagerInput!
    $condition: ModelSiteManagerConditionInput
  ) {
    createSiteManager(input: $input, condition: $condition) {
      id
      siteID
      site {
        id
        siteManagers {
          nextToken
        }
        name
        nickname
        description
        serviceRadius
        latitude
        longitude
        averageWait
        averageLine
        status
        estimatedDaily
        subscriptionFee
        expectedJerrycans
        createdAt
        updatedAt
      }
      phoneNumber
      createdAt
      updatedAt
      siteSiteManagersId
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
      siteID
      site {
        id
        siteManagers {
          nextToken
        }
        name
        nickname
        description
        serviceRadius
        latitude
        longitude
        averageWait
        averageLine
        status
        estimatedDaily
        subscriptionFee
        expectedJerrycans
        createdAt
        updatedAt
      }
      phoneNumber
      createdAt
      updatedAt
      siteSiteManagersId
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
      siteID
      site {
        id
        siteManagers {
          nextToken
        }
        name
        nickname
        description
        serviceRadius
        latitude
        longitude
        averageWait
        averageLine
        status
        estimatedDaily
        subscriptionFee
        expectedJerrycans
        createdAt
        updatedAt
      }
      phoneNumber
      createdAt
      updatedAt
      siteSiteManagersId
    }
  }
`;
export const createCustomer = /* GraphQL */ `
  mutation CreateCustomer(
    $input: CreateCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    createCustomer(input: $input, condition: $condition) {
      IDNumber
      siteID
      site {
        id
        siteManagers {
          nextToken
        }
        name
        nickname
        description
        serviceRadius
        latitude
        longitude
        averageWait
        averageLine
        status
        estimatedDaily
        subscriptionFee
        expectedJerrycans
        createdAt
        updatedAt
      }
      validSubscription
      pin
      phoneNumber
      firstName
      lastName
      language
      expiration
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
      IDNumber
      siteID
      site {
        id
        siteManagers {
          nextToken
        }
        name
        nickname
        description
        serviceRadius
        latitude
        longitude
        averageWait
        averageLine
        status
        estimatedDaily
        subscriptionFee
        expectedJerrycans
        createdAt
        updatedAt
      }
      validSubscription
      pin
      phoneNumber
      firstName
      lastName
      language
      expiration
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
      IDNumber
      siteID
      site {
        id
        siteManagers {
          nextToken
        }
        name
        nickname
        description
        serviceRadius
        latitude
        longitude
        averageWait
        averageLine
        status
        estimatedDaily
        subscriptionFee
        expectedJerrycans
        createdAt
        updatedAt
      }
      validSubscription
      pin
      phoneNumber
      firstName
      lastName
      language
      expiration
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
      siteManagers {
        items {
          id
          siteID
          phoneNumber
          createdAt
          updatedAt
          siteSiteManagersId
        }
        nextToken
      }
      name
      nickname
      description
      serviceRadius
      latitude
      longitude
      averageWait
      averageLine
      status
      estimatedDaily
      subscriptionFee
      expectedJerrycans
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
      siteManagers {
        items {
          id
          siteID
          phoneNumber
          createdAt
          updatedAt
          siteSiteManagersId
        }
        nextToken
      }
      name
      nickname
      description
      serviceRadius
      latitude
      longitude
      averageWait
      averageLine
      status
      estimatedDaily
      subscriptionFee
      expectedJerrycans
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
      siteManagers {
        items {
          id
          siteID
          phoneNumber
          createdAt
          updatedAt
          siteSiteManagersId
        }
        nextToken
      }
      name
      nickname
      description
      serviceRadius
      latitude
      longitude
      averageWait
      averageLine
      status
      estimatedDaily
      subscriptionFee
      expectedJerrycans
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
      language
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
      language
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
      language
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
      languageID
      language {
        id
        language
        createdAt
        updatedAt
      }
      data
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
      languageID
      language {
        id
        language
        createdAt
        updatedAt
      }
      data
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
      languageID
      language {
        id
        language
        createdAt
        updatedAt
      }
      data
      createdAt
      updatedAt
    }
  }
`;
export const createVisit = /* GraphQL */ `
  mutation CreateVisit(
    $input: CreateVisitInput!
    $condition: ModelVisitConditionInput
  ) {
    createVisit(input: $input, condition: $condition) {
      id
      customerID
      siteID
      timeStamp
      createdAt
      updatedAt
    }
  }
`;
export const updateVisit = /* GraphQL */ `
  mutation UpdateVisit(
    $input: UpdateVisitInput!
    $condition: ModelVisitConditionInput
  ) {
    updateVisit(input: $input, condition: $condition) {
      id
      customerID
      siteID
      timeStamp
      createdAt
      updatedAt
    }
  }
`;
export const deleteVisit = /* GraphQL */ `
  mutation DeleteVisit(
    $input: DeleteVisitInput!
    $condition: ModelVisitConditionInput
  ) {
    deleteVisit(input: $input, condition: $condition) {
      id
      customerID
      siteID
      timeStamp
      createdAt
      updatedAt
    }
  }
`;
