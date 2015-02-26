# wifi-password

누군가 와이파이 password를 묻는다면 대답을 빠르게 해줍시다. **OSX만 가능!**.
[Windows version](https://github.com/RReverser/WiFi-Password).

![](https://i.cloudup.com/uUo8iSbKXRh/km6iJT.gif)

## How to use

**1. Install it**

With [bpkg](https://github.com/bpkg/bpkg):

```
$ bpkg install rauchg/wifi-password
```

or with `curl`:

```
curl -L https://raw.github.com/rauchg/wifi-password/master/wifi-password.sh -o ~/bin/wifi-password && chmod +x ~/bin/wifi-password
```

If you don't have `~/bin` in your `$PATH`, replace it with `/usr/local/bin` or
similar.

**2. Use it:**

To get the password for the WiFi you're currently logged onto:

```
$ wifi-password
```
