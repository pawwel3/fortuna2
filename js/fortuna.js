


var numer= Math.floor(Math.random()*58);
	var hasla= new Array(60);
hasla[0]="diabeł tkwi w szczegółach"
hasla[1]="dla chcącego nic trudnego"
hasla[2]="bez ciekawości nie ma mądrości"
hasla[3]="bez kołaczy nie wesele"
hasla[4]="bez ludzi i raj się znudzi"
hasla[5]="bez pracy nie ma kołaczy"
hasla[6]="bez pracy nie ma macy"
hasla[7]="bez pracy nie ma płacy"
hasla[8]="bez pracy trudno dostąpić honoru"
hasla[9]="bez zachodu nie ma miodu"
hasla[10]="bieda z dziećmi bieda i bez dzieci"
hasla[11]="biedna żona taka która ma pijaka"
hasla[12]="biednemu zawsze wiatr w oczy"
hasla[13]="blisko swej jabłoni jabłko pada"
hasla[14]="bliższa koszula ciału"
hasla[15]="bliższa koszula ciału niż kałtan"
hasla[16]="bliższa koszula ciału niż sukmana"
hasla[17]="Bóg bez pracy nic nie daje"
hasla[18]="Bóg dał Bóg wziął"
hasla[19]="Bóg nie opuści kto się nań spuści"
hasla[20]="Bóg pomaga tym co sami sobie pomagają"
hasla[21]="Boga na języku a diabła ma w sercu"
hasla[22]="bogatemu diabeł dzieci kołysze"
hasla[23]="Bogu się kłaniaj a diabła nie gniewaj"
hasla[24]="Bogu służ a diabła nie gniewaj"
hasla[25]="Bogu świeczka a diabłu ogarek"
hasla[26]="boi się jak diabeł święconej wody"
hasla[27]="bój się w styczniu wiosny bo marzec zazdrosny"
hasla[28]="broda mędrcem nie czyni"
hasla[29]="być w Rzymie i nie widzieć papieża"
hasla[30]="było dwóch braci mądrych a trzeci żonaty"
hasla[31]="cała mądrość nie mieści się w jednej głowie"
hasla[32]="cel uświęca środki"
hasla[33]="chcąc poznać przyjaciela trzeba z nim beczkę soli zjeść"
hasla[34]="chcesz córuni podobaj się wprzód mamuni"
hasla[35]="chcesz się dostać do nieba nie żałuj biednym kęsa chleba"
hasla[36]="chleb cudzym nożem krajany - niesmaczny"
hasla[37]="chleb i woda nie ma głoda"
hasla[38]="chleb ma rogi"
hasla[39]="chleb ma rogi nędza nogi"
hasla[40]="chleb płacze gdy go darmo jedzą"
hasla[41]="chleb pracą nabyty bywa smaczny i syty"
hasla[42]="chleb stracił a bułki nie znalazł"
hasla[43]="chleb świętej Agaty od ognia strzeże chaty"
hasla[44]="chleb w drodze nie ciąży"
hasla[45]="chleb piwo i świéca zdobią szlachcica"
hasla[46]="chlebem i solą ludzie ludzi niewolą"
hasla[47]="chłop mowny a kot łowny z głodu nie zemrą"
hasla[48]="chłop się nie przeżegna dopóki piorunu nie usłyszy"
hasla[49]="chłop, co musi rad uczyni"
hasla[50]="chłopa korcem nie mierzą"
hasla[51]="na lata nie mierzą"
hasla[52]="choć już w kwietniu słonko grzeje, nieraz pole śnieg zawieje"
hasla[53]="choćby chleb był rżany byle leżany"
hasla[54]="ciągnie swój do swego"
hasla[55]="cicha woda brzegi rwie"
hasla[56]="ciekawość to pierwszy stopień do piekła"
hasla[57]="cierp ciało skoroś chciało"
hasla[58]="cnota naukę przechodzi"
	
		

var haslo=hasla[numer];
haslo=haslo.toUpperCase();
var dlugosc=haslo.length;
var ile_skuch=0;
var yes= new Audio("yes.wav");
var no= new Audio("no.wav");
var haslo1="";
var haslo2="";
var punkty=new Array(3);
punkty[0]=0;
punkty[1]=0;
punkty[2]=0;
var nastepny_gracz=0;

//Zamiana hasła na -
for(i=0;i<dlugosc;i++)
{
	if(haslo.charAt(i)==" ")haslo1=haslo1+" ";
	
	else haslo1=haslo1+"-";
	
}

