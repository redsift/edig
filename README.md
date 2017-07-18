# Edig Sift

### Check info for your domains with the RPC version of the [dig](https://linux.die.net/man/1/dig) Unix utility.

[<img src="http://static.redsift.io/assets/icons/run.svg">](https://dashboard.redsift.cloud/workshop)

Once it's running on the cloud a `curl` request with some formatting help from `echo` and `sed` that looks like this:

`$ echo -e $(curl https://rpc.redsift.cloud/edig/txt/_dmarc.ondmarc.com -s -H 'Authorization: Api-Key 825cf5b352be381818d36f5639e89568a2e4d6b6' | sed -E 's/(^"|"$)//g')
`

will return a response similar to this:

```
_dmarc.ondmarc.com.  IN TXT 'v=DMARC1; p=reject; pct=100; rua=mailto:dmarc@redsift.io,mailto:6301a309@inbox.ondmarc.com; ruf=mailto:dmarc@redsift.io,mailto:6301a309@inbox.ondmarc.com;'
```

Note: You can fetch your API key from your [profile](https://dashboard.redsift.cloud/profile) page under the *Sift API Keys* section.

## Social coding
We like pull requests. If you want to fork it, add your own functionality, run it on your own data  and share it with the world, that's also cool. 
Find out how to become a Sift developer at [redsift.com](https://redsift.com) and check out our [docs](http://docs.redsift.com). 
Red Sift is and will always be free for developers to create and run Sifts.

## License
MIT