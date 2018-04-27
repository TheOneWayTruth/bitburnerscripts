hostname = args[0]
res = getServerRam(hostname);

base_cost = getScriptRam("allarounder.script", hostname);
ram = res[0] - res[1];

thread_multiplier = 1.005;

max_threads = 0;
max_ram = 0;
next_cost = base_cost;

print("CALCULATING MAX THREADS");
print("Script RAM Cost: " + base_cost + "GB RAM");
print("Server Free RAM: " + ram + "GB RAM");

if (base_cost > ram) {
    while (max_ram < ram) {
        print(max_threads + " THREAD cost: " + max_ram + "/" + ram + "GB RAM");

        max_ram = max_ram + next_cost;


        next_cost = next_cost * thread_multiplier;

        max_threads = max_threads + 1;
    }
    print("CALCULATIONS DONE");
    print("Max Threads: " + max_threads);
    max_threads--;
    scp("allarounder.script", "home", hostname);
    exec("allarounder.script", hostname, max_threads);

} else {
    print("not enough Ram")
}