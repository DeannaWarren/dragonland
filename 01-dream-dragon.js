
var dragonColors = {
	raw: ["Maize","Cream","Antique","White","Moon","Ice","Orca","Platinum","Silver","Dust","Grey","Smoke","Gloom","Lead","Shale","Flint","Charcoal","Coal","Oilslick","Black","Obsidian","Eldritch","Midnight","Shadow","Blackberry","Mulberry","Plum","Thistle","Fog","Mist","Lavender","Heather","Purple","Orchid","Amethyst","Nightshade","Violet","Grape","Royal","Eggplant","Iris","Storm","Twilight","Indigo","Sapphire","Navy","Cobalt","Ultramarine","Blue","Periwinkle","Lapis","Splash","Cornflower","Sky","Stonewash","Overcast","Steel","Denim","Abyss","Phthalo","Azure","Caribbean","Teal","Cerulean","Cyan","Robin","Aqua","Turquoise","Spruce","Pistachio","Seafoam","Mint","Jade","Spearmint","Thicket","Peacock","Emerald","Shamrock","Jungle","Hunter","Forest","Camo","Algae","Swamp","Avocado","Green","Fern","Mantis","Pear","Leaf","Radioactive","Honeydew","Peridot","Charteuse","Spring","Crocodile","Olive","Murk","Moss","Goldenrod","Amber","Honey","Lemon","Yellow","Grapefruit","Banana","Sanddollar","Flaxen","Ivory","Buttercup","Gold","Metals","Marigold","Sunshine","Saffron","Sunset","Peach","Cantaloupe","Orange","Bronze","Terracotta","Carrot","Fire","Pumpkin","Tangerine","Cinnamon","Caramel","Sand","Tan","Beige","Stone","Taupe","Slate","Driftwood","Latte","Dirt","Clay","Sable","Umber","Soil","Hickory","Tarnish","Ginger","Brown","Chocolate","Auburn","Copper","Rust","Tomato","Vermillion","Ruby","Cherry","Crimson","Garnet","Sanguine","Blood","Maroon","Berry","Red","Strawberry","Cerise","Carmine","Brick","Coral","Blush","CottonCandy","Watermelon","Magenta","Fuschia","Raspberry","Wine","Mauve","Pink","Bubblegum","Rose","Pearl"],
	hex: [["Maize","#FFFDEA"],["Cream","#FFEFDC"],["Antique","#D8D6CD"],["White","#FFFFFF"],["Moon","#D8D7D8"],["Ice","#F1F3FF"],["Orca","#E1DFFF"],["Platinum","#C8BECE"],["Silver","#BBBABF"],["Dust","#9D9D9F"],["Grey","#808080][Smoke","#9494A9"],["Gloom","#545365"],["Lead","#413C40"],["Shale","#4D484F"],["Flint","#636268"],["Charcoal","#555555"],["Coal","#4B4946"],["Oilslick","#352C27"],["Black","#333333"],["Obsidian","#1D2224"],["Eldritch","#252A24"],["Midnight","#392D43"],["Shadow","#292B38"],["Blackberry","#4C2A4F"],["Mulberry","#6E235D"],["Plum","#863290"],["Thistle","#8F7C8B"],["Fog","#A794B2"],["Mist","#E1CDFE"],["Lavender","#CCA4E0"],["Heather","#9778BE"],["Purple","#A261CF"],["Orchid","#DA4FFF"],["Amethyst","#993BD1"],["Nightshade","#7930B5"],["Violet","#643F9C"],["Grape","#580FC0"],["Royal","#4D2C89"],["Eggplant","#3F2B66"],["Iris","#525195"],["Storm","#757ADB"],["Twilight","#484AA1"],["Indigo","#2D237A"],["Sapphire","#0D0A5B"],["Navy","#212B5F"],["Cobalt","#013485"],["Ultramarine","#1C51E7"],["Blue","#324BA9"],["Periwinkle","#4866D5"],["Lapis","#2F83FF"],["Splash","#6394DD"],["Cornflower","#76A8FF"],["Sky","#AEC8FF"],["Stonewash","#7895C1"],["Overcast","#444F69"],["Steel","#556979"],["Denim","#2F4557"],["Abyss","#0D1E25"],["Phthalo","#0B2D46"],["Azure","#0A3D67"],["Caribbean","#0086CE"],["Teal","#2B768F"],["Cerulean","#00B4D5"],["Cyan","#00FFF1"],["Robin","#9AEAEF"],["Aqua","#72C4C4"],["Turquoise","#3CA2A4"],["Spruce","#8DBCB4"],["Pistachio","#E2FFE6"],["Seafoam","#B2E2BD"],["Mint","#9AFFC7"],["Jade","#61AB89"],["Spearmint","#148E67"],["Thicket","#005D48"],["Peacock","#1F483A"],["Emerald","#20603F"],["Shamrock","#236825"],["Jungle","#1E361A"],["Hunter","#1E2716"],["Forest","#425035"],["Camo","#51684C"],["Algae","#97AF8B"],["Swamp","#687F67"],["Avocado","#567C34"],["Green","#629C3F"],["Fern","#7ECE73"],["Mantis","#8BFF9D"],["Pear","#8ECE56"],["Leaf","#A5E32D"],["Radioactive","#C6FF00"],["Honeydew","#D1E572"],["Peridot","#E8FCB4"],["Charteuse","#B4CD3D"],["Spring","#A9A032"],["Crocodile","#828335"],["Olive","#697135"],["Murk","#4B4420"],["Moss","#7E7645"],["Goldenrod","#BEA55D"],["Amber","#C18E1B"],["Honey","#D1B300"],["Lemon","#FFE63B"],["Yellow","#F9E255"],["Grapefruit","#F7FF6F"],["Banana","#FFEC80"],["Sanddollar","#EDE8B0"],["Flaxen","#FDE9AC"],["Ivory","#FFD297"],["Buttercup","#F6BF6C"],["Gold","#E8AF49"],["Metals","#D1B045"],["Marigold","#FFB53C"],["Sunshine","#FA912B"],["Saffron","#FF8500"],["Sunset","#FFA147,[Peach","#FFB576"],["Cantaloupe","#FF984F"],["Orange","#D5602B"],["Bronze","#B2560D"],["Terracotta","#B24407"],["Carrot","#FF5500"],["Fire","#EF5C23"],["Pumpkin","#FF6841"],["Tangerine","#FF7360"],["Cinnamon","#C15A39"],["Caramel","#C47149"],["Sand","#B27749"],["Tan","#C3996F"],["Beige","#CABBA2"],["Stone","#827A64"],["Taupe","#6D675B"],["Slate","#564D48"],["Driftwood","#766259"],["Latte","#977B6C"],["Dirt","#774840"],["Clay","#603E3D"],["Sable","#57372C"],["Umber","#301E1A"],["Soil","#5A4534"],["Hickory","#72573A"],["Tarnish","#855B33][Ginger","#91532A"],["Brown","#8E5B3F"],["Chocolate","#563012"],["Auburn","#7B3C1D"],["Copper","#A44B28"],["Rust","#8B3220"],["Tomato","#BA311C"],["Vermillion","#E22D18"],["Ruby","#CE000D"],["Cherry","#AA0024"],["Crimson","#850012"],["Garnet","#581014"],["Sanguine","#2D0102"],["Blood","#451717"],["Maroon","#652127"],["Berry","#8C272D"],["Red","#C1272D"],["Strawberry","#DF3236"],["Cerise","#A12928"],["Carmine","#B13A3A"],["Brick","#9A534D"],["Coral","#CC6F6F"],["Blush","#FEA0A0"],["CottonCandy","#EB799A"],["Watermelon","#DB518D"],["Magenta","#E934AA"],["Fuschia","#E7008B"],["Raspberry","#8A024A"],["Wine","#4D0F28"],["Mauve","#9C4975"],["Pink","#E77FBF"],["Bubblegum","#F5A9FF"],["Rose","#FFD6F6"],["Pearl","#FBEDFA"]]
};

