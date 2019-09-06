
//  skapar en div tag
var div1 = document.createElement("div");
    div1.setAttribute("id", "div1");        // skapar id på div taggen
    document.body.appendChild(div1);        // lägger in div i bodyn
    
// skapar en p tag
var p = document.createElement("p");

// skapar en textNode med mitt namn
var myName = document.createTextNode("Fredrik Byström");

    // lägger textNode i p tagen och skriver ut i bodyn
    document.getElementById("div1").appendChild(myName);    
    div1.appendChild(p);
    p.appendChild(myName);
    document.body.appendChild(div1);

// skapar en ny div som får id div2 och skrivs ut i bodyn
var div2 = document.createElement("div");
    div2.setAttribute("id", "div2");
    document.body.appendChild(div2);

// skapar en p tag
var para = document.createElement("p");         

// skapar en array med bra saker
var iArray = ["Sova", "Bada", "Resa", "Äta"];
var myArray = document.createTextNode(iArray);  // lägger array i en textNode

    // lägger i array i div och p
    document.getElementById("div2").appendChild(myArray);
    para.appendChild(myArray);
    div2.appendChild(para);
