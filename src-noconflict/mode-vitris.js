ace.define("ace/mode/vitris_highlight_rules", ["require", "exports", "module",
    "ace/lib/oop", "ace/mode/text_highlight_rules"], function (require, exports, module) {
        "use strict";
        var oop = require("../lib/oop");
        var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;
        var VitrisHighlightRules = function () {
            this.$rules = {
                "start": [
                    {
                        "token": "keyword",
                        "regex": "(COMMENT OUT THIS LINE|ADD SEMICOLON->|REVERSE CAPITALIZATION ON ALL|->)"
                    },
                    {
                        "token": "invalid.deprecated",
                        "regex": "(SWAP|WITH)"
                    },
                    {
                        "token": "comment",
                        "regex": "(/\\*)",
                        "push": "multi_line_comment__1"
                    },
                    {
                        "token": "comment",
                        "regex": "(//.*)"
                    },
                    {
                        "token": "constant.numeric",
                        "regex": "(DELETE->|<-DELETE|DELETE INSIDE(.+)->)"
                    },
                    {
                        "token": "storage.type",
                        "regex": "(COPY->|<-COPY)"
                    },
                    {
                        "token": "storage.modifier",
                        "regex": "(PASTE->|<-PASTE)"
                    },
                    {
                        "token": "string.single",
                        "regex": "(<-ADD \\[ ] BRACES->|<-ADD \\( \\) BRACES->)"
                    },
                    {
                        "token": "string.double",
                        "regex": "(<-ADD { } BRACES->)"
                    },
                    {
                        "token": "variable",
                        "regex": "(CHANGE ALL|TO|INCREMENT NUMBERS BY 1 ->|DECREMENT NUMBERS BY 1 ->)"
                    },
                    {
                        defaultToken: "text",
                    }
                ],
                "multi_line_comment__1": [
                    {
                        "token": "comment",
                        "regex": "(\\*/)",
                        "next": "pop"
                    },
                    {
                        defaultToken: "comment",
                    }
                ]
            };
            this.normalizeRules();
        };
        oop.inherits(VitrisHighlightRules, TextHighlightRules);
        exports.VitrisHighlightRules = VitrisHighlightRules;

    });


ace.define("ace/mode/vitris", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text",
    "ace/mode/vitris_highlight_rules"], function (require, exports, module) {
        "use strict";
        var oop = require("../lib/oop");
        var TextMode = require("./text").Mode;
        var HighlightRules = require("./vitris_highlight_rules").VitrisHighlightRules;
        var Mode = function () {
            this.HighlightRules = HighlightRules;
            this.$behaviour = this.$defaultBehaviour;
        };
        oop.inherits(Mode, TextMode);
        (function () {
            this.$id = "ace/mode/vitris";
        }).call(Mode.prototype);
        exports.Mode = Mode;

    }); (function () {
        ace.require(["ace/mode/vitris"], function (m) {
            if (typeof module == "object" && typeof exports == "object" && module) {
                module.exports = m;
            }
        });
    })();