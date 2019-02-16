window.onload = function (e) {
    
    // https://developers.line.me/ja/reference/liff/#initialize-liff-app
    liff.init(function (data) {
        getProfile();
        initializeApp(data);
    });

    
    // https://developers.line.me/ja/reference/liff/#liffclosewindow()
    /*document.getElementById('closewindowbutton').addEventListener('click', function () {
        liff.closeWindow();
    });*/

    
    // https://developers.line.me/ja/reference/liff/#liffopenwindow()
    /*document.getElementById('openwindowbutton').addEventListener('click', function () {
        liff.openWindow({
            url: 'https://line.me'
        });
    });

    document.getElementById('openwindowexternalbutton').addEventListener('click', function () {
        liff.openWindow({
            url: 'https://line.me',
            external: true
        });
    });*/

  
    document.getElementById('sendmessagebutton').addEventListener('click', function () {
        // https://developers.line.me/ja/reference/liff/#liffsendmessages()
        liff.sendMessages([{
            type: 'text',
            text: "loan request has been send to the loan department"
        }]).then(function () {
            window.alert("Request Succeeded");
            liff.closeWindow();
        }).catch(function (error) {
            window.alert("Error sending message: " + error);
            liff.closeWindow();
        });
    });
};

function getProfile(){
    // https://developers.line.me/ja/reference/liff/#liffgetprofile()
    liff.getProfile().then(function (profile) {
        /*document.getElementById('useridprofilefield').textContent = profile.userId;
        document.getElementById('displaynamefield').textContent = profile.displayName;

        var profilePictureDiv = document.getElementById('profilepicturediv');
        if (profilePictureDiv.firstElementChild) {
            profilePictureDiv.removeChild(profilePictureDiv.firstElementChild);
        }
        var img = document.createElement('img');
        img.src = profile.pictureUrl;
        img.alt = "Profile Picture";
        img.width = 200;
        profilePictureDiv.appendChild(img);

        document.getElementById('statusmessagefield').textContent = profile.statusMessage;*/
    }).catch(function (error) {
        window.alert("Error getting profile: " + error);
    });
}

function initializeApp(data) {
    /*document.getElementById('languagefield').textContent = data.language;
    document.getElementById('viewtypefield').textContent = data.context.viewType;
    document.getElementById('useridfield').textContent = data.context.userId;
    document.getElementById('utouidfield').textContent = data.context.utouId;
    document.getElementById('roomidfield').textContent = data.context.roomId;
    document.getElementById('groupidfield').textContent = data.context.groupId;*/
}