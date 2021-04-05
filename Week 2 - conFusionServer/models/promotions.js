const mongoose = require("mongoose");
const Schema = mongoose.Schema;
require("mongoose-currency").loadType(mongoose);
let Currency = mongoose.Types.Currency;

let promotionSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },
        description: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        label: {
            type: String,
            default: "",
        },
        price: {
            type: Currency,
            required: true,
            min: 0,
        },
        featured: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    }
);
let Promotions = mongoose.model("Promotion", promotionSchema);

module.exports = Promotions;
