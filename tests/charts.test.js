import { describe, expect, it } from "vitest";
import { makeCumulativeData } from "../web/charts.js";

describe("makeCumulativeData", () => {
  it("creates cumulative data from array of input", () => {
    const groupedRecords = [
      {input: [0,0,1,0,1,0,0,0,0,0], res: [0,0,1,1,2,2,2,2,2,2]},
      {input: [0,0,1,0,1,0,0,0,5,0], res: [0,0,1,1,2,2,2,2,7,7]},
      {input: [1,2,1,0,1,0,0,0,5,1], res: [1,3,4,4,5,5,5,5,10,11]}
    ];
    
    for (const { input, res } of groupedRecords) {
      expect(makeCumulativeData(input)).toEqual(res);
    }
   });
});
