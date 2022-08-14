test("strings test", ()=> {
   const name = "Yosep R Silaban"
   // semua bernilai true
   expect(name).toBe("Yosep R Silaban");
   expect(name).toEqual("Yosep R Silaban");
   expect(name).toMatch(/aban/);
})