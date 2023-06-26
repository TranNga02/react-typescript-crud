import http from "../http-common";

class PersonDataService {
  getPeople() {
    return http.get<Array<Person.Person>>("/people/all");
  }

  createPerson(data: Person.CreatePerson) {
    return http.post<void>("/people", data);
  }
}

export default new PersonDataService();