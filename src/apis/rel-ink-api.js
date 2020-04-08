import SimpleSchema from "simpl-schema";

export default new SimpleSchema({
  url: SimpleSchema.RegEx.Url,
});
