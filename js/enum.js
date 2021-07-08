"use strict";
function codeStatus(status) {
    var message = Status[status];
    switch (status) {
        case Status.Success:
            break;
        case Status.Accepted:
            break;
        case Status.Unauthorized:
            break;
        case Status.Forbidden:
            break;
        case Status["Not Found"]:
            break;
        case Status["Server Error"]:
            break;
        default:
            throw Error("No code status found");
    }
    console.log(message);
}
var Status;
(function (Status) {
    Status[Status["Success"] = 200] = "Success";
    Status[Status["Accepted"] = 202] = "Accepted";
    Status[Status["Unauthorized"] = 401] = "Unauthorized";
    Status[Status["Forbidden"] = 403] = "Forbidden";
    Status[Status["Not Found"] = 404] = "Not Found";
    Status[Status["Server Error"] = 500] = "Server Error";
})(Status || (Status = {}));
codeStatus(404);
