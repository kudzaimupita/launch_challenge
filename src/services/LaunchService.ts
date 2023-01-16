import ApiService from "./ApiService";

export async function queryLaunches(data: any) {
  return ApiService.fetchData({
    url: "/",
    method: "post",
    data,
  });
}
