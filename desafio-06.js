let championship = "campeonato estadual";

let teams = ["Grêmio", "São Paulo", "Flamengo", "Vasco", "Palmeiras"];

/* console.log( 'Times que estão participando do campeonato:', teams ); */

function showTeamPosition(position) {
  let p = position;
  let res = teams[p - 1];

  if (typeof res == "undefined") {
      return console.log("Não temos a informação do time que está nessa posição.")
} else {
        return console.log(`O time que está em ${p}º lugar é o ${res}.`);
  }
}

let times = 1
while (times < 30) {

    times++
    
    showTeamPosition(times);
}
