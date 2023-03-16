import mongoose from "mongoose";

const AffiliateStatSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Types.ObjectId, ref: "User" },
    affiliateSales: {
      type: [mongoose.Types.ObjectId],
      ref: "Transaction",
    },
  },
  {
    timeStamps: true,
  }
);

const AffiliateStat = mongoose.model("AffliateStat", AffiliateStatSchema);

export default AffiliateStat;
