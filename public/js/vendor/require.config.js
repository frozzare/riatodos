var jam = {
    "packages": [
        {
            "name": "backbone",
            "location": "../public/js/vendor/backbone",
            "main": "backbone.js"
        },
        {
            "name": "jquery",
            "location": "../public/js/vendor/jquery",
            "main": "dist/jquery.js"
        },
        {
            "name": "underscore",
            "location": "../public/js/vendor/underscore",
            "main": "underscore.js"
        }
    ],
    "version": "0.2.13",
    "shim": {
        "backbone": {
            "deps": [
                "jquery",
                "underscore"
            ],
            "exports": "Backbone"
        },
        "underscore": {
            "exports": "_"
        }
    }
};

if (typeof require !== "undefined" && require.config) {
    require.config({
    "packages": [
        {
            "name": "backbone",
            "location": "../public/js/vendor/backbone",
            "main": "backbone.js"
        },
        {
            "name": "jquery",
            "location": "../public/js/vendor/jquery",
            "main": "dist/jquery.js"
        },
        {
            "name": "underscore",
            "location": "../public/js/vendor/underscore",
            "main": "underscore.js"
        }
    ],
    "shim": {
        "backbone": {
            "deps": [
                "jquery",
                "underscore"
            ],
            "exports": "Backbone"
        },
        "underscore": {
            "exports": "_"
        }
    }
});
}
else {
    var require = {
    "packages": [
        {
            "name": "backbone",
            "location": "../public/js/vendor/backbone",
            "main": "backbone.js"
        },
        {
            "name": "jquery",
            "location": "../public/js/vendor/jquery",
            "main": "dist/jquery.js"
        },
        {
            "name": "underscore",
            "location": "../public/js/vendor/underscore",
            "main": "underscore.js"
        }
    ],
    "shim": {
        "backbone": {
            "deps": [
                "jquery",
                "underscore"
            ],
            "exports": "Backbone"
        },
        "underscore": {
            "exports": "_"
        }
    }
};
}

if (typeof exports !== "undefined" && typeof module !== "undefined") {
    module.exports = jam;
}