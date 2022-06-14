/** 
 * Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
 * il prezzo del biglietto è definito in base ai km (0.21 € al km)
 * va applicato uno sconto del 20% per i minorenni
 * va applicato uno sconto del 40% per gli over 65.
 * L'output del prezzo finale andrà mostrato in forma umana in console (con massimo due decimali, per indicare centesimi sul prezzo)
*/ 

const userTripLength = prompt ('Inserire km totali viaggio (tariffa base 0.21€/km)');

const priceTicket = userTripLength * 0.21;

console.log(priceTicket);

const userAgeDiscount = prompt ('Inserire età passeggero');

if (userAgeDiscount < 18) {
const juniorDiscount = ((priceTicket * 20)/ 100);
const priceTicketFinal = juniorDiscount - priceTicket;

console.log(priceTicketFinal);
} 
else (userAgeDiscount > 64)
const seniorDiscount = ((priceTicket * 40)/ 100);
const priceTicketFinal = seniorDiscount - priceTicket;


// const userAge = prompt ('Inserire età viaggiatore')


