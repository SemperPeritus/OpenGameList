(function(global) {
    // Tells the System loader where to look for things
    var map = {
        'app': "app",
        "@angular": "js/@angular",
        "rxjs": "js/rxjs"
    };

    // Tells the System loader which filname and/or extensions to look for by default (when none are specified)
    var packages = {
        'app': { main: "main.js", defaultExtensions: "js" },
        "rxjs": { defaultExtensions: "js" }
    };

    // Configure @angular packages
    var ngPackageNames = [
        "common",
        "compiler",
        "core",
        "http",
        "platform-browser",
        "platform-browser-dynamics",
        "upgrade"
    ];

    function packIndex(pkgName) {
        packages["@angular/" + pkgName] = {
            main: "index.js",
            defaultExtension: "js"
        };
    }

    function packUmd(pkgName) {
        packages["@angular/" + pkgName] = {
            main: "index.js",
            defaultExtension: "js"
        };
    }

    var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;
    ngPackageNames.forEach(setPackageConfig);
    var config = {
        map: map,
        packages: packages
    };
    System.config(config);
})(this);