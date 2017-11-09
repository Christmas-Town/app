function main() {
    enableedit();
    $("vertline").height($("#note").height()-$("#topic").height())
    // $(".edit").attr('oninput', 'noempty()');
}

// $('#note').bind('resize', function(){
//         $("vertline").height($("#note").height()-$("#topic").height())
//     });
    
new ResizeSensor(jQuery('#note'), function() {
    $("vertline").height($("#note").height()-$("#topic").height());
});

main();

