import { expect } from 'chai';
import * as data from "../data.js";

describe("Data", function() {
    it("returns requested data", function() { 
        var result = data.getKitty("Toots");

        expect(result).to.deep.equal({name:"Toots", age:"young", breed:"domestic short hair", vaccination:"yes", location:"Seattle, WA"})
    });

    it("fails w/ invalid data", function() { 
        var result = data.getKitty("fake"); 
        
        expect(result).to.be.undefined; 
    }); 

    it("add data", function() {
        var result = data.addKitty({name:"Lily", age:"old", breed:"orange", vaccination:"no", location:"Lynnwood, WA"});

        expect(result.added).to.be.true;
    });

    it("fails to add data", function() {
        var result = data.addKitty({name:"Toots", age:"young", breed:"domestic short hair", vaccination:"yes", location:"Seattle, WA"});

        expect(result.added).to.be.false;
    });

    it ("deletes data", function() {
        var result = data.deleteKitty({name:"Toots", age:"young", breed:"domestic short hair", vaccination:"yes", location:"Seattle, WA"});

        expect(result.deleted).to.be.true;
    });

    it ("fails to delete data", function() {
        var result = data.deleteKitty({name:"Moonie", age:"old", breed:"orange", vaccination:"yes", location:"Snohomish, WA"});

        expect(result.deleted).to.be.false;
    });

});