$( document ).ready(function() {
	fillFormOptions();
	bindListeners();
});

var bindListeners = function(){
	$('form').submit(displayResults);
};

var displayResults = function(event){
	event.preventDefault();
	var rawData = $(this).serialize();
	var rawData = rawData.split("&");
	var dataholder = {};
	rawData.forEach(function(value){
		var thisvar = value.split("=");
		dataholder[thisvar[0]] = thisvar[1];
	})
	var results = ["<h2> Your Input </h2> <p> Dream Dragon: ",
		dataholder.dd1,
		" / ",
		dataholder.dd2,
		" / ",
		dataholder.dd3,
		"</p> <p> Parent 1: ",
		dataholder.p1,
		" / ",
		dataholder.p2,
		" / ",
		dataholder.p3,
		"</p>"].join("")
	$("#results").html(results)
};

var fillFormOptions = function(){
	var options = OptionsHtml(dragonColors.raw);
	$("select.colors").html(options);
};

var OptionsHtml = function(array){
	var colorOptions = "";
	array.forEach(function(value){
		colorOptions += "<option value="+ value +"> " + value + "</option>";
	});
	return colorOptions;
};




// ========================================
// ========================================
// ========================================

// quick way to spot test JQuery functions
var testingTesting = function(){
	$("body").css("background-color","orange");
}