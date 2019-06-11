import * as yup from "yup";

// custom localization
yup.setLocale({
    mixed: {
        required: "This field is required",
    },
    string: {
        min: "Min. length should be ${min} symbols",
        max: "Max. length should be ${max} symbols",
    }
});

export default yup;