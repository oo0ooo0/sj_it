$(function () {
    $(".menu-trigger").on("click", function () {
        console.log("hi");
        $(".menu-trigger").toggleClass("active");
    });

    /* menu start --------------------------*/
    var navOver = false;
    var menuOver = false;
    var menuNum = 6;
    var selectNum;

    for(i=1; i<=menuNum; i++){
        $("#menu"+i).on("mouseover", function (e) {
            menuOver = true;
            console.log(this.getAttribute("id").slice(4,5));
            selectNum = this.getAttribute("id").slice(4,5);
            $("#menu"+selectNum+" a").css("color", "orangered");  
        });
        $("#menu"+i).on("mouseout", function () {
            menuOver = false;
            if (navOver) {
                $("#menu"+selectNum+" a").css("color", "black");
            } else {
                $("#menu"+selectNum+" a").css("color", "white");
            }
        });
    }
    
    // nav
    $("nav").on("mouseover", function () {
        navOver = true;
        if (menuOver) {
            for(i=1; i<=menuNum; i++){
                $("#menu"+i+" a").css("color", "black");
            }
            $("#menu"+selectNum+" a").css("color", "orangered");
        } else {
            for(i=1; i<=menuNum; i++){
                $("#menu"+i+" a").css("color", "black");
            }
        }
    });
    $("nav").on("mouseout", function () {
        navOver = false;
        /*
        $("#menu1 a").css("color", "white");
        $("#menu2 a").css("color", "white");
        $("#menu3 a").css("color", "white");
        */
        for(i=1; i<=menuNum; i++){
            $("#menu"+i+" a").css("color", "white");
        }
    });
    /* menu end -------------------------- */
});
