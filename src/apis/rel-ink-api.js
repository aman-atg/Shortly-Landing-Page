// make a call (don't know async or sync) to rel-ink api
// export a function with parameters that fetch data from rel.ink and return hashId of it
//
import SimpleSchema from "simpl-schema";

export default new SimpleSchema({
  url: SimpleSchema.RegEx.Url
});
