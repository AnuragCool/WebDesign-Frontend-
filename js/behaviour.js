$(document).ready(function(){
    var offsets = document.getElementById('hidden-text').getBoundingClientRect();
   var top = offsets.top;
   var left1 = offsets.left;
   var right=offsets.right;




    $('#test').on('mousemove', function (e) {
        $this = $(this);
        $(document).bind('mousemove', function (e) {
            var left = e.pageX - ($this.width()/2);
            var top = e.pageY - ($this.height()/2);
            $('#test').css({
                'left': left + 'px',
          
            });
            if(left>=(left1-20)  && left<right){
                document.getElementById("hidden-text").style.opacity="1";
              
            }
            else if(left>=right || left<left1){
                document.getElementById("hidden-text").style.opacity="0";
            }
        });
    });
    console.log(top,left,right);
    
    
});