/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAdministrator = /* GraphQL */ `
  query GetAdministrator($id: ID!) {
    getAdministrator(id: $id) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const listAdministrators = /* GraphQL */ `
  query ListAdministrators(
    $filter: ModelAdministratorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAdministrators(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCustomer = /* GraphQL */ `
  query GetCustomer($id: ID!) {
    getCustomer(id: $id) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const listCustomers = /* GraphQL */ `
  query ListCustomers(
    $filter: ModelCustomerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCustomers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSite = /* GraphQL */ `
  query GetSite($id: ID!) {
    getSite(id: $id) {
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
export const listSites = /* GraphQL */ `
  query ListSites(
    $filter: ModelSiteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSites(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        pricePerJerryCan
        description
        serviceRadius
        latitude
        longitude
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCustomerSiteLinker = /* GraphQL */ `
  query GetCustomerSiteLinker($id: ID!) {
    getCustomerSiteLinker(id: $id) {
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
export const listCustomerSiteLinkers = /* GraphQL */ `
  query ListCustomerSiteLinkers(
    $filter: ModelCustomerSiteLinkerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCustomerSiteLinkers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        customerID
        siteID
        weeklyJerryCans
        remainingJerryCans
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAdminSiteLinker = /* GraphQL */ `
  query GetAdminSiteLinker($id: ID!) {
    getAdminSiteLinker(id: $id) {
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
export const listAdminSiteLinkers = /* GraphQL */ `
  query ListAdminSiteLinkers(
    $filter: ModelAdminSiteLinkerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAdminSiteLinkers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        adminID
        siteID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
