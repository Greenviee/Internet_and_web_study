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
    cntInput = parseInt(cntInput);
    return cntInput;
}

function sendQuery() {
    var mySearchKeyword = document.getElementById('bookTitle').textContent;
    var cntInput = document.getElementById("bookCount").innerHTML;
    if ((mySearchKeyword === '(empty)' || mySearchKeyword.length == 0) || cntInput.length == 0) {
        alert("Not enough arguments given");
    }
    else {
        var myKey = "8d9fd6e7f5d76e9d25717314a42da315";
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
        cntInput = parseInt(cntInput);
        if (cntInput === 1) {
            document.getElementById('bookshelf').style.display = 'table';
            document.getElementById('first').style.display = 'table-row';
            document.getElementById('second').style.display = 'none';
            document.getElementById('third').style.display = 'none';
        }
        else if (cntInput === 2) {
            document.getElementById('bookshelf').style.display = 'table';
            document.getElementById('first').style.display = 'table-row';
            document.getElementById('second').style.display = 'table-row';
            document.getElementById('third').style.display = 'none';
        }
        else {
            document.getElementById('bookshelf').style.display = 'table';
            document.getElementById('first').style.display = 'table-row';
            document.getElementById('second').style.display = 'table-row';
            document.getElementById('third').style.display = 'table-row';
        }
    }
}