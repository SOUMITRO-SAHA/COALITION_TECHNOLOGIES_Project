// First Function
function tab1() {
    $(".eventScheduleContainer1").css("display", "block");
    $(".eventScheduleContainer2").css("display", "none");
    // Changing the Active Class
    $("#btn-1").addClass("active");
    $("#btn-2").removeClass("active");

}
function tab2() {
    $(".eventScheduleContainer1").css("display", "none");
    $(".eventScheduleContainer2").css("display", "block");
    // Changing the Active Class
    $("#btn-1").removeClass("active");
    $("#btn-2").addClass("active");
}