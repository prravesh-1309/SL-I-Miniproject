const DATA = {"All peaks":{"count":1498,"success":62.8,"deaths":60,"oxy":40.7,"so2":87.9,"sn":45.6,"no2":610,"nn":888,"reasons":{"Success":941,"Other":152,"Bad weather":105,"Bad conditions":91,"Illness, AMS, exhaustion, or frostbite":56,"Unknown":42,"Lack":30,"Accident":27,"Route technically too difficult, lack of experience, strength, or motivation":26,"Did not attempt climb":22,"Lack of time":5,"Did not reach base camp":1},"years":{"2015":[284,23.9,10,4.9],"2016":[336,69.6,8,39.3],"2017":[352,68.5,8,45.7],"2018":[354,75.7,16,49.2],"2019":[172,75.6,18,75.0]}},"Everest":{"count":434,"success":68.9,"deaths":25,"oxy":74.9,"so2":91.4,"sn":1.8,"no2":325,"nn":109,"reasons":{"Success":299,"Other":83,"Bad weather":19,"Illness, AMS, exhaustion, or frostbite":12,"Lack":7,"Accident":5,"Bad conditions":4,"Unknown":2,"Did not attempt climb":1,"Lack of time":1,"Route technically too difficult, lack of experience, strength, or motivation":1},"years":{"2015":[81,0.0,3,1.2],"2016":[80,91.2,5,92.5],"2017":[96,69.8,5,83.3],"2018":[87,92.0,2,95.4],"2019":[90,87.8,10,96.7]}},"Ama Dablam":{"count":256,"success":77.0,"deaths":4,"oxy":3.9,"so2":50.0,"sn":78.0,"no2":10,"nn":246,"reasons":{"Success":197,"Unknown":13,"Bad weather":12,"Bad conditions":9,"Illness, AMS, exhaustion, or frostbite":7,"Other":7,"Lack":4,"Accident":2,"Did not attempt climb":2,"Lack of time":2,"Route technically too difficult, lack of experience, strength, or motivation":1},"years":{"2015":[35,62.9,0,2.9],"2016":[63,87.3,0,1.6],"2017":[66,72.7,1,3.0],"2018":[80,85.0,3,6.2],"2019":[12,33.3,0,8.3]}},"Manaslu":{"count":138,"success":79.7,"deaths":5,"oxy":61.6,"so2":98.8,"sn":49.1,"no2":85,"nn":53,"reasons":{"Success":110,"Bad conditions":13,"Bad weather":8,"Other":3,"Illness, AMS, exhaustion, or frostbite":2,"Lack":1,"Unknown":1},"years":{"2015":[22,59.1,1,31.8],"2016":[36,83.3,1,47.2],"2017":[47,85.1,1,74.5],"2018":[33,81.8,2,78.8]}},"Lhotse":{"count":102,"success":56.9,"deaths":3,"oxy":63.7,"so2":84.6,"sn":8.1,"no2":65,"nn":37,"reasons":{"Success":58,"Other":21,"Accident":11,"Illness, AMS, exhaustion, or frostbite":5,"Bad weather":3,"Lack":2,"Bad conditions":1,"Unknown":1},"years":{"2015":[21,0.0,1,0.0],"2016":[14,0.0,0,57.1],"2017":[18,83.3,0,83.3],"2018":[26,88.5,1,84.6],"2019":[23,87.0,1,87.0]}},"Cho Oyu":{"count":75,"success":64.0,"deaths":1,"oxy":52.0,"so2":94.9,"sn":30.6,"no2":39,"nn":36,"reasons":{"Success":48,"Other":10,"Unknown":4,"Lack":3,"Illness, AMS, exhaustion, or frostbite":3,"Did not attempt climb":2,"Bad weather":2,"Accident":1,"Bad conditions":1,"Route technically too difficult, lack of experience, strength, or motivation":1},"years":{"2015":[10,0.0,0,0.0],"2016":[32,81.2,0,59.4],"2017":[6,16.7,0,33.3],"2018":[24,87.5,1,75.0],"2019":[3,0.0,0,0.0]}},"Himlung Himal":{"count":57,"success":73.7,"deaths":0,"oxy":8.8,"so2":60.0,"sn":75.0,"no2":5,"nn":52,"reasons":{"Success":42,"Bad conditions":5,"Illness, AMS, exhaustion, or frostbite":4,"Bad weather":4,"Accident":1,"Unknown":1},"years":{"2015":[10,70.0,0,10.0],"2016":[13,53.8,0,7.7],"2017":[10,90.0,0,10.0],"2018":[19,78.9,0,10.5],"2019":[5,80.0,0,0.0]}},"Makalu":{"count":51,"success":43.1,"deaths":3,"oxy":54.9,"so2":67.9,"sn":13.0,"no2":28,"nn":23,"reasons":{"Success":22,"Other":10,"Lack":8,"Illness, AMS, exhaustion, or frostbite":6,"Bad conditions":2,"Bad weather":2,"Route technically too difficult, lack of experience, strength, or motivation":1},"years":{"2015":[11,0.0,0,9.1],"2016":[10,70.0,0,40.0],"2017":[15,20.0,0,60.0],"2018":[5,60.0,0,80.0],"2019":[10,90.0,3,100.0]}},"Dhaulagiri I":{"count":38,"success":47.4,"deaths":3,"oxy":47.4,"so2":66.7,"sn":30.0,"no2":18,"nn":20,"reasons":{"Success":18,"Bad weather":9,"Bad conditions":3,"Illness, AMS, exhaustion, or frostbite":2,"Route technically too difficult, lack of experience, strength, or motivation":2,"Other":2,"Did not attempt climb":1,"Lack of time":1},"years":{"2015":[4,0.0,0,0.0],"2016":[10,50.0,2,40.0],"2017":[14,85.7,0,71.4],"2018":[8,0.0,1,37.5],"2019":[2,50.0,0,50.0]}},"Annapurna I":{"count":28,"success":39.3,"deaths":2,"oxy":32.1,"so2":77.8,"sn":21.1,"no2":9,"nn":19,"reasons":{"Success":11,"Bad conditions":5,"Bad weather":5,"Other":4,"Illness, AMS, exhaustion, or frostbite":2,"Accident":1},"years":{"2015":[11,9.1,1,18.2],"2016":[5,80.0,0,60.0],"2017":[7,42.9,0,0.0],"2018":[2,50.0,0,50.0],"2019":[3,66.7,1,100.0]}},"Baruntse":{"count":25,"success":32.0,"deaths":0,"oxy":4.0,"so2":100.0,"sn":29.2,"no2":1,"nn":24,"reasons":{"Success":8,"Bad conditions":7,"Bad weather":3,"Route technically too difficult, lack of experience, strength, or motivation":3,"Unknown":3,"Other":1},"years":{"2015":[6,0.0,0,0.0],"2016":[4,50.0,0,0.0],"2017":[6,66.7,0,16.7],"2018":[8,25.0,0,0.0],"2019":[1,0.0,0,0.0]}}};
const years = ["2015","2016","2017","2018","2019"];
const metricNames = ["Number of expeditions","Success rate (%)","Deaths","Oxygen use (%)"];
const $ = id => document.getElementById(id);
const css = v => getComputedStyle(document.documentElement).getPropertyValue(v).trim();
const peakSel = $("peak");
Object.keys(DATA).forEach(p => peakSel.add(new Option(p, p)));
let c1, c2, c3;

