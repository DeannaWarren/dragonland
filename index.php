<!DOCTYPE html>
<html>

<head>
	<meta charset="utf-8">
	<!-- <meta http-equiv="X-UA-Compatible" content="IE=edge"> -->
	<!-- jekyll holdover, research? -->
	<meta name="viewport" content="width=device-width, initial-scale=1">
	
	<title></title>
	
	<!-- JQuery CDN -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
	
	<link rel="stylesheet" href="main.css">
</head>
<body>
	
<!-- head above / header below-->

	<header></header>

<!-- header above / div.main below -->

	<div class="main">

		<h1>Dream Dragon Planner</h1>

		<p>Concept: “I’m thinking a program where you put in 1. Dream dragon 2. 1 Parent dragon, and then it gives you all the colors the second parent could be that would possibly give you DD, and would also state the smallest range”</p>


		<h3> Enter Dragons Here </h3>

		<form>
			<h4> Dream Dragon </h4>

				<select name="dd-primary-color" class="colors"></select>

				<select name="dd-secondary-color" class="colors"></select>

				<select name="dd-tertiary-color" class="colors"></select>

			<h4> Parent #1 </h4>

				<select name="p-primary-color" class="colors"></select>

				<select name="p-secondary-color" class="colors"></select>

				<select name="p-tertiary-color" class="colors"></select>

			<input type="submit" name="Submit" />

		</form>

		
		<script type="text/javascript" src="01-dream-dragon.js"></script>

	</div>

<!-- div.main above / footer below -->

	<footer></footer>

<!-- footer above / ending tags below -->

</body>
</html>