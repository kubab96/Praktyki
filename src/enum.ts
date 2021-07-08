function codeStatus(status: Status) {
  const message = Status[status];
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

enum Status {
  "Success" = 200,
  "Accepted" = 202,
  "Unauthorized" = 401,
  "Forbidden" = 403,
  "Not Found" = 404,
  "Server Error" = 500,
}

codeStatus(424);