function draw() {
  const d = DATA[peakSel.value];
  const m = Number($("metric").value);
  const teal = css("--teal"), orange = css("--orange"), muted = css("--muted"), line = css("--line");
  Chart.defaults.color = muted;
  Chart.defaults.font.family = "Public Sans, system-ui, sans-serif";

  $("s1").textContent = d.count.toLocaleString();
  $("s2").textContent = d.success + "%";
  $("s3").textContent = d.deaths;
  $("s4").textContent = d.oxy + "%";
  $("ttl").textContent = metricNames[m] + " by year, " + peakSel.value;

  const names = Object.keys(d.reasons);
  const grid = { color: line };
  if (c1) c1.destroy(); if (c2) c2.destroy(); if (c3) c3.destroy();

  c1 = new Chart($("c1"), { type: "bar",
    data: { labels: names, datasets: [{ data: Object.values(d.reasons), backgroundColor: names.map(n => n === "Success" ? teal : orange) }] },
    options: { indexAxis: "y", maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { x: { grid }, y: { grid: { display: false } } } } });

  c3 = new Chart($("c3"), { type: "bar",
    data: { labels: ["Without oxygen", "With oxygen"], datasets: [{ data: [d.sn || 0, d.so2 || 0], backgroundColor: [orange, teal] }] },
    options: { maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { y: { min: 0, max: 100, grid, title: { display: true, text: "Success rate (%)" } }, x: { grid: { display: false } } } } });
  $("oxnote").textContent = d.nn + " expeditions without oxygen and " + d.no2 + " with oxygen." + (d.nn < 10 || d.no2 < 10 ? " One group is very small, so read its bar with care." : "");

  const vals = years.map(y => d.years[y] ? d.years[y][m] : null);
  c2 = new Chart($("c2"), { type: $("ctype").value,
    data: { labels: years, datasets: [{ label: metricNames[m], data: vals, borderColor: teal, backgroundColor: teal, tension: 0.25, pointRadius: 5 }] },
    options: { maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true, grid }, x: { grid: { display: false } } } } });
}

["peak", "metric", "ctype"].forEach(id => $(id).addEventListener("change", draw));
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", draw);
new MutationObserver(draw).observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
draw();
