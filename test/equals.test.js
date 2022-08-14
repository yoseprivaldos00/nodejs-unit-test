test("test toBe", () =>{
   let name = "Yosep";
   let hello = `Hello ${name}`;

   expect(hello).toBe("Hello Yosep");
})

test("test toEquals", ()=>{
   let person = {id: "Yosep"};
   Object.assign(person, {name: "Yosep"})

   expect(person).toEqual({id: "Yosep", name: "Yosep"})
})



