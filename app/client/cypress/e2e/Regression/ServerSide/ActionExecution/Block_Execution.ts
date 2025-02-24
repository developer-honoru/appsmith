import { ObjectsRegistry } from "../../../../support/Objects/Registry";

const agHelper = ObjectsRegistry.AggregateHelper,
  ee = ObjectsRegistry.EntityExplorer,
  apiPage = ObjectsRegistry.ApiPage,
  dataSources = ObjectsRegistry.DataSources;

const url = "https://www.google.com";

describe("Block Action Execution when no field is present", () => {
  it("1. Ensure API Run button is disabled when no url is present", () => {
    apiPage.CreateApi("FirstAPI", "GET");
    apiPage.AssertRunButtonDisability(true);
    apiPage.EnterURL(url);
    apiPage.AssertRunButtonDisability(false);
  });

  it("1. Ensure Run button is disabled when no SQL body field is present", () => {
    let name: any;
    dataSources.CreateDataSource("MySql", true, false);
    cy.get("@dsName").then(($dsName) => {
      name = $dsName;

      agHelper.Sleep(1000);
      dataSources.NavigateFromActiveDS(name, true);
      agHelper.GetNClick(dataSources._templateMenu);
      dataSources.EnterQuery("SELECT * from users");
      dataSources.AssertRunButtonDisability(false);
      dataSources.EnterQuery("");
      dataSources.AssertRunButtonDisability(true);
    });
  });
});
