console.log("Fifth Lesson: Concatenation and Interpolation")
//5.1 Concatenation
console.log( )
console.log("5.1 Concatenation.")
console.log("Rule: To write syntax in the format of Concatenation, you must type your var 's and put a + sign between them")
console.log("Example: Firstname + \" \" + Lastname + \" is \" + age + \" years old and works as a \" + occupation + \".\"")
console.log( )

console.log("Result:")
var Firstname = "Ali"
var Lastname = "Belmaaza"
var age = 29
var occupation = "Quality & Training Specialist - Customer Service"
console.log("Concatenation: " + Firstname + " " + Lastname + " is " + age + " years old and works as a " + occupation + ".")

console.log( )

console.log("More Examples:")
//When I like to chill, I play Gnawa Music, such as "https://www.youtube.com/watch?v=lWK6Nt5tpOU"
console.log("When I like to chill, I play Gnawa Music, such as \"https://www.youtube.com/watch?v=lWK6Nt5tpOU\".")

var Mood = "chill"
var Music = "Gnawa Music"
var MusicLink = "https://www.youtube.com/watch?v=lWK6Nt5tpOU"
console.log("When I like to " + Mood + ", " + "I play " + Music + ", " + "such as " + "\"" + MusicLink + "\".")

var Mood = "feel blue"
var Artist = "Gary Moore"
var Music = "Still Got The Blues"
var MusicLink = "https://www.youtube.com/watch?v=4O_YMLDvvnw"
var MessageToPrint = "When I like to " + Mood + ", " + "I play " + Artist + "," + Music + ": " + "\"" + MusicLink + "\"."
console.log(MessageToPrint)


//5.2 Interpolation
console.log( )
console.log("5.2 Interpolation.")
console.log("Rule: To write syntax in the format of Interpolation, you must type between `` and put the var between ${}")
console.log("example: `When I like to ${Mood}, I play ${Music}, such as ${MusicLink}`")
console.log( )
console.log("Result:")

//When I like to chill, I play Gnawa Music, such as "https://www.youtube.com/watch?v=lWK6Nt5tpOU"
var Mood = "chill"
var Music = "Gnawa Music"
var MusicLink = "https://www.youtube.com/watch?v=lWK6Nt5tpOU"
var MessageToPrint = `When I like to ${Mood}, I play ${Music}, such as ${MusicLink}` 
console.log(MessageToPrint)





