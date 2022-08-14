test("truthiness", () => {
   // semua bernilai true
   let value = null;
   expect(value).toBeNull();
   expect(value).toBeDefined();
   expect(value).toBeFalsy();
   
   value = undefined;
   expect(value).toBeUndefined();
   expect(value).toBeFalsy();

   value = "Yosep";
   expect(value).toBeTruthy();
});