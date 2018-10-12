<script src="js/jquery.min.js"></script>
    <script src="js/owl.carousel.min.js"></script>
    <script type="text/javascript" src="js/smoothscroll.js"></script>
    <script type="text/javascript" src="js/jquery.nav.js"></script>
    <script src="js/main.js"></script>
    <script type="text/javascript" src="js/bootstrap.min.js"></script>
   
 <script>
            window.onscroll = function() {scrollFunction()};
            
            function scrollFunction() {
                if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
                    document.getElementById("myBtn").style.display = "block";
                } else {
                    document.getElementById("myBtn").style.display = "none";
                }
            }
            function topFunction() {
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
            }
            </script>