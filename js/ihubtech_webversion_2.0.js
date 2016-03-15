var ihubtechapp = angular
                        .module("ihubtechModule", [])
                        .controller("ihubController", function($scope) {
                            $scope.title = "iHub Technologies | A Web Development Company in Hyderabad";
                            $scope.iHubStyles = "styles.html";
                            $scope.defaultPage = "homepage.html";
                            $scope.iHubHeader = "header.html";
                            $scope.iHubFooter = "footer.html";
                            $scope.iHubHome = "homepage.html";
                            $scope.iHubEcommerce = "ihub-technologies-ecommerce-solutions.html";
                            $scope.iHubPortfolio = "ihub-technologies-portfolio.html";
                            $scope.iHubAbout = "ihub-technologies-about-us.html";
                            $scope.iHubHealthCare = "ihub-technologies-health-care.html";
                            $scope.iHubContactUs = "ihub-technologies-contact-us.html";
                            
                            $scope.viewPage = function(pageName) {
                                $scope.defaultPage = pageName;
                            }
                        });



$(document).ready(function(){
    $('.blockFont .row div').click(function(e){
         e.stopPropagation();
         var goTo = $(this).data('slide-to');
         $('#seriesCarousel .carousel-inner .item').each(function(index){
             if($(this).data('id') == goTo){
                 goTo = index;
                 return false;
             } 
         });            
        $('#seriesCarousel').carousel(goTo); 
    });
    
    var documentHeight = $(document).height();
    var documentWidth = $(document).width();
    
    var ihubCustomScrollBarHeight = parseInt(documentHeight)-150;
    ihubCustomScrollBarHeight = ihubCustomScrollBarHeight+"px";
    //console.log(ihubCustomScrollBarHeight);
    $(".ihubCustomScrollBar").css("height", ihubCustomScrollBarHeight); 

	
 
});




