import { API_URI } from '../settings';

console.log('API_URI');
console.log(API_URI);

export default {
  async login(user) {
    const response = await fetch(`${API_URI}/auth/login`, {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    // console.log(response);
    if (response.status === 200) return await response.json();
    throw await response.json();
  },
  async register(user) {
    const response = await fetch(`${API_URI}/auth/register`, {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    // console.log(response);
    if (response.status === 200) return await response.json();
    throw await response.json();
  },
  async getUser(id) {
    const response = await fetch(`${API_URI}/users/${id}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      },
    });
    // console.log(response);
    if (response.status === 200) return await response.json();
    throw await response.json();
  },
  async onBoarding() {
    const response = await fetch(`${API_URI}/onboarding`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      },
    });
    // console.log(response);
    if (response.status === 200) return await response.json();
    throw await response.json();
  },
};
