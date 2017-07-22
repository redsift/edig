/**
 * Edig Sift. DAG's 'Simple RPC' node implementation
 */
'use strict';

const dns = require('dns');
const pify = require('pify');

const newResponse = (status_code, header, body) => {
  return { status_code, header,
    body: Buffer.from(JSON.stringify(body) || '').toString('base64')
  }
}

module.exports = function (got) {
  const inData = got.in.data;
  console.log('edig: simple.js: data received:', inData);

  return inData.map(d => {
    const req = JSON.parse(d.value);
    console.log(`${req.method}: ${req.request_uri}`);
    const domain = req.request_uri.replace('/edig/txt/', '');
    const respond = (c, b) => ({
      name: 'api_rpc',
      key: d.key,
      value: newResponse(c, {'Content-Type': ['text/plain; charset=utf-8']}, b)
    });
    return pify(dns).resolve(domain, 'TXT')
      .then(addr =>{
        const linePattern = r => `${domain}.\t\tIN\tTXT\t'${r.join(' ')}'`;
        return respond(200, addr.map(linePattern).join('\n'))
      })
      .catch(e => respond(500, e))
  })
};
