'use strict';   // Mode strict du JavaScript

/*************************************************************************************************/
/* **************************************** DONNEES JEU **************************************** */
/*************************************************************************************************/

var dragen={}
var player ={};
var level =prompt("tapper level")

/*************************************************************************************************/
/* *************************************** FONCTIONS JEU *************************************** */
/*************************************************************************************************/

var i ;
function entierAleatoire(min, max)
{
 return Math.floor(Math.random() * (max - min + 1)) + min;

}
//var entier = entierAleatoire(1, 6);
//document.write(entier)

function lancer(nbre,face)
{
   var  s=0
    for(i=1;i<=nbre;i++)// i=0; i<nbre
    {
      s= s + (entierAleatoire(1,face))      
    }
    return s
}
//document.write(" la somme est" ,lancer(6,6))

function lancementpv(){
  switch(level)
  {
    case 'facile':
      dragen.pv_dragon= 100 + lancer(5,10)
      player.pv_player = 100 + lancer(10,10)
       break;
    case 'normal':
      dragen.pv_dragon= 100 + lancer(10,10)
      player.pv_player = 100 + lancer(10,10)
      break;
    case 'difficile':
      dragen.pv_dragon= 100 + lancer(10,10)
      player.pv_player = 100 + lancer(7,10)

  }
}
lancementpv()
var pv1=player.pv_player
pv2=dragen.pv_dragon


function gameStat(){
 document.write( '<div class="game-state">')
 document.write('<figure class="game-state_player">')
 document.write('<img src="images/knight.png" alt="Chevalier">')
 document.write('<figcaption>' + player.pv_player+ '</figcaption>')
 document.write('</figure>')
 document.write('<figure class="game-state_player">')
 document.write('<img src="images/dragon.png" alt="Dragon">')
 document.write('<figcaption>' + dragen.pv_dragon + '</figcaption>')
 document.write('</figure>')
 document.write('</div>')
}
gameStat()
function initiative(){
  var dr= lancer(10,6)
  var pl = lancer(10,6)
  if(dr>pl){
    return 'dragen'
  }
  else{
    return 'player'
  }
}

function looCalculDammge(){
  var pointdammage
  
      var attacker = initiative()
      if(attacker == 'dragen')
      {
          if(level=='facile')
          {
            pointdammage =Math.floor( lancer(3,6) - lancer(3,6)*(lancer(2,6)/100))
            player.pv_player = player.pv_player -  pointdammage
            
            
          }
          else if(level=='difficile')
          {
            pointdammage = Math.floor(lancer(3,6) + lancer(3,6)*(lancer(1,6)/100)) 
            player.pv_player = player.pv_player - pointdammage


          }
          else{
            pointdammage =  lancer(3,6)
            player.pv_player = player.pv_player - pointdammage
          }
          document.write('<figure class="game-round">')
          document.write('<img src="images/dragon-winner.png" alt="Dragon vainqueur">')
          document.write('<figcaption>Le dragon prend linitiative, vous attaque et vous  '+ pointdammage + '  points de dommage !</figcaption>')
          document.write('</figure>') 
        } 
      
      else if(attacker == 'player')
      {
          if(level=='facile')
          {
            pointdammage = Math.floor(lancer(3,6) - lancer(3,6)*(lancer(2,6)/100))
            dragen.pv_dragon = dragen.pv_dragon -  pointdammage
            
          }

          else if(level=='difficile')
          {
            pointdammage = Math.floor(lancer(3,6) + lancer(3,6)*(lancer(1,6)/100))
            dragen.pv_dragon = dragen.pv_dragon -  pointdammage
          
          }
          else{
            pointdammage =  lancer(3,6)
            dragen.pv_dragon = dragen.pv_dragon -  pointdammage
          }
          document.write('<figure class="game-round">')
          document.write('<img src="images/knight.png" alt="Chevalier">')
          document.write('<figcaption>Le player prend linitiative, vous attaque et vous inflige  ' + pointdammage +' points de dommage !</figcaption>')
          document.write('</figure>') 
        } 
    
  } 
  

function end(){
  if( dragen.pv_dragon<=0){
  
  document.write('<h3>Fin de la partie</h3>')
  document.write('<figure class="game-end">')
  document.write('<figcaption>Vous avez perdu le combat, le player n vous a carbonisé !</figcaption>')
  document.write('<img src="images/knight.png" alt="Chevalie">')
  document.write('</figure>')
  }
  else{
    document.write('<h3>Fin de la partie</h3>')
    document.write('<figure class="game-end">')
    document.write('<figcaption>Vous avez perdu le combat, le dragon vous a carbonisé !</figcaption>')
    document.write('<img src="images/dragon-winner.png" alt="Dragon vainqueur">')
    document.write('</figure>')
  }
}


var tour=0
  while ((dragen.pv_dragon>0) && (player.pv_player>0) ) 
  {
      tour++
      document.write('<h3>Tour n°'+tour+'</h3>')
      gameStat()
    looCalculDammge()
   
  }
  end()






/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/
// calcul pv(pv)
// game state( pour affichage )
//game loo calcul dammge 