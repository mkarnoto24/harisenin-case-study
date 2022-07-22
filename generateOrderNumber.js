function generateOrderNumber(type = "",orderNumbers = []) {
    if(typeof type !== "string"){
      return "UNDEFINED_TYPE"
    }
    // HMS/I/21130001
    let prefix = "";
    switch (type.toLowerCase().trim()) {
      case "bootcamp":
        prefix = "HMS";
        break;
      case "webinar":
        prefix = "HSR";
        break;
      default:
        return "UNDEFINED_TYPE"
        // break;
    }

    let currentDate   = new Date().getDate();
    let currentMonth  = new Date().getMonth();
    let currentYear   = new Date().getFullYear().toString().substring(2);

    let romanCodes = ["I","II","III","IV","V","VI","VII","VIII","IX","X","XI","XII"];

    let codeMonth;
    for (let i = 0; i < romanCodes.length; i++) {
      if (i === currentMonth) {
        codeMonth = romanCodes[i];
      }
    }
    currentDate = currentDate < 10 ? "0" + currentDate : new Date().getDate();
    let codePrefix = prefix + "/" + codeMonth + "/" + currentYear + "" + currentDate;

    console.log(codePrefix)
    let indexPrefix;
    if(Array.isArray(orderNumbers)){
      indexPrefix = orderNumbers.findIndex(item=>{
        return item.slice(0,12) === codePrefix
      })
    }else{
      return "UNDEFINED_TYPE";
    }
    console.log(indexPrefix)
    let newCode = "";
    if(indexPrefix !== -1){
      let r = 0,data = []; 
      orderNumbers.map(item=>{
         if(item.slice(0,3) === "HMS"){
            data.push(+item.slice(-4))
         }
         if(item.slice(0,3) === "HSL"){
            data.push(+item.slice(-4))
         }
         
      })
      r =  Math.max(...data)
      let increment = r + 1;
      increment =
        increment.toString().length === 1
          ? "000" + increment
          : increment.toString().length === 2
          ? "00" + increment
          : increment.toString().length === 3
          ? "0" + increment
          : increment;
      newCode = codePrefix + "" + increment;
    }else{
      newCode = codePrefix + "0001";
    }
    return newCode;
  }
  const code = generateOrderNumber("bootcamp",["HSR/VII/22220001","HSR/VII/22220002"])
  console.log(code)
