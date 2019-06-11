import * as moment from "moment";

// default format
moment.defaultFormat = "YYYY-MM-DD HH:mm:ss";

// use default format in .toString()
moment.fn.toString = function() {
    return this.format(moment.defaultFormat);
}

export default moment;