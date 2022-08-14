// tambahkan dependency npm install @babel/plugin-tranform-runtime --dave-dev
// update babel.config.json
import { sayHelloAsync } from "../src/async"
// bekerja pada function
test("async test", async ()=>{
   const result = await sayHelloAsync("Yosep");
   expect(result).toBe("Hello Yosep")
})

// bekerja pada matchers
test("test asycn matchers", async () => {
    // harapannya promise berhasil
   await expect(sayHelloAsync("Yosep")).resolves.toBe("Hello Yosep");
   // harapnnya promise gagal
   await expect(sayHelloAsync()).rejects.toBe("Name is empty"); 
})