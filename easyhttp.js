function easyhttp(){
    this.http = new XMLHttpRequest();
}


// MAKE AN HTTP GET REQUEST
easyhttp.prototype.get = function (url, callback){
    this.http.open('GET', url ,true);
     

    let self = this;
    this.http.onload= function(){
        if(self.http.status === 200){
         callback (null ,self.http.responseText);
        
        }
        else
        {
            callback('Error: ' + self.http.status);
        }
    }

    this.http.send();
}


// MAKE AN HTTP POST REQUEST



// MAKE AN HTTP PUT REQUEST



// MAKE AN HTTP DELETE REQUEST