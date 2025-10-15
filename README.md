# Qonsole - a simple console for running SPARQL queries

**_Warning: While this project has not yet been replaced and should continue to
receive required bug fixes and any minor feature requests, future development of
qonsole will be done as part of the
[qonsole-sfc](https://github.com/epimorphics/qonsole-sfc) project.
(2022-07-04)_**

For more information about this project visit [the
wiki](https://github.com/epimorphics/qonsole/wiki).

---

## Developer Notes

In order to get started, you'll want to install Grunt's command line interface
(CLI) globally.[^1]

```sh
npm install -g grunt-cli
```

This will put the grunt command in your system path, allowing it to be run from
any directory.

>[!Note]
> Installing grunt-cli does not install the Grunt task runner! The job
> of the Grunt CLI is simple: run the version of Grunt which has been installed
> next to a Gruntfile. This allows multiple versions of Grunt to be installed on
> the same machine simultaneously.

[^1]: You may need to use sudo (for OSX, *nix, BSD etc) or run your
command shell as Administrator (for Windows) to do this.
