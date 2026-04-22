function runAnalysis() {
    const activeYears = parseFloat(document.getElementById('activeYears').value);
    const totalPoints = parseInt(document.getElementById('totalPoints').value);
    const condition = document.getElementById('conditionCat').value;
    const lod = document.getElementById('lodStatus').value;

    const output = document.getElementById('outputContent');
    const resultsSection = document.getElementById('results');
    resultsSection.classList.remove('hidden');

    let analysis = "";

    // 1. Retirement Agent Logic: Career vs Non-Regular
    analysis += `<div class='p-4 bg-green-900 rounded'>
        <h4 class='text-green-400 font-bold'>[RETIREMENT AGENT REPORT]</h4>`;
    if (activeYears >= 20) {
        analysis += `<p>ELIGIBILITY: Career Retiree (§1414(b)(1)). Potential for full CRDP (Concurrent Receipt).</p>`;
    } else {
        analysis += `<p>ELIGIBILITY: Non-Regular Retiree (§1414(b)(2)). Chapter 61 offset applies until Reserve Retirement Age.</p>`;
    }
    analysis += `</div>`;

    // 2. Medical Agent Logic: Condition Decision Trees
    analysis += `<div class='p-4 bg-blue-900 rounded'>
        <h4 class='text-blue-400 font-bold'>[MEDICAL AGENT REPORT]</h4>`;
    if (condition === "MSK") {
        analysis += `<p>FLAG: AR 40-501, Ch 3-8 evaluation required. Priority: Goniometer ROM readings and ACFT functional impact.</p>`;
    } else if (condition === "TBI") {
        analysis += `<p>FLAG: 38 CFR § 4.124a assessment. Facets of TBI cognitive impairment must be documented.</p>`;
    }
    analysis += `</div>`;

    // 3. Legal Agent Logic: Timelines & LOD
    analysis += `<div class='p-4 bg-red-900 rounded'>
        <h4 class='text-red-400 font-bold'>[LEGAL AGENT REPORT]</h4>`;
    analysis += `<p>CRITICAL TIMELINE: PEB Informal Findings Rebuttal window is 10 Calendar Days from receipt.</p>`;
    if (lod === "pending") {
        analysis += `<p class='text-yellow-400 font-bold'>WARNING: MEB referral requires an approved LOD for USAR AGR status. Prioritize DA Form 2173.</p>`;
    }
    analysis += `</div>`;

    output.innerHTML = analysis;
}