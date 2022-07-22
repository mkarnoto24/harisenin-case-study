function generateOrderNumber(type = "",orderNumbers = []) {
    // HMS/I/21130001
    let prefix = "";
    switch (type.toLowerCase().trim()) {
      case "school":
        prefix = "HMS";
        break;
      case "webinar":
        prefix = "HSR";
        break;
      default:
        return "UNDEFINED_TYPE"
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

    const indexPrefix = orderNumbers.findIndex((item,i)=>{
      return item.includes(codePrefix)
    })
    console.log(indexPrefix)
    let newCode = "";
    if(indexPrefix !== -1){
      let r = 0,data = []; 
      orderNumbers.map(item=>{
         data.push(+item.slice(-4))
      })
      r =  Math.max(...data)
      console.log(r)
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

  // HMS/VI/21250055 ==> kode atau prefix, VI => bulan dibuat, 21=>tahun buat, 25 => tanngal buat, 0055=>no urut.
  const code = generateOrderNumber("school",["HMS/VII/22220001","HMS/VII/22220002","HMS/VII/22220003"])
  console.log(code)
