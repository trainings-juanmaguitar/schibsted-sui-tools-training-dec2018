import Domain from "./src";

const domain = new Domain();

domain
  .get("list_students_use_case")
  .execute()
  .then(console.log);

domain
  .get("search_students_by_name_use_case")
  .execute({ query: "juanma" }) //patron de diseño llamado patron-comando
  .then(console.log);
