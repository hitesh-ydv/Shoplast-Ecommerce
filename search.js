let names = [
  "iPhone 14", "iPhone 14 Plus", "iPhone 14 Pro", "iPhone 14 Pro Max",
  "iPhone 13", "iPhone 13 mini", "iPhone 13 Pro", "iPhone 13 Pro Max",
  "iPhone 12", "iPhone 12 mini", "iPhone 12 Pro", "iPhone 12 Pro Max",
  "iPhone 11", "iPhone 11 Pro", "iPhone 11 Pro Max",
  "iPhone SE (2022)", "iPhone SE (2020)", "iPhone SE (2016)",
  "iPhone X", "iPhone XR", "iPhone XS", "iPhone XS Max",
  "iPhone 8", "iPhone 8 Plus",
  "iPhone 7", "iPhone 7 Plus",
  "iPhone 6", "iPhone 6 Plus", "iPhone 6s", "iPhone 6s Plus",
  "iPhone 5", "iPhone 5c", "iPhone 5s",
  "iPhone 4", "iPhone 4s",
  "iPhone 3G", "iPhone 3GS",
  "iPhone",

  "Galaxy S22", "Galaxy S22+", "Galaxy S22 Ultra",
  "Galaxy S21", "Galaxy S21+", "Galaxy S21 Ultra",
  "Galaxy S20", "Galaxy S20+", "Galaxy S20 Ultra",
  "Galaxy S10", "Galaxy S10+", "Galaxy S10e", "Galaxy S10 Lite",
  "Galaxy S9", "Galaxy S9+",
  "Galaxy S8", "Galaxy S8+",
  "Galaxy S7", "Galaxy S7 Edge",

  "Galaxy Note 20", "Galaxy Note 20 Ultra",
  "Galaxy Note 10", "Galaxy Note 10+", "Galaxy Note 10 Lite",
  "Galaxy Note 9",
  "Galaxy Note 8",
  "Galaxy Note 7",
  "Galaxy Note 5",

  // OnePlus Number Series
  "OnePlus 11", "OnePlus 11R",
  "OnePlus 10 Pro", "OnePlus 10T",
  "OnePlus 9", "OnePlus 9 Pro", "OnePlus 9R",
  "OnePlus 8", "OnePlus 8 Pro", "OnePlus 8T",
  "OnePlus 7", "OnePlus 7 Pro", "OnePlus 7T", "OnePlus 7T Pro",
  "OnePlus 6", "OnePlus 6T",
  "OnePlus 5", "OnePlus 5T",
  "OnePlus 3", "OnePlus 3T",
  "OnePlus 2",
  "OnePlus One",

  // OnePlus Nord Series
  "OnePlus Nord",
  "OnePlus Nord 2",
  "OnePlus Nord CE",
  "OnePlus Nord CE 2",
  "OnePlus Nord CE 2 Lite",
  "OnePlus Nord N10",
  "OnePlus Nord N100",
  "OnePlus Nord N200",
  
  // OnePlus X Series
  "OnePlus X",

   // Samsung
   "Samsung QN90A Neo QLED",
   "Samsung QN85A Neo QLED",
   "Samsung The Frame",
   "Samsung TU8000",
   "Samsung Q60T",
 
   // LG
   "LG C1 OLED",
   "LG G1 OLED",
   "LG CX OLED",
   "LG NanoCell 90 Series",
   "LG UP8000",
 
   // Sony
   "Sony A90J OLED",
   "Sony X90J",
   "Sony X85J",
   "Sony A8H OLED",
   "Sony X800H",
 
   // Vizio
   "Vizio OLED",
   "Vizio P-Series Quantum",
   "Vizio M-Series Quantum",
   "Vizio V-Series",
   "Vizio D-Series",
 
   // TCL
   "TCL 6-Series",
   "TCL 5-Series",
   "TCL 4-Series",
   "TCL 3-Series",
   
   // Hisense
   "Hisense U8G",
   "Hisense U7G",
   "Hisense H9G",
   "Hisense H8G",
   "Hisense H6570G",
 
   // Panasonic
   "Panasonic HZ2000 OLED",
   "Panasonic HZ1500 OLED",
   "Panasonic HX940",
   "Panasonic GX800",
   "Panasonic GX700",
 
   // Philips
   "Philips OLED+936",
   "Philips OLED806",
   "Philips PUS8506",
   "Philips PUS7906",
   "Philips PUS7506",
 
   // Sharp
   "Sharp Aquos N7000",
   "Sharp Aquos N8000",
   "Sharp Aquos 4K Ultra HD",
   "Sharp Roku TV",
   "Sharp LC-43N7000U",
 
   // Toshiba
   "Toshiba Fire TV",
   "Toshiba C350 Series",
   "Toshiba M550 Series",
   "Toshiba LF621U19",
   "Toshiba 32LF221U19",

   // Apple
  "Apple AirPods Pro",
  "Apple AirPods (3rd generation)",
  "Apple AirPods Max",
  "Apple AirPods (2nd generation)",
  "Apple Beats Studio3",
  "Apple Beats Solo Pro",
  "Apple Beats Powerbeats Pro",
  
  // Sony
  "Sony WH-1000XM4",
  "Sony WH-1000XM3",
  "Sony WF-1000XM4",
  "Sony WF-1000XM3",
  "Sony WH-CH710N",
  "Sony WF-SP800N",
  
  // Bose
  "Bose QuietComfort 45",
  "Bose QuietComfort 35 II",
  "Bose Noise Cancelling Headphones 700",
  "Bose SoundSport Free",
  "Bose SoundSport Wireless",
  
  // Sennheiser
  "Sennheiser Momentum 3",
  "Sennheiser Momentum 2",
  "Sennheiser HD 450BT",
  "Sennheiser PXC 550-II",
  "Sennheiser CX 400BT",
  
  // JBL
  "JBL Tune 750BTNC",
  "JBL Live 650BTNC",
  "JBL Endurance Peak II",
  "JBL Reflect Flow",
  "JBL Free X",
  
  // Jabra
  "Jabra Elite 85h",
  "Jabra Elite 75t",
  "Jabra Elite 65t",
  "Jabra Elite Active 75t",
  "Jabra Move Style Edition",
  
  // Samsung
  "Samsung Galaxy Buds Pro",
  "Samsung Galaxy Buds Live",
  "Samsung Galaxy Buds+",
  "Samsung Galaxy Buds 2",
  
  // Bang & Olufsen
  "Bang & Olufsen Beoplay H9",
  "Bang & Olufsen Beoplay E8",
  "Bang & Olufsen Beoplay H4",
  "Bang & Olufsen Beoplay H8",
  
  // Anker
  "Anker Soundcore Life Q30",
  "Anker Soundcore Liberty Air 2 Pro",
  "Anker Soundcore Liberty 2 Pro",
  "Anker Soundcore Spirit X2",
  
  // Skullcandy
  "Skullcandy Crusher Evo",
  "Skullcandy Indy Evo",
  "Skullcandy Sesh Evo",
  "Skullcandy Hesh 3",
  
  // Panasonic
  "Panasonic RZ-S500W",
  "Panasonic RZ-S300W",
  "Panasonic RP-HD610N",
  "Panasonic RP-HTX90N",
  
  // Audio-Technica
  "Audio-Technica ATH-M50xBT",
  "Audio-Technica ATH-SR50BT",
  "Audio-Technica ATH-ANC500BT",
  "Audio-Technica ATH-CKS5TW",

  // Apple
  "Apple MacBook Air M1",
  "Apple MacBook Pro 13-inch M1",
  "Apple MacBook Pro 14-inch M1 Pro",
  "Apple MacBook Pro 16-inch M1 Max",
  "Apple MacBook Air (Intel)",
  "Apple MacBook Pro 16-inch (Intel)",
  
  // Dell
  "Dell XPS 13",
  "Dell XPS 15",
  "Dell XPS 17",
  "Dell Inspiron 15",
  "Dell G5 15",
  "Dell Latitude 7420",
  "Dell Alienware m15",
  
  // HP
  "HP Spectre x360 13",
  "HP Spectre x360 14",
  "HP Envy 13",
  "HP Envy x360 15",
  "HP Pavilion 15",
  "HP Omen 15",
  "HP Elite Dragonfly",
  
  // Lenovo
  "Lenovo ThinkPad X1 Carbon",
  "Lenovo ThinkPad X1 Yoga",
  "Lenovo ThinkPad X1 Extreme",
  "Lenovo Yoga 9i",
  "Lenovo IdeaPad Flex 5",
  "Lenovo Legion 5",
  "Lenovo IdeaPad 3",
  
  // Asus
  "Asus ZenBook 13",
  "Asus ZenBook 14",
  "Asus ROG Zephyrus G14",
  "Asus VivoBook S15",
  "Asus TUF Gaming A15",
  "Asus ROG Strix G15",
  "Asus Chromebook Flip",
  
  // Acer
  "Acer Swift 3",
  "Acer Aspire 5",
  "Acer Predator Helios 300",
  "Acer Spin 5",
  "Acer Chromebook 14",
  "Acer Nitro 5",
  "Acer ConceptD 7",
  
  // Microsoft
  "Microsoft Surface Laptop 4",
  "Microsoft Surface Pro 7",
  "Microsoft Surface Book 3",
  "Microsoft Surface Go 2",
  "Microsoft Surface Pro X",
  
  // Razer
  "Razer Blade 15",
  "Razer Blade Stealth 13",
  "Razer Blade Pro 17",
  "Razer Book 13",
  
  // MSI
  "MSI GS66 Stealth",
  "MSI GE76 Raider",
  "MSI Prestige 14",
  "MSI Modern 14",
  "MSI Bravo 15",
  
  // Samsung
  "Samsung Galaxy Book Pro",
  "Samsung Galaxy Book Pro 360",
  "Samsung Galaxy Book Flex2 Alpha",
  "Samsung Galaxy Chromebook 2",
  
  // LG
  "LG Gram 14",
  "LG Gram 16",
  "LG Gram 17",
  "LG Ultra PC",
  
  // Huawei
  "Huawei MateBook X Pro",
  "Huawei MateBook 13",
  "Huawei MateBook D15",
  "Huawei MateBook D14",


   // Whirlpool
   "Whirlpool WRF535SWHZ Refrigerator",
   "Whirlpool WED7500GW Dryer",
   "Whirlpool WDF520PADM Dishwasher",
   "Whirlpool WMC20005Y Microwave",
   "Whirlpool WCVH6800UC Washer",
 
   // Samsung
   "Samsung RF28R7351SG Refrigerator",
   "Samsung DVE45R6100C Dryer",
   "Samsung DW80R9950US Dishwasher",
   "Samsung ME21M706BAS Microwave",
   "Samsung WA50R5400AV Washer",
 
   // LG
   "LG LFXS28968S Refrigerator",
   "LG DLE7300VE Dryer",
   "LG LDP6810SS Dishwasher",
   "LG LMV2031ST Microwave",
   "LG WM3700HVA Washer",
 
   // GE Appliances
   "GE GNE27JYMFS Refrigerator",
   "GE GTD72EBSJWS Dryer",
   "GE GDT665SYNFS Dishwasher",
   "GE JNM3163RJSS Microwave",
   "GE GTW685BSLWS Washer",
 
   // Frigidaire
   "Frigidaire FFSS2615TS Refrigerator",
   "Frigidaire FFLG1111L washer",
   "Frigidaire FFGF3054TS Range",
   "Frigidaire FGID2479SF Dishwasher",
   "Frigidaire FFMV1645TS Microwave",
 
   // Bosch
   "Bosch B36CL80ENS Refrigerator",
   "Bosch WAT28400UC Washer",
   "Bosch SHSM63W55N Dishwasher",
   "Bosch HMB50152UC Microwave",
   "Bosch WTG86401UC Dryer",
 
   // Maytag
   "Maytag MRT311FZDW Refrigerator",
   "Maytag MEDC465HW Dryer",
   "Maytag MDB4949SHZ Dishwasher",
   "Maytag MMV1175JZ Microwave",
   "Maytag MVWB965GW Washer",
 
   // Kenmore
   "Kenmore 70043 Refrigerator",
   "Kenmore 61212 Dryer",
   "Kenmore 13232 Dishwasher",
   "Kenmore 80323 Microwave",
   "Kenmore 29133 Washer",
 
   // KitchenAid
   "KitchenAid KBSN608ESS Refrigerator",
   "KitchenAid KDFE104HPS Dishwasher",
   "KitchenAid KCM1204OB Coffee Maker",
   "KitchenAid KMT5115ER Toaster",
   "KitchenAid KSM150PSER Stand Mixer",
 
   // Electrolux
   "Electrolux EI23CS35K Refrigerator",
   "Electrolux EFME627UIW Dryer",
   "Electrolux E30ID81SS Dishwasher",
   "Electrolux EM7203-S Microwave",
   "Electrolux ELFW7637AT Washer"
  ];
  //Sort names in ascending order
  let sortedNames = names.sort();
  
  //reference
  let input = document.getElementById("search-input");

  if(input.value){
    document.getElementById("results").style.display = "block";
  }else{
    document.getElementById("results").style.display = "none";
  }
  
  //Execute function on keyup
  input.addEventListener("keyup", (e) => {
    //loop through above array
    //Initially remove all elements ( so if user erases a letter or adds new letter then clean previous outputs)
    document.getElementById("results").style.display = "block";
    removeElements();
    for (let i of sortedNames) {
      //convert input to lowercase and compare with each string
  
      if (
        i.toLowerCase().startsWith(input.value.toLowerCase()) &&
        input.value != ""
      ) {
        //create li element
        let listItem = document.createElement("li");
        //One common class name
        listItem.classList.add("list-items");
        listItem.style.cursor = "pointer";
        listItem.setAttribute("onclick", "displayNames('" + i + "')");
        //Display matched part in bold
        let word = "<b>" + i.substr(0, input.value.length) + "</b>";
        word += i.substr(input.value.length);
        //display the value in array
        listItem.innerHTML = word;
        document.querySelector(".results").appendChild(listItem);
      }
    }
  });
  function displayNames(value) {
    input.value = value;
    removeElements();
  }
  function removeElements() {
    //clear all the item
    let items = document.querySelectorAll(".list-items");
    items.forEach((item) => {
      item.remove();
    });
  }