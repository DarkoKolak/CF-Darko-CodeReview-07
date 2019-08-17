// All classes

class Location{

	constructor(City,ZIP_code,adress,image){

		this.City = City;
		this.ZIP_code = ZIP_code;
		this.adress = adress;
		this.image = image;
		array_locations.push(this);
		var mseconds = Date.now();

	}
	 render (){
			return `
			<img class = "img-fluid mobile" src = "${this.image}"> <li class="list-group-item"><b> City:</b> ${this.City}</li>  <li class="list-group-item"><b> ZIP Code:</b> ${this.ZIP_code}</li>  <li class="list-group-item"><b>Adress:</b> ${this.adress}</li>`
		}

}

class Event extends Location{

		constructor(EventDate, EventTime, ticket_price,City,ZIP_code,adress,image){

			super(City,ZIP_code,adress,image);
			this.EventDate = EventDate;
			this.EventTime = EventTime;
			this.ticket_price = ticket_price;
			array_events.push(this);
		}

		display(){
			return `<ul class="list-group list-group-flush"> ${super.render()}  <li class="list-group-item"><b>Event Date:</b> ${this.EventDate}</li>  <li class="list-group-item"><b>Event Time:</b> ${this.EventTime}</li>  <li class="list-group-item"><b> Ticket price:</b> ${this.ticket_price}</li>   </ul> `
		}
}


class Restaurant extends Location{

		constructor(type, number, web_adress,City,ZIP_code,adress,image){

			super(City,ZIP_code,adress,image);
			this.type = type;
			this.number = number;
			this.web_adress = web_adress;

			array_restaurants.push(this);
		}

		display(){
			return `<ul class="list-group list-group-flush"> ${super.render()}  <li class="list-group-item"><b>Type:</b> ${this.type}</li>  <li class="list-group-item"><b>Tel. number:</b> ${this.number}</li>  <li class="list-group-item"><b>Web adress: </b>${this.web_adress}</li>   </ul> `
		}
}




// created Variables

var array_events = new Array;
var array_locations = new Array;
var array_restaurants = new Array;

var count_events = 0;
var count_locations = 0;
var count_restaurants = 0;






// All functions which i created!!!
function Eventprint (){
	if (count_events >= array_events.length) {
		return ;
	}
	else{
		$("#2").prepend(`<div class=" col-sm-12 col-md-6 col-lg-3 added "> ${array_events[count_events].display()} </div>`);
		count_events++;
		Eventprint();
	}
}


function Restaurantprint(){
	if (count_restaurants >= array_restaurants.length) {
		return ;
	}
	else{
		$("#3").prepend(`<div class="col-sm-12 col-md-6 col-lg-3 added"> ${array_restaurants[count_restaurants].display()} </div>`);
		count_restaurants++;
		Restaurantprint();
	}
}

function Locationprint(){
	if (count_locations >= array_locations.length) {
		return ;
	}

	else{
		if (array_locations[count_locations + 1] != null) {

			var array = array_locations.slice(count_locations+1);

			if (array.includes(array_locations[count_locations].adress)) {
				count_locations++;
				Locationprint();
			}
			else{
				$("#1").prepend(`<div class="col-sm-12 col-md-6 col-lg-3 added "> ${array_locations[count_locations].render()} </div>`);
				count_locations++;
				Locationprint();
			}
		}
		else{
			var array = array_locations.slice(0,count_locations-1);
			if (array.includes(array_locations[count_locations].adress)) {
				count_locations++;
				Locationprint();
			}
			else{
			$("#1").prepend(`<div class="col-sm-12 col-md-6 col-lg-3 added "> ${array_locations[count_locations].render()} </div>`);
			count_locations++;
			Locationprint();
			}
		}
	}
}

function sortselect(){
	var wert = $("#change").val();
		array_locations.sort(((a,b) => (a.mseconds > b.mseconds) ? 1 : -1));
		array_restaurants.sort(((a,b) => (a.mseconds > b.mseconds) ? 1 : -1));
		array_events.sort(((a,b) => (a.mseconds > b.mseconds) ? 1 : -1));
		count_events = 0;
		count_locations = 0;
		count_restaurants = 0;

	switch(wert){

		case "Ascending on Time of Creation":
		// clear all html
		$(".added").empty();
		//print
		Locationprint();
		Eventprint();
		Restaurantprint();
		break;

		case "Descending on Time of Creation":
				console.log("HIIIIII");
				// clear all html
			$(".added").empty();
			//all counters to 0
			//print
			Locationprint();
			Eventprint();
			Restaurantprint();
		break;

		default:
		alert("please select one of the 2 options to sort the page");
		break;

	}

}






