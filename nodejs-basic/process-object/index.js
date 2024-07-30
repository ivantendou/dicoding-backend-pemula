const initialMemoryUsage = 3214567;
const yourName = "Ivan";
const environment = "Production";

for (let i = 0; i <= 10000; i++) {
    initialMemoryUsage += 2;
}

const currentMemoryUsage = 3214567;

console.log(`Hai, ${yourName}`);
console.log(`Mode environment: ${environment}`)
console.log(`Penggunaan memori dari ${initialMemoryUsage} naik ke ${currentMemoryUsage}`);