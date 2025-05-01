const first = () => {
    second ();
    console.log("ami first");
}

const second = () => {
    third ();
    console.log("ami second a asbo");
}

const third = () => {
    console.log("ami third");
    
}

first () ; 