function wypisz_haslo()
{
	document.getElementById("plansza").innerHTML=haslo1;
}
function gracze()
	{	
		var zawodnicy="";
		for(j=0;j<3;j++)
		{
			var zawodnik="zaw" +j;
			zawodnicy=zawodnicy+'<div class="gracz" onclick="los()" id="'+zawodnik+'">Gracz '+(j+1)+'<br>'+punkty[j]+'</div>';
		}
		
		document.getElementById("gracze").innerHTML=zawodnicy;
	}
	var liczby=new Array(6);
	liczby[0]=50;
	liczby[1]=100;
	liczby[2]=200;
	liczby[3]=300;
	liczby[4]="400";
	liczby[5]="500";
	//funkcja zliczająca zdobyte punkty
	function kwoty()
	{
		var mamona="";
		for(i=0;i<4;i++)
		{
		var kasa="kas"+i;	
		mamona=mamona+'<div class="kwota" id="'+kasa+'" >'+liczby[i]+'</div>';
		if((i+1)%2==0)mamona=mamona+'<div style="clear:both;"></div>';
		}
		document.getElementById("kwoty").innerHTML=mamona;
	}

window.onload=start;
var litery=new Array(35);
litery[0]="A";
litery[1]="Ą";
litery[2]="B";
litery[3]="C";
litery[4]="Ć";
litery[5]="D";
litery[6]="E";
litery[7]="Ę";
litery[8] = "F";
litery[9] = "G";
litery[10] = "H";
litery[11] = "I";
litery[12] = "J";
litery[13] = "K";
litery[14] = "L";
litery[15] = "Ł";
litery[16] = "M";
litery[17] = "N";
litery[18] = "Ń";
litery[19] = "O";
litery[20] = "Ó";
litery[21] = "P";
litery[22] = "Q";
litery[23] = "R";
litery[24] = "S";
litery[25] = "Ś";
litery[26] = "T";
litery[27] = "U";
litery[28] = "V";
litery[29] = "W";
litery[30] = "X";
litery[31] = "Y";
litery[32] = "Z";
litery[33] = "Ż";
litery[34] = "Ź";




	//Wypisywanie liter
	function start()
{
		var tresc_diva ="";
	
	for (i=0; i<=34; i++)
	{
		var element = "lit" + i;
		tresc_diva = tresc_diva + '<div class="litera" onclick="sprawdz('+i+')" id="'+element+'">'+litery[i]+'</div>';
		if ((i+1) % 7 ==0) tresc_diva = tresc_diva + '<div style="clear:both;"></div>';
	}
	
	document.getElementById("alfabet").innerHTML = tresc_diva;
	wypisz_haslo();
	gracze();
	kwoty();
	ktoryGracz();
	
}
function ktoryGracz()
{
	if(nastepny_gracz==3)
	{
	nastepny_gracz=0}	
	var zawodnik="zaw"+nastepny_gracz;
	document.getElementById(zawodnik).style.background="yellow";
	document.getElementById(zawodnik).style.color="black";
	
	
}
function los(m)
{
	
	
}

	
String.prototype.ustawZnak=function(miejsce,znak)
{
	if(miejsce>this.length-1)return this.toString();
	else return this.substr(0,miejsce)+ znak + this.substr(miejsce + 1);
}


function sprawdz(nr)
{
	var trafiona = false;
	for(i=0;i<dlugosc;i++)
	{
		if(haslo.charAt(i) == litery[nr])
		{
			haslo1=haslo1.ustawZnak(i,litery[nr]);
			trafiona= true;
		}
	}
	if(trafiona==true)
	{	
		yes.play();
		var element= "lit"+ nr;
		document.getElementById(element).style.background="#003300";
		document.getElementById(element).style.color="#00C000";
		document.getElementById(element).style.border="3px solid #00C000";
		document.getElementById(element).style.cursor="default";
		wypisz_haslo();
		kwoty();
		gracze();
		var zawodnik="zaw"+nastepny_gracz;
		document.getElementById(zawodnik).style.background="yellow";
		document.getElementById(zawodnik).style.color="black";
		var m= Math.floor(Math.random()*4);
	var kasa="kas"+m;
	
	document.getElementById(kasa).style.background="blue";
		
	punkty[nastepny_gracz]=punkty[nastepny_gracz]+liczby[m];
		
		
		              
		
	}else
	{	
		no.play();
		var element= "lit"+ nr;
		document.getElementById(element).style.background="#330000";
		document.getElementById(element).style.color="#C00000";
		document.getElementById(element).style.border="3px solid #C00000";
		document.getElementById(element).style.cursor="default";
		document.getElementById(element).setAttribute("onclick",";");
		kwoty();
		gracze();
		nastepny_gracz++;
		if(nastepny_gracz==3)
		{
		nastepny_gracz=0}	
		var zawodnik="zaw"+nastepny_gracz;
		document.getElementById(zawodnik).style.background="yellow";
		document.getElementById(zawodnik).style.color="black";
		
		
	}
	
	//wygrana
	if(haslo==haslo1)
		document.getElementById("alfabet").innerHTML="Tak jest! Podano prawidłowe hasło "+ haslo +
		'<br/><br/><span class="reset" onclick="location.reload()">JESZCZE RAZ</span><br/>'
	if(punkty[0]>punkty[1]){
			if(punkty[0]>punkty[2]){"Wgrywa zawodnik numer 1"
		}else{"Wgrywa zawodnik numer 3"}
		}else{if(punkty[1]>punkty[2]){"Wgrywa zawodnik numer 2"}}
	
	
}
