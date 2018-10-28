let countries = ["Kazakhstan","Russia","England","France"];
let cities_by_country = {"Kazakhstan":["Almaty","Astana","Karagandy"],"Russia":["Moscow","Saint-Petersburg","Kazan"],"England":["London","Manchester","Liverpool"],"France":["Paris","Lyon","Marseille"]};

var select2 = document.getElementById("cities");
var select = document.getElementById("countries");	

for(let i = 0; i<countries.length; i++){
		var option = document.createElement("option");
		option.text = countries[i];
		select.appendChild(option);
	}
	
function gg(){
	
	var cntr = document.getElementById("countries").value;
	var str1="Kazakhstan";
	var str2="Russia";
	var str4="France";
	var str3="England";
	var n1=cntr.localeCompare(str1);
	var n2=cntr.localeCompare(str2);
	var n3=cntr.localeCompare(str3);
	var n4=cntr.localeCompare(str4);
	var length = select2.options.length;
	if(n1==0){
		if(length>=3){
			for (i = 0; i < length; i++) {
				select2.remove(select2.i)
			}
		}
		let d = cities_by_country["Kazakhstan"];
		for(let g = 0; g<d.length; g++){
			var option1 = document.createElement("option");
			option1.text = d[g];
			select2.appendChild(option1);
			}
	}
	if(n2==0){
		if(length>=3){
			for (i = 0; i < length; i++) {
				select2.remove(select2.i)
			}
		}
		let d = cities_by_country["Russia"];
		for(let g = 0; g<d.length; g++){
			var option1 = document.createElement("option");
			option1.text = d[g];
			select2.appendChild(option1);
			}
	}
	if(n3==0){
		if(length>=3){
			for (i = 0; i < length; i++) {
				select2.remove(select2.i)
			}
		}
		let d = cities_by_country["England"];
		for(let g = 0; g<d.length; g++){
			var option1 = document.createElement("option");
			option1.text = d[g];
			select2.appendChild(option1);
			}
	}
	if(n4==0){
		if(length>=3){
			for (i = 0; i < length; i++) {
				select2.remove(select2.i)
			}
		}
		let d = cities_by_country["France"];
		for(let g = 0; g<d.length; g++){
			var option1 = document.createElement("option");
			option1.text = d[g];
			select2.appendChild(option1);
			}		
	}
}

document.querySelector("select").addEventListener("change",gg);

	
