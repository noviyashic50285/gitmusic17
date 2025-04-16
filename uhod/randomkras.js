const animation = anime.timeline({
targets: '.text',
easeing: 'easeInOutExpo', 
loop: true
})                
animation
.add({ 
rotate : function(){
return anime.random(-360, 360)
},
translateX : function(){
return anime.random(-500, 500)
},
translateY : function(){
return anime.random(-500, 500)
},
delay: 1500,
duration: 5000,
delay: anime.stagger(20), 
delay: 15500,
})
.add({ 
rotate : 0,
translateX : 0,
translateY : 0,
duration: 5000,
delay: anime.stagger(20), 
delay: 2500,
});
