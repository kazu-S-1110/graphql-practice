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

export type Location = {
  __typename?: 'Location';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  Location: Location;
};


export type QueryLocationArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type GetLocationQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLocationQuery = { __typename?: 'Query', Location: { __typename?: 'Location', id?: string | null, name?: string | null, description?: string | null, photo?: string | null } };
