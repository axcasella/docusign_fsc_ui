import jwt_decode from 'jwt-decode';
import { isPast } from 'date-fns';

export type JWTToken = {
  user: {
    id: string;
    email: string;
  };
  iat: number;
  exp: number;
};

const BASE_URL =
  'http://docusignfscserver-env.eba-y94bqrjy.us-east-2.elasticbeanstalk.com/api/auth/';
const MOCK_RESPONSE = {
  token:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWYxZjA1MTdmOGYyOGQ4Mjc2NWU1ODA5IiwiZW1haWwiOiJjYkBjYi5vcmcifSwiaWF0IjoxNTk2MDc4MDM0LCJleHAiOjM2MDAwMTU5NjA3ODAzNH0.EKAajI33nGu5MnnmG2E0WmsqYSRAs_2gxUEmheflJV0',
};

export const getToken = (): JWTToken => JSON.parse(localStorage.getItem('authToken') as string);
export const setToken = (token: JWTToken) =>
  localStorage.setItem('authToken', JSON.stringify(token));

export const authenticateUser = async (email: String, password: String) => {
  const { token } = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password: 'password',
    }),
  }).then((res) => res.json());

  // const { token } = MOCK_RESPONSE;
  const decodedToken = jwt_decode<JWTToken>(token);

  setToken(decodedToken);

  if (isTokenExpired()) {
    throw 'Token Expired';
  }
};

export const logoutUser = () => localStorage.removeItem('authToken');

export const isTokenExpired = (): boolean => {
  const token = getToken();
  if (!token) return true;

  return isPast(new Date(token.exp * 1000 ?? 1));
};

export const isTokenValid = () => !isTokenExpired();
