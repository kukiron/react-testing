import axios from "axios";
import sinon from "sinon";
import { expect } from "chai";
import utility from "../src/ajax";

describe("Utility", () => {
  beforeEach(() => {
    sinon.stub(axios, "get");
  });

  afterEach(() => {
    axios.get.restore();
  });

  it("should make an AJAX call", () => {
    utility.makeAjax();

    expect(axios.get.callCount).to.equal(1);
  });
});
