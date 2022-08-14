test("numbers", () =>{
   let lima = 5;
   let tujuh = 7;
   //semua bernilai true
   expect(tujuh).toBeGreaterThan(lima);
   expect(tujuh).toBeGreaterThanOrEqual(lima);
   expect(lima).toBeLessThan(tujuh);
   expect(lima).toBeLessThanOrEqual(tujuh);
})