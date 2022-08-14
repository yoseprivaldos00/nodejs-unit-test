test("arrays test", ()=> {
   const names= ["Yosep", "Rivaldo", "Silaban"];
   expect(names).toContain("Rivaldo");
   expect(names).toEqual(["Yosep", "Rivaldo", "Silaban"])

   const persons = [{name: "Yosep"}, {name: "Rivaldo"}]
   expect(persons).toContainEqual({name: "Rivaldo"})
   expect(persons).toEqual([{name: "Yosep"}, {name: "Rivaldo"}])
})