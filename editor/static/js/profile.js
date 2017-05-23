var saveProfile = function() {
    // Saves user profile to his directory
    $('#saveProfileButton').click(function(event) {
        var $name = $('#profName').val();
        var $addr = $('#profAddr').val();
        var $email = $('#profEmail').val();
        var $tel = $('#profTel').val();
        var $dob = $('#profDate').val();

        var $pass1 = $('#profPass1').val();
        var $pass2 = $('#profPass2').val();
        return $.ajax({
            method: 'POST',
            url: "updateProfile",
            data: {
                'name': $name,
                'addr': $addr,
                'email': $email,
                'tel': $tel,
                'dob': $dob,
                'pass1': $pass1,
                'pass2': $pass2
            },
            success: function(data) {
                //this gets called when server returns an OK response
                //now remove menu item from tree
                $('#profAlert').text(data);
            },
            error: function(data) {
                $('#profAlert').text(data.responseText);
            }
        });

    });
};

function getUserProfile(){
    //gets user profile from his directory
    return $.ajax({
        method: 'POST',
        url: "getProfile",
        data: {},
        success: function(data) {
            //this gets called when server returns an OK response
            //now remove menu item from tree
            $('#profAlert').text(data);
        },
        error: function(data) {
            $('#profAlert').text('Error fetching profile: ' + data.responseText);
        }
    });
}

$(document).ready(function() {
    // Load profile data
    getUserProfile();
});

$(document).on('click', "#saveProfileButton", saveProfile);
