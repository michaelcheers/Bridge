    Bridge.define("System.Uri", {
        statics: {
            methods: {
                registerPackUriParser: function () { },
                createRelativeOrAbsoluteUri: function (relativeUriString) {
                    return new System.Uri(relativeUriString);
                },
                createAbsoluteUri: function (absoluteUriString) {
                    var uri = { };

                    if (!System.Uri.tryCreateAbsoluteUri(absoluteUriString, uri)) {
                        throw new System.Exception(System.String.format("Can't create CreateAbsoluteUri from {0}", absoluteUriString));
                    }

                    return uri.v;
                },
                createAbsoluteUri$1: function (baseUri, relativeUriString) {
                    var uri = { };

                    if (!System.Uri.tryCreateAbsoluteUri$1(baseUri, relativeUriString, uri)) {
                        throw new System.Exception(System.String.format("Can't create CreateAbsoluteUri from {0} and {1}", baseUri.getAbsolutePath(), relativeUriString));
                    }

                    return uri.v;
                },
                createRelativeUri: function (relativeUriString) {
                    return new System.Uri(relativeUriString);
                },
                tryCreateAbsoluteUri: function (absoluteUriString, uri) {
                    uri.v = new System.Uri(absoluteUriString);
                    var uriComponents = { };

                    if (!System.Uri.tryGetUriComponents(uri.v, uriComponents)) {
                        uri.v = null;
                        return false;
                    }

                    return true;
                },
                tryCreateAbsoluteUri$1: function (baseUri, relativeUriString, uri) {
                    var baseUriComponents = { };

                    if (!System.Uri.tryGetUriComponents(baseUri, baseUriComponents)) {
                        uri.v = null;
                        return false;
                    }

                    var uriComponents = baseUriComponents.v.combine(relativeUriString);

                    uri.v = new System.Uri(uriComponents.AbsoluteUri);
                    uri.v.UriComponents = uriComponents;

                    return true;
                },
                getUriComponents: function (uri) {
                    var uriComponents = { };
                    if (!System.Uri.tryGetUriComponents(uri, uriComponents)) {
                        throw new System.InvalidOperationException("This operation is not supported for a relative URI.");
                    }

                    return uriComponents.v;
                },
                tryGetUriComponents: function (uri, uriComponents) {
                    if (uri.hasOwnProperty("UriComponents")) {
                        uriComponents.v = Bridge.cast(uri.UriComponents, System.UriComponents);
                    } else {
                        if (!System.UriComponents.tryParse(uri.AbsoluteUri, uriComponents)) {
                            uriComponents.v = null;
                        }

                        uri.UriComponents = uriComponents.v;
                    }

                    return uriComponents.v != null;
                }
            }
        },
        props: {
            AbsoluteUri: null
        },
        ctors: {
            ctor: function (uriString) {
                this.$initialize();
                this.AbsoluteUri = uriString;
            }
        },
        methods: {
            getAbsolutePath: function () {
                return this.AbsoluteUri;
            }
        }
    });

    Bridge.define("System.UriComponents", {
        statics: {
            fields: {
                absoluteUriRegex: null,
                relativeUriRegex: null,
                rootedPathRegex: null,
                HttpDefaultPort: 0,
                HttpsDefaultPort: 0
            },
            ctors: {
                init: function () {
                    this.absoluteUriRegex = new System.Text.RegularExpressions.Regex.ctor("^([^:]*):(\\/\\/(([^@]*)@)?([^:\\/]*)(:[^\\/]*)?)?(\\/?[^\\?#]*)(\\?[^#]*)?(#.*)?$");
                    this.relativeUriRegex = new System.Text.RegularExpressions.Regex.ctor("^(\\/?[^\\?#]*)(\\?[^#]*)?(#.*)?$");
                    this.rootedPathRegex = new System.Text.RegularExpressions.Regex.ctor("^([a-zA-Z]:\\/)[^\\/]");
                    this.HttpDefaultPort = 80;
                    this.HttpsDefaultPort = 443;
                }
            },
            methods: {
                combineFilePath: function (path, relativePath) {
                    if (System.UriComponents.rootedPathRegex.match(relativePath) != null) {
                        return relativePath;
                    }

                    if (System.String.startsWith(relativePath, "/")) {
                        return System.String.concat(path.substr(0, ((System.String.indexOf(path, String.fromCharCode(58)) + 1) | 0)), relativePath);
                    }

                    return System.String.concat(path.substr(0, ((path.lastIndexOf(String.fromCharCode(47)) + 1) | 0)), relativePath);
                },
                combineUncPath: function (absolutePath, relativePath) {
                    return System.String.startsWith(relativePath, "/") ? (System.String.concat(absolutePath, relativePath)) : (System.String.concat(absolutePath.substr(0, ((absolutePath.lastIndexOf(String.fromCharCode(47)) + 1) | 0)), relativePath));
                },
                tryParse: function (uriString, uriComponents) {
                    var $t, $t1, $t2, $t3, $t4, $t5, $t6;
                    uriString = System.String.replaceAll(uriString, String.fromCharCode(92), String.fromCharCode(47));

                    if (System.UriComponents.rootedPathRegex.match(uriString) != null) {
                        uriString = System.String.concat("file:///", uriString);
                    }

                    var absoluteUriMatch;
                    var t1 = System.UriComponents.absoluteUriRegex.match(uriString);
                    if (t1.getSuccess()) {
                        var t2 = t1.getGroups();
                        var t3 = System.Array.init(t2.getCount(), null, System.String);
                        for (var i = 0; i < t2.getCount(); i = (i + 1) | 0) {
                            t3[System.Array.index(i, t3)] = t2.get(i).getValue();
                        }
                        absoluteUriMatch = t3;
                    } else {
                        uriComponents.v = null;
                        return false;
                    }

                    var scheme = ($t = absoluteUriMatch[System.Array.index(1, absoluteUriMatch)], $t != null ? $t : null);
                    var userInfo = ($t1 = absoluteUriMatch[System.Array.index(4, absoluteUriMatch)], $t1 != null ? $t1 : null);
                    var path = ($t2 = absoluteUriMatch[System.Array.index(7, absoluteUriMatch)], $t2 != null ? $t2 : null);
                    var query = ($t3 = absoluteUriMatch[System.Array.index(8, absoluteUriMatch)], $t3 != null ? $t3 : null);
                    var fragment = ($t4 = absoluteUriMatch[System.Array.index(9, absoluteUriMatch)], $t4 != null ? $t4 : null);

                    var host;
                    var port = { };

                    var hostGroupValue = ($t5 = absoluteUriMatch[System.Array.index(5, absoluteUriMatch)], $t5 != null ? $t5 : null);
                    var portGroupValue = ($t6 = absoluteUriMatch[System.Array.index(6, absoluteUriMatch)], $t6 != null ? $t6 : null);

                    if (System.String.isNullOrEmpty(portGroupValue)) {
                        host = hostGroupValue;
                        port.v = System.UriComponents.getDefaultPort(scheme);
                    } else if (!System.Int32.tryParse(portGroupValue.substr(1), port)) {
                        host = System.String.concat(hostGroupValue, portGroupValue);
                        port.v = -1;
                    } else {
                        host = hostGroupValue;
                    }

                    uriComponents.v = new System.UriComponents(scheme, userInfo, host, port.v, path, query, fragment);
                    return true;
                },
                getDefaultPort: function (scheme) {
                    if (Bridge.referenceEquals(scheme.toLowerCase(), "http")) {
                        return System.UriComponents.HttpDefaultPort;
                    }

                    if (Bridge.referenceEquals(scheme.toLowerCase(), "https")) {
                        return System.UriComponents.HttpsDefaultPort;
                    }

                    return -1;
                },
                getPathSegments: function (path) {
                    var segments = System.String.split(path, [47].map(function(i) {{ return String.fromCharCode(i); }}));

                    for (var i = 0; i < ((segments.length - 1) | 0); i = (i + 1) | 0) {
                        segments[System.Array.index(i, segments)] = System.String.concat(segments[System.Array.index(i, segments)], "/");
                    }

                    return segments;
                },
                getAbsoluteUri: function (scheme, userInfo, host, port, path, query, fragment) {
                    var stringBuilder = new System.Text.StringBuilder();

                    stringBuilder.append(scheme);
                    stringBuilder.append("://");

                    if (!System.String.isNullOrEmpty(userInfo)) {
                        stringBuilder.append(userInfo);
                        stringBuilder.append("@");
                    }

                    stringBuilder.append(host);

                    if (port !== System.UriComponents.getDefaultPort(scheme)) {
                        stringBuilder.append(":");
                        stringBuilder.append(port);
                    }

                    stringBuilder.append(path);
                    stringBuilder.append(query);
                    stringBuilder.append(fragment);

                    return stringBuilder.toString();
                }
            }
        },
        props: {
            Scheme: null,
            AbsoluteUri: null,
            AbsolutePath: null,
            LocalPath: null,
            Segments: null,
            UserInfo: null,
            Host: null,
            Port: 0,
            Query: null,
            Fragment: null,
            IsDefaultPort: false,
            IsFile: false,
            IsUnc: false,
            IsLoopback: false,
            PathAndQuery: null
        },
        ctors: {
            ctor: function (scheme, userInfo, host, port, path, query, fragment) {
                this.$initialize();
                var isFile = Bridge.referenceEquals(scheme.toLowerCase(), "file");
                var isUnc = isFile && !System.String.isNullOrEmpty(host);
                var isLocalhost = Bridge.referenceEquals(host.toLowerCase(), "localhost");
                var absolutePath = isFile && !isUnc ? System.String.trimStart(path, [47]) : path;

                this.Scheme = scheme;
                this.AbsolutePath = absolutePath;
                this.UserInfo = userInfo;
                this.Host = host;
                this.Port = port;
                this.Query = query;
                this.Fragment = fragment;

                this.IsFile = isFile;
                this.IsUnc = isUnc;
                this.IsLoopback = isFile && !isUnc || isLocalhost;
                this.LocalPath = isUnc ? System.String.concat("\\\\", host, System.String.replaceAll(absolutePath, String.fromCharCode(47), String.fromCharCode(92))) : isFile ? System.String.replaceAll(absolutePath, String.fromCharCode(47), String.fromCharCode(92)) : absolutePath;
                this.IsDefaultPort = this.Port === System.UriComponents.getDefaultPort(scheme);
                this.PathAndQuery = System.String.concat(absolutePath, query);
                this.AbsoluteUri = System.UriComponents.getAbsoluteUri(scheme, userInfo, host, port, path, query, fragment);
                this.Segments = System.UriComponents.getPathSegments(path);
            }
        },
        methods: {
            combine: function (relativeUriString) {
                var $t, $t1, $t2;
                relativeUriString = System.String.replaceAll(relativeUriString, String.fromCharCode(92), String.fromCharCode(47));

                if (this.IsUnc) {
                    return new System.UriComponents(this.Scheme, this.UserInfo, this.Host, this.Port, System.UriComponents.combineUncPath(this.AbsolutePath, relativeUriString), this.Query, this.Fragment);
                }

                if (this.IsFile) {
                    return new System.UriComponents(this.Scheme, this.UserInfo, this.Host, this.Port, System.String.concat("/", System.UriComponents.combineFilePath(this.AbsolutePath, relativeUriString)), this.Query, this.Fragment);
                }

                var t1 = System.UriComponents.relativeUriRegex.match(relativeUriString);
                var relativeUriMatch = null;
                if (t1.getSuccess()) {
                    var t2 = t1.getGroups();
                    var t3 = System.Array.init(t2.getCount(), null, System.String);
                    for (var i = 0; i < t2.getCount(); i = (i + 1) | 0) {
                        t3[System.Array.index(i, t3)] = t2.get(i).getValue();
                    }
                    relativeUriMatch = t3;
                }
                var path = ($t = relativeUriMatch[System.Array.index(1, relativeUriMatch)], $t != null ? $t : null);
                var query = ($t1 = relativeUriMatch[System.Array.index(2, relativeUriMatch)], $t1 != null ? $t1 : null);
                var fragment = ($t2 = relativeUriMatch[System.Array.index(3, relativeUriMatch)], $t2 != null ? $t2 : null);

                var combinedPath = System.String.startsWith(path, "/") ? path : (System.String.concat(this.AbsolutePath.substr(0, ((this.AbsolutePath.lastIndexOf(String.fromCharCode(47)) + 1) | 0)), path));

                return new System.UriComponents(this.Scheme, this.UserInfo, this.Host, this.Port, combinedPath, query, fragment);
            }
        }
    });
