var canvas = document.getElementById('canvas'),
context = canvas.getContext('2d');

make_base();

function make_base()
{
  base_image = new Image();
  base_image.src = 'guildguitar.png';
  base_image.onload = function(){
    context.drawImage(base_image, 100, 100);
  }
 };

$('#axechoice').on("click", function(){
	base_image.src = 'ibanezguitar.png';
});