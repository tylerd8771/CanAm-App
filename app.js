var express             = require("express"),
    app                 = express(),
    bodyParser          = require("body-parser"),
    colors              = require("colors")
   
    // path				= require("path"),
    // port 				= 3000
    
app.use(bodyParser.json());    
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

colors.setTheme({
	silly: 'rainbow',
	input: 'grey',
	verbose: 'cyan',
	prompt: 'grey',
	info: 'green',
	data: 'grey',
	help: 'cyan',
	warn: 'yellow',
	debug: 'blue',
	error: 'red'
});


 // Main Routes  \\
// ============== \\
app.get("/", function(req, res){
    res.render("landing");
});

app.get("/league_news", function(req, res){
    res.render("league_news");
});

app.get("/rules_regulations", function(req, res) {
    res.render("rules_regulations");
});

app.get("/staff", function(req, res) {
    res.render("staff");
});

app.get("/register", function(req, res){
	res.render("register");
});



 // Team Pages \\
// ===========  \\
app.get("/teams/Anaheim", function(req, res){
	res.render("teams/Anaheim")
})

app.get("/teams/Arizona", function(req, res){
	res.render("teams/Arizona")
})

app.get("/teams/Boston", function(req, res){
	res.render("teams/Boston")
})

app.get("/teams/Carolina", function(req, res){
	res.render("teams/Carolina")
})

app.get("/teams/Chicago", function(req, res){
	res.render("teams/Chicago")
})

app.get("/teams/Dallas", function(req, res){
	res.render("teams/Dallas")
})

app.get("/teams/Pittsburgh", function(req, res){
	res.render("teams/Pittsburgh")
})

app.get("/teams/Toronto", function(req, res){
	res.render("teams/Toronto")
})

app.get("/teams/Detroit", function(req, res){
	res.render("teams/Detroit")
})

app.get("/teams/Edmonton", function(req, res){
	res.render("teams/Edmonton")
})

 // Standings Pages\\
//==================\\

app.get("/standings/league_standings", function(req, res){
	res.render("standings/league_standings");
});

app.get("/standings/conference_standings", function(req, res){
	res.render("standings/conference_standings");
});


 // Stat Central \\
// ============== \\
app.get("/stats/forward_stats", function(req, res){
	res.render("stats/forward_stats");
});

app.get("/stats/defender_stats", function(req, res){
	res.render("stats/defender_stats");
});

app.get("/stats/goalie_stats", function(req, res){
	res.render("stats/goalie_stats");
});



// app.listen(3000);
// console.log("The Server Is Running");
app.listen(process.env.PORT, process.env.IP, function(){
    console.log(colors.warn("The Server Has Been Started!"));
});