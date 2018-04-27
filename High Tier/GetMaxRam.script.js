hostname = args[0]
res = getServerRam(hostname);
ram = res[0] - res[1];

scp("TrojanHorse.script", "home", hostname);

base_cost = getScriptRam("TrojanHorse.script", hostname);

thread_multiplier = 1.005;

max_threads = 0;
max_ram = 0;
next_cost = base_cost;


if (base_cost !== 0) {
    if (base_cost < ram) {
        while (max_ram < ram) {
            max_ram = max_ram + next_cost;
            next_cost = next_cost * thread_multiplier;
            max_threads = max_threads + 1;
        }
        max_threads--;
        exec("TrojanHorse.script", hostname, max_threads);
    } 
}