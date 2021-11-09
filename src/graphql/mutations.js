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
      name
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
      name
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
      name
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
      customer {
        id
        name
        createdAt
        updatedAt
      }
      site {
        id
        pricePerJerryCan
        description
        serviceRadius
        latitude
        longitude
        createdAt
        updatedAt
      }
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
      customer {
        id
        name
        createdAt
        updatedAt
      }
      site {
        id
        pricePerJerryCan
        description
        serviceRadius
        latitude
        longitude
        createdAt
        updatedAt
      }
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
      customer {
        id
        name
        createdAt
        updatedAt
      }
      site {
        id
        pricePerJerryCan
        description
        serviceRadius
        latitude
        longitude
        createdAt
        updatedAt
      }
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
      admin {
        id
        name
        createdAt
        updatedAt
      }
      site {
        id
        pricePerJerryCan
        description
        serviceRadius
        latitude
        longitude
        createdAt
        updatedAt
      }
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
      admin {
        id
        name
        createdAt
        updatedAt
      }
      site {
        id
        pricePerJerryCan
        description
        serviceRadius
        latitude
        longitude
        createdAt
        updatedAt
      }
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
      admin {
        id
        name
        createdAt
        updatedAt
      }
      site {
        id
        pricePerJerryCan
        description
        serviceRadius
        latitude
        longitude
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
