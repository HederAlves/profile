/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser: User;
  deleteUser: Scalars['Boolean'];
  updateUser: Scalars['Boolean'];
};


export type MutationCreateUserArgs = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  phone: Scalars['String'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['String'];
};


export type MutationUpdateUserArgs = {
  email: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  phone: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  user: Array<User>;
};

export type User = {
  __typename?: 'user';
  email: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  password: Scalars['String'];
  phone: Scalars['String'];
};

export type UserQueryVariables = Exact<{ [key: string]: never; }>;


export type UserQuery = { __typename?: 'Query', user: Array<{ __typename?: 'user', id: string, name: string, password: string, email: string, phone: string }> };


export const UserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"password"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}}]}}]}}]} as unknown as DocumentNode<UserQuery, UserQueryVariables>;