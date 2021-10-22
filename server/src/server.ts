import { serverHttp } from "./app";

serverHttp.listen(4000, () => 
console.log(`:rocket: server rodando na porta 4000!`));