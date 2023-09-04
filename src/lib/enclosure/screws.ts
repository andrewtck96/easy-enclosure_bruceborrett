import { union } from "@jscad/modeling/src/operations/booleans";
import { Params } from "../params";

import { cylinder } from '@jscad/modeling/src/primitives';
import { translate } from "@jscad/modeling/src/operations/transforms";

export const screws = (params: Params) => {
  const { length, width, height, wall, cornerRadius } = params
  return union(
    translate([cornerRadius+wall, cornerRadius+wall, 0], cylinder({radius: 2, height: height})),
    translate([length-cornerRadius-wall, cornerRadius+wall, 0], cylinder({radius: 2, height: height})),
    translate([cornerRadius+wall, width-cornerRadius-wall, 0], cylinder({radius: 2, height: height})),
    translate([length-cornerRadius-wall, width-cornerRadius-wall, 0], cylinder({radius: 2, height: height})),
  )
}