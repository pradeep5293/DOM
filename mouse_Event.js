var div1=document.getElementById('outer');
div1.addEventListener('mouseover',function(){
    console.log("Mouse Over");
});

div1.addEventListener('mouseout',function(){
    console.log("Mouse Out");
});

var searchInput=document.getElementById('search');
// searchInput.addEventListener('keypress',function(){
//     console.log("key Pressed");
// });

searchInput.addEventListener('keypress',function(event){
    console.log("key Down",event.keyCode);
})