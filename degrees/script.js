function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

function buttonclicked(){
    readTextFile("https://gist.githubusercontent.com/lukegehron/350968e48c7a6191f7b2369f8be24680/raw/d41cbe9e4881dcc7f574b6e5a0c9b3aaba26cbd0/resume.json", function(text){
    
    var data = JSON.parse(text);
    var table = document.getElementById("myTable");
        
        for(let i = 0; i < data.education.length; i++){
            var row = table.insertRow(i+1);
            
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            var cell5 = row.insertCell(4);


            cell1.innerHTML = data.education[i].institution;
            cell2.innerHTML = data.education[i].studyType;
            cell3.innerHTML = data.education[i].area;
            cell4.innerHTML = data.education[i].startDate;
            cell5.innerHTML = data.education[i].endDate;
            
        }
    });
}

