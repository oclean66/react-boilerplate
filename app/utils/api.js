class Api {
  static headers() {
    return {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      // 'dataType': 'json',
      // 'X-Requested-With': 'XMLHttpRequest',
    };
  }

  static getVideoAPIURL = `https://openvidu.develop.lc.kimeurlabs.com:4443`;

  static basicToken = `Basic T1BFTlZJRFVBUFA6YjMwZTBkNTc2NDc0NDIzM2IwMDNiMDdiNWVlYjNlMTI=`;

  static get(route) {
    return this.xhr(route, null, 'GET');
  }

  static put(route, params) {
    return this.xhr(route, params, 'PUT');
  }

  static post(route, params) {
    return this.xhr(route, params, 'POST');
  }

  static delete(route, params) {
    return this.xhr(route, params, 'DELETE');
  }

  static xhr(route, params, verb) {
    const host = 'https://api.master.lc.kimeurlabs.com';
    const url = `${host}${route}`;
    const options = Object.assign(
      { method: verb },
      params ? { body: JSON.stringify(params) } : null,
    );
    options.headers = Api.headers();
    return fetch(url, options)
      .then(resp => {
        const json = resp.json();
        if (resp.ok) {
          return json;
        }
        return json.then(err => {
          throw err;
        });
      })
      .then(json => json);
  }
}

export default Api;