//aditionall
function selecting(){
var value = $("#select").val();
console.log(value);
switch(value){

	case "Location":
	$("#Adding").empty();
	$("#Adding").append(`<div class="form-group col-6">
	<label for="inputDate"> Image</label>
	<input type="text" class="form-control" id="inputImage" placeholder="image/example.jpg">
</div>
<div class="form-group col-6">
	<label for="inputName"> City</label>
	<input type="text" class="form-control" id="inputCity" placeholder="City">
</div>
<div class="form-group col-6">
	<label for="inputTime"> Adress</label>
	<input type="text" class="form-control" id="inputAdress" placeholder="Adress">
</div>
<div class="form-group col-6">
	<label for="inputEmail"> ZIP Code</label>
	<input type="text" class="form-control" id="inputZip" placeholder="ZIP_Code">
</div>
<div class="button col-6">
	<button id="Create" class="btn btn-secondary">Create</button>
</div>`);
		$("#Create").click(createLocation);
	break;

	case "Event":
	$("#Adding").empty();
	$("#Adding").append(`<div class="form-group col-6">
	<label for="inputImage"> Image</label>
	<input type="text" class="form-control" id="inputImage" placeholder="image/example.jpg">
</div>
<div class="form-group col-6">
	<label for="inputCity"> City</label>
	<input type="text" class="form-control" id="inputCity" placeholder="City">
</div>
<div class="form-group col-6">
	<label for="inputAdress"> Adress</label>
	<input type="text" class="form-control" id="inputAdress" placeholder="Adress">
</div>
<div class="form-group col-6">
	<label for="inputZip"> ZIP Code</label>
	<input type="text" class="form-control" id="inputZip" placeholder="ZIP_Code">
</div>
<div class="form-group col-6">
	<label for="inputDate"> Date</label>
	<input type="date" class="form-control" id="inputDate" placeholder="Date">
</div>
<div class="form-group col-6">
	<label for="inputTime"> Time of the Event</label>
	<input type="time" class="form-control" id="inputTime" placeholder="Time">
</div>
<div class="form-group col-6">
	<label for="inputTiket"> Tiket Price</label>
	<input type="text" class="form-control" id="inputTicket" placeholder="Ticket Price">
</div>
<div class="button col-6">
	<button id="Create" class="btn btn-secondary">Create</button>
</div>`);
		$("#Create").click(createEvent);
	break;
	case "Restaurant":
	$("#Adding").empty();
	$("#Adding").append(`<div class="form-group col-6">
	<label for="inputImage"> Image</label>
	<input type="text" class="form-control" id="inputImage" placeholder="image/example.jpg">
</div>
<div class="form-group col-6">
	<label for="inputCity"> City</label>
	<input type="text" class="form-control" id="inputCity" placeholder="City">
</div>
<div class="form-group col-6">
	<label for="inputAdress"> Adress</label>
	<input type="text" class="form-control" id="inputAdress" placeholder="Adress">
</div>
<div class="form-group col-6">
	<label for="inputZip"> ZIP Code</label>
	<input type="text" class="form-control" id="inputZip" placeholder="ZIP_Code">
</div>
<div class="form-group col-6">
	<label for="inputType"> Type</label>
	<input type="text" class="form-control" id="inputType" placeholder="Type of Restaurant">
</div>
<div class="form-group col-6">
	<label for="inputWeb"> Web Adress</label>
	<input type="text" class="form-control" id="inputWeb" placeholder="Web Adress">
</div>
<div class="form-group col-6">
	<label for="inputNumber"> Tel. Number</label>
	<input type="text" class="form-control" id="inputNumber" placeholder="Tel. Number">
</div>
<div class="button col-6">
	<button id="Create" class="btn btn-secondary">Create</button>
</div>`);
	$("#Create").click(createRestaurant);
	break;
	default:
	alert("Please choose Event, Restaurant or Location to add to the Page");
	break;


}
}



function createRestaurant(){

var objekt = new Restaurant(`${$("#inputType").val()}`,`${$("#inputNumber").val()}`,`${$("#inputWeb").val()}`,`${$("#inputCity").val()}`,`${$("#inputZip").val()}`,`${$("#inputAdress").val()}`,`${$("#inputImage").val()}`);
	Restaurantprint();
}


function createEvent(){
	var objekt = new Event(`${$("#inputDate").val()}`,`${$("#inputTime").val()}`,`${$("#inputTicket").val()}`,`${$("#inputCity").val()}`,`${$("#inputZip").val()}`,`${$("#inputAdress").val()}`,`${$("#inputImage").val()}`);
	Eventprint();
}

function createLocation(){
	count_locations = 0;
	$("#1").empty();
	var objekt = new Location(`${$("#inputCity").val()}`,`${$("#inputZip").val()}`,`${$("#inputAdress").val()}`,`${$("#inputImage").val()}`);
	Locationprint();
}







var Vienna = new Location ( "Vienna",1200, "Brigittaplatz 14", "images/vienna.jpg");
var Vienna1 = new Location ( "Vienna",1200, "Brigittaplatz 12", "images/vienna.jpg");
var Vienna2 = new Location ( "Vienna",1200, "Brigittaplatz 10", "images/vienna.jpg");

var party = new Event ("21.1.1996","17:00",25,"Zenica",72000,"Aska Borica 1","images/vienna.jpg");
var party1 = new Event ("21.1.1996","17:00",25,"Zenica",72000,"Aska Borica ","images/prag.jpg");
var party2 = new Event ("21.1.1996","17:00",25,"Zenica",72000,"Aska Borica 11","images/zenica1.jpg");


var pizza = new Restaurant("Italian","+434343432222","http//darko.com","Vienna",1200,"Kettenvrückengasse 1","images/vienna.jpg");
var pizza1 = new Restaurant("Italian","+434343432222","http//darko.com","Vienna",1200,"Kettenvrückengasse 12","images/zenica1.jpg");
var pizza2 = new Restaurant("Italian","+434343432222","http//darko.com","Vienna",1200,"Kettenvrückengasse 123","images/prag.jpg");

Locationprint();
Eventprint();
Restaurantprint();

$("#select").change(selecting);
$("#change").change(sortselect);