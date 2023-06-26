import http from "../http-common";

class LabelDataService {
    getAllLabels() {
    return http.get<Array<Label.Label>>("/labels/all");
  }
}

export default new LabelDataService();