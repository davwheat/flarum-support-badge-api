define({ "api": [
  {
    "type": "get",
    "url": "/v1/compat-latest/:packageName",
    "title": "Supports latest Flarum core version",
    "name": "CompatLatest",
    "description": "<p>Fetches a badge that shows whether the provided extension is compatible with the latest version of <code>flarum/core</code>.</p> <p>Uses the information provided by the <a href=\"https://extiverse.com/\">Extiverse</a> API, kindly hosted free-of-charge by <a href=\"https://github.com/luceos\">Daniël Klabbers (luceos)</a>.</p>",
    "group": "Badges",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "URL parameters": [
          {
            "group": "URL parameters",
            "type": "string",
            "optional": false,
            "field": "packageName",
            "description": "<p>The extension's package name.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "packageName",
          "content": "\"fof/formatting\"",
          "type": "string"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Support",
          "content": "<svg\n  xmlns=\"http://www.w3.org/2000/svg\"\n  xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"183\" height=\"20\" role=\"img\" aria-label=\"Supports latest Flarum: Yes\">\n  <title>Supports latest Flarum: Yes</title>\n  <!-- ... -->\n</svg>",
          "type": "svg"
        },
        {
          "title": "No support",
          "content": "<svg\n  xmlns=\"http://www.w3.org/2000/svg\"\n  xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"183\" height=\"20\" role=\"img\" aria-label=\"Supports latest Flarum: No\">\n  <title>Supports latest Flarum: No</title>\n  <!-- ... -->\n</svg>",
          "type": "svg"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "404 Not Found",
          "content": "Not found\n\nNo results found for \"flarum/nuke-discourse\". Make sure this matches your composer.json's name field.",
          "type": "text"
        },
        {
          "title": "500 Upstream Extiverse API error",
          "content": "Unknown upstream API error\n\nAn unknown error occurred with the upstream API used to fetch extension data. Please try again later, or contact @MrJeeves#1234 on Discord.",
          "type": "text"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/v1/compat-latest/fof/formatting"
      }
    ],
    "filename": "src/v1/compat-latest/index.ts",
    "groupTitle": "Badges"
  },
  {
    "type": "get",
    "url": "/v1/ext-icon/:packageName",
    "title": "Get extension icon",
    "name": "ExtIcon",
    "description": "<p>Returns a specified extension's icon which would be shown on the Flarum admin dashboard.</p> <p>Uses the information provided by the <a href=\"https://extiverse.com/\">Extiverse</a> API, kindly hosted free-of-charge by <a href=\"https://github.com/luceos\">Daniël Klabbers (luceos)</a>.</p>",
    "group": "Extension_info",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "URL parameters": [
          {
            "group": "URL parameters",
            "type": "string",
            "optional": false,
            "field": "packageName",
            "description": "<p>The extension's package name.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "packageName",
          "content": "\"fof/formatting\"",
          "type": "string"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Extension icon",
          "content": "raw PNG data",
          "type": "text"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "404 Not Found",
          "content": "Not found\n\nNo results found for \"flarum/nuke-discourse\". Make sure this matches your composer.json's name field.",
          "type": "text"
        },
        {
          "title": "500 Upstream Extiverse API error",
          "content": "Unknown upstream API error\n\nAn unknown error occurred with the upstream API used to fetch extension data. Please try again later, or contact @MrJeeves#1234 on Discord.",
          "type": "text"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/v1/ext-icon/fof/formatting"
      }
    ],
    "filename": "src/v1/ext-icon/index.ts",
    "groupTitle": "Extension_info"
  }
] });
