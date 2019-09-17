import {
  API_URI,
  OPENVIDU_SERVER_URL,
  OPENVIDU_SERVER_SECRET,
} from '../settings';

// console.log('API_URI');
// console.log(API_URI);

export default {
  // Extrae las miniaturas de los shows en vivo
  async index() {
    const response = await fetch(`${API_URI}/sessions`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',

        Accept: '*/*',
        'Cache-Control': 'no-cache',
        'Accept-Encoding': 'gzip, deflate',
        'Content-Length': '41',
        Connection: 'keep-alive',
        'cache-control': 'no-cache',

        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      },
    });
    // console.log(response);
    if (response.status === 200) return await response.json();
    throw await response.json();
  },
  async start(title, description) {
    const form_data = { title, description };

    const response = await fetch(`${API_URI}/sessions`, {
      method: 'POST',
      body: JSON.stringify(form_data),
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
  async view(session_id) {
    const response = await fetch(`${API_URI}/sessions/${session_id}`, {
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
  async live() {
    const response = await fetch(`${OPENVIDU_SERVER_URL}/api/sessions`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${btoa(`OPENVIDUAPP:${OPENVIDU_SERVER_SECRET}`)}`,
      },
    });
    // console.log(response);
    if (response.status === 200) return await response.json();
    throw await response.json();
  },
};
