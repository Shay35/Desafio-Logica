const prompt = require("prompt-sync")();
let heroi = prompt("Digite o nome do seu herói:");
let XP = Number(prompt ("Digite a quantidade de XP do seu herói:"));
let nivel = "";

if (XP < 1000) {
  nivel = "FERRO";
  console.log (`O Herói **${heroi}** está no nível de **${nivel}**`);  
} else if (XP >= 1001 && XP <= 2000) {
  nivel = "BRONZE";
  console.log (`O Herói **${heroi}** está no nível de **${nivel}**`);
} else if (XP >= 2001 && XP <= 6000) {
  nivel = "PRATA";
  console.log (`O Herói **${heroi}** está no nível de **${nivel}**`);
} else if (XP >= 6001 && XP <= 7000){
  nivel = "OURO";
  console.log (`O Herói **${heroi}** está no nível de **${nivel}**`);
} else if (XP >= 7001 && XP <= 8000){
  nivel = "PLATINA";
  console.log (`O Herói **${heroi}** está no nível de **${nivel}**`);
} else if (XP >= 8001 && XP <= 9000) {
  nivel = "ASCENDENTE";
  console.log (`O Herói **${heroi}** está no nível de **${nivel}**`);
} else if (XP >= 9001 && XP <= 10000) {
  nivel = "IMORTAL";
  console.log (`O Herói **${heroi}** está no nível de **${nivel}**`);
} else if (XP >= 10001){
  nivel = "RADIANTE";
  console.log (`O Herói **${heroi}** está no nível de **${nivel}**`);  
}