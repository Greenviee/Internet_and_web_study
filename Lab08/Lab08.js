function getUserInput() {
    var userInput = document.getElementById('book-title').value;
    var returnString = "";
    if (userInput.length < 1) returnString = "(empty)";
    else returnString = userInput;
    document.getElementById('bookTitle').textContent = returnString;
    return returnString;
}

function getBookCount() {
    var cntInput = document.getElementById('book-count').value;
    document.getElementById("bookCount").innerHTML = cntInput;
}

function sendQuery() {
    var myKey = "8d9fd6e7f5d76e9d25717314a42da315";
    var mySearchKeyword = getUserInput();
    var request = $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: mySearchKeyword },
        headers: { Authorization: "KakaoAK " + myKey }
    })
    request.done(function (msg) {
        document.getElementById("bookTitleDisplay1").innerHTML = "<strong>" + msg.documents[0].title + "</strong><br><br>";
        document.getElementById('bookImageDisplay1').innerHTML = "<img src='" + msg.documents[0].thumbnail + "'/>";

        document.getElementById("bookTitleDisplay2").innerHTML = "<strong>" + msg.documents[1].title + "</strong><br><br>";
        document.getElementById('bookImageDisplay2').innerHTML = "<img src='" + msg.documents[1].thumbnail + "'/>";
        document.getElementById("bookTitleDisplay3").innerHTML = "<strong>" + msg.documents[2].title + "</strong><br><br>";
        document.getElementById('bookImageDisplay3').innerHTML = "<img src='" + msg.documents[2].thumbnail + "'/>";
    })
    request.fail(function (jqXHR, textStatus) {
        document.write("- failed : " + textStatus + "<br>")
    })
}