if (fileExists("AllNodes.txt", "home")) {
    str = read("AllNodes.txt");
    AllNodes = str.split(",");
    if (fileExists("notUpgradedNodes.txt", "home")) {
        str = read("notUpgradedNodes.txt");
        AllNodes = str.split(",");
    }
    for (i = 0; i < AllNodes.length; i++) {
        if(AllNodes[i].level<200||AllNodes[i].cores<16||AllNodes[i].ram<64){
            run("UpgradeNode",1,i)
        }   
    }
    
} else {
    run("getAllNodes.script")
}