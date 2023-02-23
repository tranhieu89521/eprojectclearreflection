import { listProducts } from "./dumpData.js";
const query=window.location.search;
const urlparam=new URLSearchParams(query);
let id=urlparam.get('id');
let product=listProducts[id-1];

