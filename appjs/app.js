setTimeout(function() {
    console.clear();
    console.log("%cSTOP RIGHT THERE!", "color: red; font-size: 48px; font-weight: bold; text-shadow: 2px 2px black;");
    console.log("%cThis console is for developers only.", "color: orange; font-size: 20px; font-weight: bold;");
    console.log("%cIf someone told you to paste code here, it's probably a scam or an attempt to steal your data.", "color: white; background: #ff0000; font-size: 16px; padding: 5px;");
    console.log("%cSecurity Warning:", "color: cyan; font-size: 16px; font-weight: bold;");
    console.log("%cNever paste unknown code into the console unless you fully understand what it does.", "color: yellow; font-size: 14px;");
    console.log("%cStay safe, coder. – AkiraJS Dev", "color: lime; font-size: 12px; font-style: italic;");
}, 1000);
function back() { window.location.href = "../akira.html"; }

const active = `
<p style="color: lime;">
<span class="text-white"><i class="fas fa-globe"></i> Developer is: </span>
<i class="fas fa-circle"></i>
Active
</p>
`;
const idle = `
<p style="color: gold;">
<span class="text-white"><i class="fas fa-laptop-code"></i> Developer is: </span>
<i class="fas fa-circle"></i>
Idle
</p>
`;
const busy = `
<p style="color: red;">
<span class="text-white"><i class="fas fa-laptop-code"></i> Developer is: </span>
<i class="fas fa-circle"></i>
Busy
</p>
`;
const offline = `
<p style="color: black;">
<span class="text-white"><i class="fas fa-laptop-code"></i> Developer is: </span>
<i class="fas fa-circle"></i>
Offline
</p>
`;
const working = `
<p style="color: orange;">
<span class="text-white"><i class="fas fa-laptop-code"></i> Developer is: </span>
<i class="fas fa-circle"></i>
Under Development
</p>
`;
document.getElementById('dev-status').innerHTML = working;

