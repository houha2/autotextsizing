var Autotextsizing = require("nativescript-autotextsizing").Autotextsizing;
var autotextsizing = new Autotextsizing();

describe("greet function", function() {
    it("exists", function() {
        expect(autotextsizing.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(autotextsizing.greet()).toEqual("Hello, NS");
    });
});