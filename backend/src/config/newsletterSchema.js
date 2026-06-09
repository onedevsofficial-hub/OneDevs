import mongoose from "mongoose";

const newsletterSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    status: {
        type: Boolean,
        default: true
    },
    criadoEm: {
        type: Date,
        default: Date.now 
    }
});

const Newsletter = mongoose.model("Newsletter", newsletterSchema);
export default Newsletter;